import viewHobbies from "../../views/development.js";

const Hobbies = () => {
  const divElement = document.createElement("div");
  divElement.classList = "hobbies-container";
  divElement.innerHTML = viewHobbies;

  return divElement;
};

export default Hobbies;
