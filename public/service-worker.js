const CACHE_NAME = "shell-v1.1.0";
const filesToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/js/index.js",
  "/css/index.css",
  "/assets/images/profile-photo.png",
  "/assets/images/hybrids-full-logo.svg",
  "/assets/icons/favicon.ico",
  "/assets/icons/dev-black.svg",
  "/assets/icons/dev-white.svg",
  "/assets/icons/github.svg",
  "/assets/icons/youtube.svg",
  "/assets/icons/twitter.svg",
  "/assets/icons/menu-black.svg",
  "/assets/icons/menu-white.svg",
  "/assets/icons/wb_sunny.svg",
  "/assets/icons/nights_stay.svg",
  "/assets/icons/icon-144x144.png",
  "/assets/icons/hybrids.svg",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
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
