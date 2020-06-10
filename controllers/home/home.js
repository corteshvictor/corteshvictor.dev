import viewHome from "../../views/home/home.js";

const Home = () => {
  const divElement = document.createElement("div");
  divElement.classList = "home-container";
  divElement.innerHTML = viewHome;

  return divElement;
};

export default Home;
