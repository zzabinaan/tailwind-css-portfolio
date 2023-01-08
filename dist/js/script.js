const menuBar = document.querySelector("#menu-bar");
const navMenu = document.querySelector("#nav-menu");
const bWork = document.querySelector("#b-work");
const bOt = document.querySelector("#b-ot");
const workExp = document.querySelector("#work-exp");
const otExp = document.querySelector("#ot-exp");

const cUmkmverse = document.querySelector("#card-umkmverse");
const overlayUmkmverse = document.querySelector("#overlay-umkmverse");
const overlayUmkmverse2 = document.querySelector("#overlay-umkmverse2");

const cUrievent = document.querySelector("#card-urievent");
const overlayurievent = document.querySelector("#overlay-urievent");
const overlayurievent2 = document.querySelector("#overlay-urievent2");

function overlayUmkm(){
  overlayUmkmverse.classList.remove("hidden");
  overlayUmkmverse2.classList.remove("hidden");
}  

function hideoverlayUmkm(){
  overlayUmkmverse.classList.add("hidden");
  overlayUmkmverse2.classList.add("hidden");
}

function overlayUrievent(){
  overlayurievent.classList.remove("hidden");
  overlayurievent2.classList.remove("hidden");
}  

function hideoverlayUrievent(){
  overlayurievent.classList.add("hidden");
  overlayurievent2.classList.add("hidden");
}

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
