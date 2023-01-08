const menuBar = document.querySelector("#menu-bar");
const navMenu = document.querySelector("#nav-menu");
const bWork = document.querySelector("#b-work");
const bOt = document.querySelector("#b-ot");
const workExp = document.querySelector("#work-exp");
const otExp = document.querySelector("#ot-exp");

menuBar.addEventListener("click", function () {
  menuBar.classList.toggle("menu-bar-active");
  navMenu.classList.toggle("hidden");
});

bWork.addEventListener("click", function () {
  bWork.classList.add("b-active");
  bOt.classList.remove("b-active");
  workExp.classList.remove("hidden");
  otExp.classList.add("hidden");
});

bOt.addEventListener("click", function () {
  bWork.classList.remove("b-active");
  bOt.classList.add("b-active");
  workExp.classList.add("hidden");
  otExp.classList.remove("hidden");
});
