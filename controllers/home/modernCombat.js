import viewModernCombat from "../../views/home/modernCombat.js";

const ModernCombat = () => {
  const divElement = document.createElement("div");
  divElement.classList = "modern-combat-container";
  divElement.innerHTML = viewModernCombat;

  return divElement;
};

export default ModernCombat;
