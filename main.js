const hamburgerMenu = document.querySelector(".hamburger__icon")
const nav = document.querySelector('.nav');

hamburgerMenu.addEventListener("click", () => {
  console.log("Hmaburger menu clicked")
  nav.classList.toggle("nav--visible")
})