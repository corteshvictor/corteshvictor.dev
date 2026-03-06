import router from "./router.js";

if ("serviceWorker" in navigator && import.meta.env.PROD) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .catch((err) => console.log("ServiceWorker registration failed: ", err));

  let refreshing;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });
}

const checkbox = document.querySelector("#dark-mode");
const label = document.querySelector(".switch__label");
const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
const imgDevElement = document.querySelector("#img-dev");

const isDarkMode = () => localStorage.getItem("dark-mode");
const activateDarkMode = () => {
  imgDevElement.setAttribute("src", "/assets/icons/dev-white.svg");
  checkbox.setAttribute("checked", true);
  document.body.classList.remove("light-mode");
  document.body.classList.add("dark-mode");
  label.classList.remove("switch__label--dark");
  label.classList.add("switch__label--light");
};
const activateLightMode = () => {
  imgDevElement.setAttribute("src", "/assets/icons/dev-black.svg");
  checkbox.removeAttribute("checked");
  document.body.classList.remove("dark-mode");
  document.body.classList.add("light-mode");
  label.classList.remove("switch__label--light");
  label.classList.add("switch__label--dark");
};

if (isDarkMode())
  isDarkMode() === "true" ? activateDarkMode() : activateLightMode();
else darkMode.matches ? activateDarkMode() : activateLightMode();

darkMode.addEventListener("change", (event) => {
  if (!isDarkMode()) event.matches ? activateDarkMode() : activateLightMode();
});

// Redirect old hash URLs to clean paths
if (window.location.hash.startsWith("#/")) {
  const path = window.location.hash.slice(1);
  history.replaceState(null, "", path);
}

router(window.location.pathname);

window.addEventListener("popstate", () => {
  router(window.location.pathname);
});

document.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;
  if (link.hostname !== window.location.hostname) return;
  if (link.hasAttribute("target")) return;

  const path = link.pathname;
  e.preventDefault();
  history.pushState(null, "", path);
  router(path);
});

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    activateDarkMode();
    localStorage.setItem("dark-mode", "true");
  } else {
    activateLightMode();
    localStorage.setItem("dark-mode", "false");
  }
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

document.querySelector("#nav-articles").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("main-nav--show");
});

document.querySelector("#nav-hobbies").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("main-nav--show");
});
