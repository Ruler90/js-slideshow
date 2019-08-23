# JS Slideshow

How is it build?

1. HTML - It's just one div which is a container for all pictures, optional buttons if you want to change slides manually and img tags with pictures we want to use as slides.

2. CSS - 2 files - first for styling and second for animations.

3. JS - one function for next slide, one function for previous slide (optional if you will not use buttons) and setInterval for next slide.
 
How is it work?

1. HTML:
- The most important thing is that all images need to have the same class so we can grab them with javascript (here -> mainSlides -> this class doesn't do anything else) and the second class that gives display: none (here --> slidePic-hidden). Don't give this class to the picture that you want to display first.

2. CSS:
- Container div has overflow: hidden so we don't see pictures when they slide in and slide out outside the container.

3. Animations CSS:
-