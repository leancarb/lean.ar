// // Dark mode button
// const toggle = document.querySelector(".nav__toggle");
// const main = document.querySelector(".main");
// const mainAboutMe = document.querySelector(".main__about-me");
// const mainContactMe = document.querySelector(".main__about-me--anchor");
// const mainName = document.querySelector(".main__name");
// const footerParagraph = document.querySelector(".footer__paragraph");
// const body = document.body;

// // Light/dark icon
// const moonIcon = document.querySelector("#moon");
// const lightModeIcon = "moon";
// const darkModeIcon = "sunny";

// // function add dark class
// const addDark = function () {
//   body.classList.add("dark");
//   toggle.classList.add("dark");
//   main.classList.add("dark");
//   mainAboutMe.classList.add("dark");
//   mainContactMe.classList.add("dark");
//   mainName.classList.add("dark");
//   footerParagraph.classList.add("dark");
// };
// // function toggle dark class
// const toggleDark = function () {
//   body.classList.toggle("dark");
//   toggle.classList.toggle("dark");
//   main.classList.toggle("dark");
//   mainAboutMe.classList.toggle("dark");
//   mainContactMe.classList.toggle("dark");
//   mainName.classList.toggle("dark");
//   footerParagraph.classList.toggle("dark");
// };
// // function remove dark class
// const removeDark = function () {
//   body.classList.remove("dark");
//   toggle.classList.remove("dark");
//   main.classList.remove("dark");
//   mainAboutMe.classList.remove("dark");
//   mainContactMe.classList.remove("dark");
//   mainName.classList.remove("dark");
//   footerParagraph.classList.remove("dark");
// };

// // Local Storage
// toggle.addEventListener("click", function () {
//   // Change icon sun/moon
//   const currentIcon = moonIcon.getAttribute("name");
//   let newIcon;
//   if (currentIcon === lightModeIcon) {
//     newIcon = darkModeIcon;
//   } else {
//     newIcon = lightModeIcon;
//   }
//   moonIcon.setAttribute("name", newIcon);

//   const body = document.querySelector("body");
//   toggleDark();
//   if (body.classList.contains("dark")) {
//     localStorage.setItem("darkMode", "on");
//   } else {
//     localStorage.setItem("darkMode", "off");
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const darkMode = localStorage.getItem("darkMode");
//   if (darkMode === "on") {
//     addDark();
//   } else {
//     removeDark();
//   }
// });

// Footer text
const currentYear = new Date().getFullYear();
const copyright = document.querySelector(".footer__paragraph");
copyright.innerHTML = `leandro carbonetti &mdash; 2023`;
