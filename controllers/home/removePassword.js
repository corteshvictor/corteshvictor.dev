import viewRemovePass from "../../views/home/removePassword.js";

const RemovePass = () => {
  const divElement = document.createElement("div");
  divElement.classList = "remove-pass-container";
  divElement.innerHTML = viewRemovePass;

  return divElement;
};

export default RemovePass;
