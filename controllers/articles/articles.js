import viewArticles from "../../views/articles/articles.js";

const Articles = () => {
  const divElement = document.createElement("div");
  divElement.classList = "articles-container";
  divElement.innerHTML = viewArticles;

  return divElement;
};

export default Articles;
