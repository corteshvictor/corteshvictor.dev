const CACHE_NAME = "shell-v1.0.1";
const filesToCache = [
  "/",
  "./index.html",
  "./manifest.json",
  "./js/index.js",
  "./js/main.js",
  "./js/router.js",
  "./css/normalize.css",
  "./css/main.css",
  "./css/media-queries.css",
  "./css/dark-mode.css",
  "./assets/images/profile-photo.png",
  "./assets/images/hybrids-full-logo.svg",
  "./assets/icons/favicon.ico",
  "./assets/icons/dev-black.svg",
  "./assets/icons/dev-white.svg",
  "./assets/icons/github.svg",
  "./assets/icons/youtube.svg",
  "./assets/icons/twitter.svg",
  "./assets/icons/menu-black.svg",
  "./assets/icons/menu-white.svg",
  "./assets/icons/wb_sunny.svg",
  "./assets/icons/nights_stay.svg",
  "./assets/icons/icon-144x144.png",
  "./assets/icons/hybrids.svg",
  "./controllers/index.js",
  "./controllers/notFound.js",
  "./controllers/home/index.js",
  "./controllers/home/home.js",
  "./controllers/home/introHybrids.js",
  "./controllers/home/modernCombat.js",
  "./controllers/home/removePassword.js",
  "./controllers/aboutMe/index.js",
  "./controllers/aboutMe/aboutMe.js",
  "./controllers/tutorials/index.js",
  "./controllers/tutorials/tutorials.js",
  "./controllers/articles/index.js",
  "./controllers/articles/articles.js",
  "./controllers/hobbies/index.js",
  "./controllers/hobbies/hobbies.js",
  "./views/notFound.js",
  "./views/development.js",
  "./views/home/home.js",
  "./views/home/introHybrids.js",
  "./views/home/modernCombat.js",
  "./views/home/removePassword.js",
  "./views/aboutMe/aboutMe.js",
  "./views/tutorials/tutorials.js",
  "./views/articles/articles.js",
];

self.addEventListener("install", (event) => {
  // console.log("[ServiceWorker**] - Install");
  self.skipWaiting(); //avoids waiting, the service worker is activated as soon as the installation is finished
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // console.log("[ServiceWorker**] - Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            // console.log("[ServiceWorker] - Removing old cache", key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request, { ignoreSearch: true })
      .then((response) => {
        return response || fetch(event.request);
      })
      .catch((err) => console.log("fetch: ", err))
  );
});
