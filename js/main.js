import router from "./router.js";

router(window.location.hash);
window.addEventListener("hashchange", () => {
  router(window.location.hash);
});

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("main-nav--show");
});
