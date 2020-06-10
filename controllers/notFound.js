import viewNotFound from "../views/notFound.js";

const NotFound = () => {
  const divElement = document.createElement("div");
  divElement.classList = "not-found-container";
  divElement.innerHTML = viewNotFound;

  return divElement;
};

export default NotFound;
