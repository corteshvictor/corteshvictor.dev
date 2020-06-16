import viewIntroHybrids from "../../views/home/introHybrids.js";

const IntroHybrids = () => {
  const divElement = document.createElement("div");
  divElement.classList = "intro-hybrids-container";
  divElement.innerHTML = viewIntroHybrids;

  return divElement;
};

export default IntroHybrids;
