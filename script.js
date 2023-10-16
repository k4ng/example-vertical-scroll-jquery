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
