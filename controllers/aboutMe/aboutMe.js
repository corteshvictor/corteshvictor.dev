import viewAboutMe from "../../views/aboutMe/aboutMe.js";

const AboutMe = () => {
  const divElement = document.createElement("div");
  divElement.classList = "about-me-container";
  divElement.innerHTML = viewAboutMe;

  return divElement;
};

export default AboutMe;
