import viewArticles from "../../views/articles/articles.js";

const Articles = () => {
  const divElement = document.createElement("div");
  divElement.classList = "articles-container";
  divElement.innerHTML = viewArticles;

  const imgHybridsElement = divElement.querySelector("#img-hybrids");
  const isMobileDevice = window.matchMedia("(max-width: 500px)");

  function mobileMode() {
    imgHybridsElement.setAttribute("src", "../../assets/icons/hybrids.svg");
    imgHybridsElement.setAttribute("width", "120");
  }

  function desktopMode() {
    imgHybridsElement.setAttribute(
      "src",
      "../../assets/images/hybrids-full-logo.svg"
    );
    imgHybridsElement.setAttribute("width", "200");
  }

  isMobileDevice.matches ? mobileMode() : desktopMode();

  isMobileDevice.addEventListener("change", (event) => {
    event.matches ? mobileMode() : desktopMode();
  });

  return divElement;
};

export default Articles;
