const menuBar = document.querySelector("#menu-bar");
const navMenu = document.querySelector("#nav-menu");

menuBar.addEventListener("click", function () {
  menuBar.classList.toggle("menu-bar-active");
  navMenu.classList.toggle("hidden");
});
