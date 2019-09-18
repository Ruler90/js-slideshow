# JS Slideshow


## How is it build?

### 1. HTML
- It's just one div which is a container for all pictures, optional buttons if you want to change slides manually and img tags with pictures you want to use as slides.

### 2. CSS
- 2 files - first for styling and second for animations.

### 3. JS
- One function for next slide, one function for previous slide (optional if you won't use buttons) and setInterval for next slide.
 
 
## How is it work?

### 1. HTML:
- The most important thing is that all images need to have the same class so you can grab them with javascript (here -> mainSlides -> this class doesn't do anything else) and the second class that gives display: none (here --> slidePic--hidden). Don't give this class to the picture that you want to display first.

### 2. CSS:
- Container div has overflow: hidden because you don't want to see pictures when they slide in or out outside the container.
- Container div has position: relative because when images slide in or out they get position: absolute and have fixed position where the animation starts and ends.
- IMPORTANT - container div need to have fixed height and width or you won't have any control how it looks like on website. Moreover if it won't have fixed height it will disappear when the slides are changing (display: none is added to one and removed from another but entire div disappears).
- Container div has flex just for buttons.
- If you use bigger images than the container, use height: auto and width: 100% for images to make them fit the container. If you don't want the pictures to be cropped, keep the right aspect ratio of the pictures and container.
- If buttons won't have z-index, they will disappear when slides are changing.
- Buttons have opacity: 0 by default and they will show when you hover over container.
- When you hover over buttons, they will be even more visible.
- There is scaling animation of the button when button is clicked.

### 3. Animations CSS:
- There are 3 animation classes (to not repeat our code): first class for main properties, second for animation's time (you can merge them into one but remeber to remove not used class from js code) and the third with animation's name and then keyframes for each named animation.
- Animations give position: absolute to slides and make them slide in or out from left to right, from right to left and from normal position to left or right (I called them slideFromZeroToRight and slideFromZeroToLeft).
18.09.2019 I changed absolute left and right in animations to transform: translateX().
- IMPORTANT - value of left and right depends on container width (if you have 1600px, just change 800px and -800px to 1600px and -1600px; if you have 100vw, make it 100vh and -100vh etc.).

### 4. JavaScript:
- This code is based on one common class for all images -> you grab them with querySelectorAll and then use in for loops.
- The loop used in nextSlide function (starting from its second block):
    * the loop checks if any of the images has slidePic--hidden class (the one that gives display: none) and if no, it gives animation classes to it to make it slide out;
    * removes slidePic--hidden from the picture that is next in the HTML code and gives animation classes to it to make it slide in;
    * uses setTimeout to remove animation classes after the time that is needed to end animation and adds slidePic--hidden to picture that didn't have that class.
- First block of nextSlide function -> everything as above but it applies when you see the last image in HTML code and want to see the first one.
- The previousSlide function works backwards and it's optional when you won't have buttons to change to next/previous slide.
- There is setInterval so the slides can auto change.
- nextSlide and previousSlide functions have 2 lines of code that will reset auto change interval when you click the button that has that function. 

### 5. Bonus - JS:
- First, I wrote 700 in every setTimeout in JS code. When I wanted to change animation duration time, it was many changes to make. Now I added one div with class animation--time and grabbed it with javascript, removed 's' from string (there was '0.7s'), changed it to number (with + operator) and multiplied by 1000 to get 700.
Now you need to make one change (in animation--time class) and this change will apply to js code too. 
