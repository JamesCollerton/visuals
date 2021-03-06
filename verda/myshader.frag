/*{ "audio": true }*/
precision mediump float;

/*
  UNIFORMS: Shared across all threads
*/

// Standard uniforms
uniform float time;
uniform vec2  resolution;

/*
  Audio uniforms

  sampler2D samples stores the most recent 256 frames from the audio input.
  This is useful for drawing waveforms.

  sampler2D spectrum stores the FFT result.
  This is useful to draw the volume of specific frequency band, such as spectrum visualizer.

  float volume is the average of all the frequency bands in spectrum.
*/

uniform sampler2D texture;
uniform sampler2D spectrum;
uniform sampler2D samples;
uniform float volume;

/*
  UTILITY FUNCTIONS

  These are all wrapper functions used to perform tasks shared by the various visual
  functions
*/

// Plot a line on Y using a value between 0.0-1.0
float plot(vec2 st, float pct){
  // I think this is pretty much stretch the y value between the two
  // x values
  return  smoothstep( pct-0.02, pct, st.y) -
          smoothstep( pct, pct+0.02, st.y);
}

/*
  VISUAL FUNCTIONS

  All of these should have the parameters in the top of the function in order to
  alter the shapes drawn
*/

// Plots a wave form sensitive to sound
void audioWave(vec2 uv) {

  float sensitivity = 0.01;

  float wave = texture2D(samples, vec2(uv.x, .5)).g;

  // Step, first field is a limit, second one is the value we want to check or pass. So if this
  // is less than 0.1 it will be 1.0, otherwise it will be 0. So if this is over 0.01 then we see
  // white, otherwise it's black
  float c = 1.0 - step(sensitivity, abs(wave - uv.y));

  gl_FragColor = vec4(c);
}

void plotLine(vec2 uv) {

  // So at any one time uv seems to be the (x, y) coordinates of the current
  // pixel being shaded.
  float y = 0.4 * sin(uv.x * 15.0) + 0.5;

  vec3 color = vec3(0.0);

  // Plot a line
  float pct = plot(uv,y);
  color = (1.0-pct)*color+pct*vec3(1.0);

  gl_FragColor = vec4(color,1.0);

}

void timeSpectrum(vec2 uv) {

  float wave = texture2D(spectrum, vec2(uv.y, .5)).r;

  float c = 1. - step(0.01, abs(wave - uv.y));

  gl_FragColor = vec4(uv, wave * 10.0, 1.0);
}

/*
  MAIN

  This is the main function. Different functions can be uncommented in order
  to activate them. The gl_FragColor will be set in each function so they cannot
  be combined.
*/

void main (void) {
    // This normalises the frag coord by dividing it by the resolution, making the values
    // run from 0 to 1
    vec2 uv = gl_FragCoord.xy / resolution.xy;

    audioWave(uv);
    // volumeFader(uv);
    // timeSpectrum(uv);
    // plotLine(uv);

}
