import viewIntroHybrids from "../../views/home/introHybrids.js";

const IntroHybrids = () => {
  const divElement = document.createElement("div");
  divElement.classList = "intro-hybrids-container";
  divElement.innerHTML = viewIntroHybrids;

  const checkbox = document.querySelector("#dark-mode");
  const imgElement = divElement.querySelector("#img-stencil");

  checkbox.checked
    ? imgElement.setAttribute("src", "../../assets/icons/stencil-white.svg")
    : imgElement.setAttribute("src", "../../assets/icons/stencil-black.svg");

  checkbox.addEventListener("change", () => {
    checkbox.checked
      ? imgElement.setAttribute("src", "../../assets/icons/stencil-white.svg")
      : imgElement.setAttribute("src", "../../assets/icons/stencil-black.svg");
  });

  return divElement;
};

export default IntroHybrids;
