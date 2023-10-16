# Example Vertical Scroll JQUERY
This is a sample code for make Vertical Scroll or Snapping Scroll on HTML Web using JQUERY. You can trigger vertical scroll using scrolling mouse or using arrow up and down on your keyboard

### Demo
[Click Here](https://k4ng.github.io/example-vertical-scroll-jquery)

### Result
![Result](https://raw.githubusercontent.com/k4ng/example-vertical-scroll-jquery/main/ScreenShotResult.png)


### [script.js](https://github.com/k4ng/example-vertical-scroll-jquery/blob/main/script.js)
In this file, you can set animation duration scroll on variable **animationDuration**

``` javascript
$(document).ready(function () {
  var sections = $("section");
  var currentSection = 0;
  var animationDuration = 500; // Change this value to adjust the response speed

  // Scroll to the next or previous section when the user scrolls with the mouse wheel
  $(window).on("mousewheel DOMMouseScroll", function (e) {
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      currentSection = Math.max(currentSection - 1, 0);
    } else {
      currentSection = Math.min(currentSection + 1, sections.length - 1);
    }
    scrollToSection(currentSection);
  });

  // Handle arrow key navigation
  $(document).keydown(function (e) {
    if (e.keyCode === 38) {
      // Up arrow key
      currentSection = Math.max(currentSection - 1, 0);
      scrollToSection(currentSection);
    } else if (e.keyCode === 40) {
      // Down arrow key
      currentSection = Math.min(currentSection + 1, sections.length - 1);
      scrollToSection(currentSection);
    }
  });

  // Function to scroll to a specific section
  function scrollToSection(index) {
    var target = sections.eq(index);
    $("html, body").animate(
      {
        scrollTop: target.offset().top,
      },
      animationDuration
    ); // Adjust the animation duration here
  }
});
```
