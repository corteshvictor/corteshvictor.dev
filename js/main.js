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

const checkbox = document.querySelector("#dark-mode");
const label = document.querySelector(".switch__label");
const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
if (darkMode.matches) {
  checkbox.setAttribute("checked", true);
  label.classList.remove("switch__label--dark");
  label.classList.add("switch__label--light");
} else {
  checkbox.removeAttribute("checked");
  label.classList.remove("switch__label--light");
  label.classList.add("switch__label--dark");
}

darkMode.addEventListener("change", (event) => {
  if (event.matches) {
    checkbox.setAttribute("checked", true);
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    label.classList.remove("switch__label--dark");
    label.classList.add("switch__label--light");
  } else {
    checkbox.removeAttribute("checked");
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    label.classList.remove("switch__label--light");
    label.classList.add("switch__label--dark");
  }
});

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");

    label.classList.remove("switch__label--dark");
    label.classList.add("switch__label--light");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");

    label.classList.remove("switch__label--light");
    label.classList.add("switch__label--dark");
  }
});
