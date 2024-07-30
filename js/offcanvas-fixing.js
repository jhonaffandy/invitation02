const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");

offcanvas.addEventListener("show.bs.offcanvas", () => {
  stickyTop.style.overflow = "visible";
});
offcanvas.addEventListener("hidden.bs.offcanvas", () => {
  stickyTop.style.overflow = "hidden";
});

// close on href js
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    const buttonCLose = document.querySelector(".btn-close");
    buttonCLose.click();
  });
});
