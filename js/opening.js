// // const openingSection = document.querySelector(".opening");
// // function hideSection() {
// //   openingSection.classList.remove("d-flex");
// //   openingSection.classList.add("d-none");
// //   console.log(openingSection);
// //   console.log("run");
// // }
// // console.log("jalan");
// // // Set a timer to hide the section after 5 seconds (5000 milliseconds)
// // function disapear() {
// //   openingSection.classList.add("fade-out");
// // }

// // setTimeout(disapear, 1000);
// // // setTimeout(hideSection, 5000);

// document.addEventListener("DOMContentLoaded", function () {
//   const section1 = document.getElementById("opening");
//   const section2 = document.getElementById("hero");

//   // Function to hide section1 and show section2 after a delay
//   function transitionSections() {
//     section1.classList.add("hiddenOppening"); // Hide section1
//     section2.classList.remove("hiddenOppening"); // Show section2
//   }

//   // Set a timer to transition sections after 5 seconds (5000 milliseconds)
//   setTimeout(transitionSections, 5000);
// });

document.addEventListener("DOMContentLoaded", function () {
  const section1 = document.getElementById("uniqueSection1");
  const section2 = document.getElementById("hero");

  // Function to toggle visibility of sections
  function toggleSections() {
    section1.classList.toggle("hidden");
    section2.classList.toggle("hidden");
    setTimeout(() => {
      document.querySelector("#videoBackground").innerHTML = `
        <source src="mov/4cbafce1e1a44958a6c399a17b531230.MOV" type="video/mp4">
            Your browser does not support the video tag.
        `;
    }, 1000);
  }

  const firstWord = document.querySelector(".firstWord");
  const secondWord = document.querySelector(".secondWord");
  setTimeout(() => {
    firstWord.classList.remove("tracking-in-expand-fwd");
    firstWord.classList.add("tracking-out-contract-bck");
    setTimeout(() => {
      firstWord.classList.toggle("hiddenOppening");
      secondWord.classList.toggle("hiddenOppening");
      setTimeout(toggleSections, 1000);
    }, 1000);
  }, 2000);
});
