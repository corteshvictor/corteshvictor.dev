import router from "./router.js";

router(window.location.hash);
window.addEventListener("hashchange", () => {
  router(window.location.hash);
});

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("main-nav--show");
});

document.querySelector("#nav-home").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("main-nav--show");
});

document.querySelector("#nav-aboutme").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("main-nav--show");
});

document.querySelector("#nav-tutorials").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("main-nav--show");
});

document.querySelector("#nav-article").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("main-nav--show");
});

document.querySelector("#nav-hobbies").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("main-nav--show");
});
