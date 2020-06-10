import tutorials from "../../views/development.js";

const Tutorials = () => {
  const divElement = document.createElement("div");
  divElement.classList = "tutorials-container";
  divElement.innerHTML = tutorials;

  return divElement;
};

export default Tutorials;
