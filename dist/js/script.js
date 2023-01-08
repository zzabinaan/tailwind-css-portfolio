const menuBar = document.querySelector("#menu-bar");
const navMenu = document.querySelector("#nav-menu");
const bWork = document.querySelector("#b-work");
const bEd = document.querySelector("#b-ed");
const bOt = document.querySelector("#b-ot");
const workExp = document.querySelector("#work-exp");
const edExp = document.querySelector("#ed-exp");
const otExp = document.querySelector("#ot-exp");

menuBar.addEventListener("click", function () {
  menuBar.classList.toggle("menu-bar-active");
  navMenu.classList.toggle("hidden");
});

bWork.addEventListener("click", function () {
  workExp.classList.remove("hidden");
  edExp.classList.add("hidden");
  otExp.classList.add("hidden");
});
bEd.addEventListener("click", function () {
  workExp.classList.add("hidden");
  edExp.classList.remove("hidden");
  otExp.classList.add("hidden");
});

bOt.addEventListener("click", function () {
  workExp.classList.add("hidden");
  edExp.classList.add("hidden");
  otExp.classList.remove("hidden");
});
