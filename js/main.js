import router from "./router.js";

router(window.location.hash);
window.addEventListener("hashchange", () => {
  router(window.location.hash);
});
