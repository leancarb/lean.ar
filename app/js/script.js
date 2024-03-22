// Light/dark icon
const moonIcon = document.querySelector("#moon");
const lightModeIcon = "moon";
const darkModeIcon = "sunny";

// Dark mode
const modeToggle = document.querySelector(".nav__toggle");

// let isDarkMode = window.matchMedia("(prefers-colo-scheme: dark)").matches;

modeToggle.addEventListener("click", () => {
  // Change icon sun/moon
  const currentIcon = moonIcon.getAttribute("name");
  let newIcon;
  if (currentIcon === lightModeIcon) {
    newIcon = darkModeIcon;
  } else {
    newIcon = lightModeIcon;
  }
  moonIcon.setAttribute("name", newIcon);
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    applyDarkMode();
    setBodyBackgroundColor();
  } else {
    applyLightMode();
  }
});

// // Consts DOM
// const body = document.body;
// const main = document.querySelector(".main");
// const mainAboutMe = document.querySelector(".main__about-me");
// const mainAnchorLink = document.querySelector(".main__about-me--anchor");
// const mainName = document.querySelector(".main__name");
// const footerParagraph = document.querySelector(".footer__paragraph");
// const githubIcon = document.querySelector(".icon-github");

// Apply light mode function
// function applyLightMode() {
//   body.style.backgroundColor = "var(--lavender-bg)";
//   modeToggle.style.backgroundColor = "var(--lavender-light)";
//   modeToggle.style.borderColor = "var(--lavender-lighter)";
//   // Toggle hover
//   modeToggle.addEventListener("mouseenter", () => {
//     modeToggle.style.backgroundColor = "var(--lavender)";
//   });
//   modeToggle.addEventListener("mouseleave", () => {
//     modeToggle.style.backgroundColor = "";
//   });

//   main.style.backgroundColor = "var(--lavender-white)";
//   mainAboutMe.style.color = "var(--lavender-black)";
//   // Contact me hover
//   mainAnchorLink.addEventListener("mouseenter", () => {
//     mainAnchorLink.style.color = "var(--lavender)";
//   });
//   mainAnchorLink.addEventListener("mouseleave", () => {
//     mainAnchorLink.style.color = "var(--lavender-light)";
//   });

//   mainName.style.color = "var(--lavender-darker)";
//   footerParagraph.style.color = "var(--lavender-dark)";
//   // Github hover
//   githubIcon.addEventListener("mouseenter", () => {
//     githubIcon.style.color = "var(--github-light)";
//   });
//   githubIcon.addEventListener("mouseleave", () => {
//     githubIcon.style.color = "";
//   });
// }

// // Apply dark mode function
// function applyDarkMode() {
//   body.style.backgroundColor = "var(--lavender-darker)";
//   modeToggle.style.backgroundColor = "var(--lavender)";
//   modeToggle.style.borderColor = "var(--lavender-light)";
//   // Toggle hover
//   modeToggle.addEventListener("mouseleave", () => {
//     modeToggle.style.backgroundColor = "var(--lavender-dark)";
//   });
//   modeToggle.addEventListener("mouseenter", () => {
//     modeToggle.style.backgroundColor = "";
//   });

//   main.style.backgroundColor = "var(--lavender-dark)";
//   mainAboutMe.style.color = "var(--lavender-lighter)";
//   // Contact me hover
//   mainAnchorLink.addEventListener("mouseenter", () => {
//     mainAnchorLink.style.color = "var(--lavender-lighter)";
//   });
//   mainAnchorLink.addEventListener("mouseleave", () => {
//     mainAnchorLink.style.color = "var(--lavender-light)";
//   });
//   mainName.style.color = "var(--lavender-light)";
//   footerParagraph.style.color = "var(--lavender-lighter)";
//   // Github hover
//   githubIcon.addEventListener("mouseenter", () => {
//     githubIcon.style.color = "var(--github-dark)";
//   });
//   githubIcon.addEventListener("mouseleave", () => {
//     githubIcon.style.color = "";
//   });
// }

// Footer text
const currentYear = new Date().getFullYear();
const copyright = document.querySelector(".footer__paragraph");
copyright.innerHTML = `leandro carbonetti &mdash; ${currentYear}`;

// // MediaQuery for body bg
// const mobileMediaQueria = window.matchMedia("(max-width: 40em)");

// function setBodyBackgroundColor() {
//   if (mobileMediaQueria.matches) {
//     body.style.backgroundColor = "var(--lavender-dark)";
//   } else {
//     main.backgroundColor = "var(--lavender-darker)";
//   }
// }
