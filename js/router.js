import {
  Home,
  AboutMe,
  Tutorials,
  Articles,
  Hobbies,
  NotFound,
} from "../controllers/index.js";

let content = document.getElementById("root");

const router = (route = "") => {
  content.innerHTML = "";
  switch (route) {
    case "":
    case "#/":
    case "#/inicio":
      return content.appendChild(Home.home());

    case "#/sobremi":
      return content.appendChild(AboutMe.aboutMe());

    case "#/tutoriales":
      return content.appendChild(Tutorials.tutorials());

    case "#/articulos":
      return content.appendChild(Articles.articles());

    case "#/pasatiempos":
      return content.appendChild(Hobbies.hobbies());

    case "#/quitar-password":
      return content.appendChild(Home.removePass());

    case "#/modern-combat":
      return content.appendChild(Home.modernCombat());

    default:
      return content.appendChild(NotFound());
  }
};

export default router;
