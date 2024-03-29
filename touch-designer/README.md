# Touch Designer

## Tutorials

- https://alltd.org/

## Operators

There are six Families of Operators. Of the six families, five are basic operator families and one is the Component family which can further contain networks of operators. Components containing components form the TouchDesigner hierarchy and give rise to the operator Paths.

### COMPs 

Components - Object components (3D objects), Panel components (2D UI gadgets), and miscellaneous components. Components contain other operators.

### TOPs 

Texture Operators - all 2D image operations.

- These are essentially _visual_ inputs
- We can zoom out to the project view to set global settings

#### List of TOPs

- Circle: Simple shape
- Edge: Find the edge of an image
- Feedback: Create a feedback loop, these essentially add repeated steps over and over, it's good to decrease opacity at each step to prevent the output being overwhelmed.
- Movie File In: Image or movie in
- Noise: Generate random noise
- Null: Sort of terminus
- HSV Adjust: Change colours
- Levels: Similar to Photoshop levels
- Edge: Detecting edges of images
- Composite: A way of adding together two images
- Displace: Moving images based on a second image

### CHOPs 

Channel Operators - motion, audio, animation, control signals.

- These emit values, so could be emitted via audio input, visual input etc.
- MIDI interfaces are also CHOPs

### SOPs

Surface Operators - 3D points, polygons and other 3D "primitives".

- Can activate the viewer mode and browse in 3D
- We need from COMPs camera, light and geometry, them from TOPs a render
- You can rotate the camera to change the render
- There's a snap to camera option
- Turbulence and normals are key to particles

### DATs 

Data Operators - ASCII text as plain text, scripts, XML, or organized in tables of cells.

### MATs 

Material Operators - materials and shaders.