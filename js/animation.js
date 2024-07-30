document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".animated-section");

  function checkScroll() {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      // console.log(rect);
      const scrollPosition = window.innerHeight / 1.5; // Adjust based on when you want the animation to start

      if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
        const elements = section.querySelectorAll(".hidden");
        // console.log(elements);
        elements.forEach((element) => {
          element.classList.add("visible");
          element.classList.remove("hidden");
          // console.log("ok");
        });
        // } else {
        //     element.classList.remove('visible');
        //     element.classList.add('hidden');
      }
    });
  }

  // Initial check on page load
  checkScroll();

  // Check on scroll
  window.addEventListener("scroll", checkScroll);
});
