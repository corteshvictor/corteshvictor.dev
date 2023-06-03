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
      gtag('config', 'G-C33X0C9F2V', {
        page_path: '/home',
        page_title: 'Inicio',
      });
      removeActive();
      navHome.classList.add('main-nav__link--active');
      return content.appendChild(Home.home());

    case '#/about':
      gtag('config', 'G-C33X0C9F2V', {
        page_path: '/about',
        page_title: 'Sobre mí',
      });
      removeActive();
      navAboutMe.classList.add('main-nav__link--active');
      return content.appendChild(AboutMe.aboutMe());

    case '#/tutorials':
      gtag('config', 'G-C33X0C9F2V', {
        page_path: '/tutorials',
        page_title: 'Tutoriales',
      });
      removeActive();
      navTutorials.classList.add('main-nav__link--active');
      return content.appendChild(Tutorials.tutorials());

    case '#/articles':
      gtag('config', 'G-C33X0C9F2V', {
        page_path: '/articles',
        page_title: 'Artículos',
      });
      removeActive();
      navArticles.classList.add('main-nav__link--active');
      return content.appendChild(Articles.articles());

    case '#/hobbies':
      gtag('config', 'G-C33X0C9F2V', {
        page_path: '/hobbies',
        page_title: 'Pasatiempos',
      });
      removeActive();
      navHobbies.classList.add('main-nav__link--active');
      return content.appendChild(Hobbies.hobbies());

    case '#/remove-password':
      gtag('config', 'G-C33X0C9F2V', {
        page_path: '/remove-password',
        page_title: 'Remover contraseñas archivos de Excel',
      });
      return content.appendChild(Home.removePass());

    case '#/modern-combat':
      gtag('config', 'G-C33X0C9F2V', {
        page_path: '/modern-combat',
        page_title: 'Tutorial MC5 - Abre los ojos 04 Rescate',
      });
      return content.appendChild(Home.modernCombat());

    case '#/intro-hybrids':
      gtag('config', 'G-C33X0C9F2V', {
        page_path: '/intro-hybrids',
        page_title: 'Introducción sobre Hybrids',
      });
      return content.appendChild(Home.introHybrids());

    default:
      removeActive();
      return content.appendChild(NotFound());
  }
};

export default router;
