// Menu toggle
const menuBar = document.querySelector("#menu-bar");
const navMenu = document.querySelector("#nav-menu");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("menu-bar-active");
  navMenu.classList.toggle("hidden");
});

// Work & Other Experience toggle
const bWork = document.querySelector("#b-work");
const bOt = document.querySelector("#b-ot");
const workExp = document.querySelector("#work-exp");
const otExp = document.querySelector("#ot-exp");

bWork.addEventListener("click", () => {
  bWork.classList.add("b-active");
  bOt.classList.remove("b-active");
  workExp.classList.remove("hidden");
  otExp.classList.add("hidden");
});

bOt.addEventListener("click", () => {
  bWork.classList.remove("b-active");
  bOt.classList.add("b-active");
  workExp.classList.add("hidden");
  otExp.classList.remove("hidden");
});

// Overlay handler (dinamis)
document.querySelectorAll("[data-card]").forEach(card => {
  const id = card.dataset.card;
  const overlays = document.querySelectorAll(`[data-overlay^="${id}"]`);

  card.addEventListener("mouseenter", () => {
    overlays.forEach(o => o.classList.remove("hidden"));
  });
  card.addEventListener("mouseleave", () => {
    overlays.forEach(o => o.classList.add("hidden"));
  });
});

// Show more / less
const bShow = document.querySelector("#b-show-more");
const bLess = document.querySelector("#b-show-less");
const extraCards = ["#card-smack-mouse", "#card-portofolio"].map(sel => document.querySelector(sel));

bShow.addEventListener("click", () => {
  extraCards.forEach(c => c.classList.remove("hidden"));
  bLess.classList.remove("hidden");
  bShow.classList.add("hidden");
});

bLess.addEventListener("click", () => {
  extraCards.forEach(c => c.classList.add("hidden"));
  bLess.classList.add("hidden");
  bShow.classList.remove("hidden");
});
