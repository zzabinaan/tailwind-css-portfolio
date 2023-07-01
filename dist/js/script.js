const menuBar = document.querySelector("#menu-bar");
const navMenu = document.querySelector("#nav-menu");
const bWork = document.querySelector("#b-work");
const bOt = document.querySelector("#b-ot");
const workExp = document.querySelector("#work-exp");
const otExp = document.querySelector("#ot-exp");

const cUmkmverse = document.querySelector("#card-umkmverse");
const overlayUmkmverse = document.querySelector("#overlay-umkmverse");
const overlayUmkmverse2 = document.querySelector("#overlay-umkmverse2");

const cdonora = document.querySelector("#card-donora");
const overlaydonora = document.querySelector("#overlay-donora");
const overlaydonora2 = document.querySelector("#overlay-donora2");

const cKursusOnline = document.querySelector("#card-kursusOnline");
const overlaykursusOnline = document.querySelector("#overlay-kursusOnline");
const overlaykursusOnline2 = document.querySelector("#overlay-kursusOnline2");

const cSmackMouse = document.querySelector("#card-smack-mouse");
const overlaySmackMouse = document.querySelector("#overlay-smack-mouse");
const overlaySmackMouse2 = document.querySelector("#overlay-smack-mouse2");

const cUrievent = document.querySelector("#card-urievent");
const overlayurievent = document.querySelector("#overlay-urievent");
const overlayurievent2 = document.querySelector("#overlay-urievent2");

const cPortofolio = document.querySelector("#card-portofolio");
const overlayportofolio = document.querySelector("#overlay-portofolio");
const overlayportofolio2 = document.querySelector("#overlay-portofolio2");

const bShow = document.querySelector("#b-show-more");
const bLess = document.querySelector("#b-show-less");

function overlayUmkm() {
  overlayUmkmverse.classList.remove("hidden");
  overlayUmkmverse2.classList.remove("hidden");
}

function hideoverlayUmkm() {
  overlayUmkmverse.classList.add("hidden");
  overlayUmkmverse2.classList.add("hidden");
}

function overlayDonora() {
  overlaydonora.classList.remove("hidden");
  overlaydonora2.classList.remove("hidden");
}

function hideoverlayDonora() {
  overlaydonora.classList.add("hidden");
  overlaydonora2.classList.add("hidden");
}

function overlayKursusOnline() {
  overlaykursusOnline.classList.remove("hidden");
  overlaykursusOnline2.classList.remove("hidden");
}

function hideoverlayKursusOnline() {
  overlaykursusOnline.classList.add("hidden");
  overlaykursusOnline2.classList.add("hidden");
}

function overlayUrievent() {
  overlayurievent.classList.remove("hidden");
  overlayurievent2.classList.remove("hidden");
}

function hideoverlayUrievent() {
  overlayurievent.classList.add("hidden");
  overlayurievent2.classList.add("hidden");
}

function overlaySmackmouse() {
  overlaySmackMouse.classList.remove("hidden");
  overlaySmackMouse2.classList.remove("hidden");
}

function hideoverlaySmackmouse() {
  overlaySmackMouse.classList.add("hidden");
  overlaySmackMouse2.classList.add("hidden");
}

function overlayPortofolio() {
  overlayportofolio.classList.remove("hidden");
  overlayportofolio2.classList.remove("hidden");
}

function hideoverlayPortofolio() {
  overlayportofolio.classList.add("hidden");
  overlayportofolio2.classList.add("hidden");
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

bShow.addEventListener("click", function () {
  cSmackMouse.classList.remove("hidden");
  cPortofolio.classList.remove("hidden");
  bLess.classList.remove("hidden");
  bShow.classList.add("hidden");
});

bLess.addEventListener("click", function () {
  cSmackMouse.classList.add("hidden");
  cPortofolio.classList.add("hidden");
  bLess.classList.add("hidden");
  bShow.classList.remove("hidden");
});
