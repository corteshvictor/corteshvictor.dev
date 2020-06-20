import viewHobbies from "../../views/hobbies/hobbies.js";

const Hobbies = () => {
  const divElement = document.createElement("div");
  divElement.classList = "hobbies-container";
  divElement.innerHTML = viewHobbies;

  return divElement;
};

export default Hobbies;
