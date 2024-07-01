import {
  Home,
  AboutMe,
  Tutorials,
  Articles,
  Hobbies,
  NotFound,
} from '../controllers/index.js';

let content = document.getElementById('root');
let navHome = document.querySelector('#nav-home');
let navAboutMe = document.querySelector('#nav-aboutme');
let navTutorials = document.querySelector('#nav-tutorials');
let navArticles = document.querySelector('#nav-articles');
let navHobbies = document.querySelector('#nav-hobbies');

function removeActive() {
  navHome.classList.remove('main-nav__link--active');
  navAboutMe.classList.remove('main-nav__link--active');
  navTutorials.classList.remove('main-nav__link--active');
  navArticles.classList.remove('main-nav__link--active');
  navHobbies.classList.remove('main-nav__link--active');
}

const router = (route = '') => {
  content.innerHTML = '';
  switch (route) {
    case '':
    case '/':
    case '#/':
    case '#/home':
    case '/index.html':
      removeActive();
      navHome.classList.add('main-nav__link--active');
      return content.appendChild(Home.home());

    case '#/about':
      removeActive();
      navAboutMe.classList.add('main-nav__link--active');
      return content.appendChild(AboutMe.aboutMe());

    case '#/tutorials':
      removeActive();
      navTutorials.classList.add('main-nav__link--active');
      return content.appendChild(Tutorials.tutorials());

    case '#/articles':
      removeActive();
      navArticles.classList.add('main-nav__link--active');
      return content.appendChild(Articles.articles());

    case '#/hobbies':
      removeActive();
      navHobbies.classList.add('main-nav__link--active');
      return content.appendChild(Hobbies.hobbies());

    case '#/remove-password':
      return content.appendChild(Home.removePass());

    case '#/modern-combat':
      return content.appendChild(Home.modernCombat());

    case '#/intro-hybrids':
      return content.appendChild(Home.introHybrids());

    default:
      removeActive();
      return content.appendChild(NotFound());
  }
};

export default router;
