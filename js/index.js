let sw = null;
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../service-worker.js")
    .then((swRegistered) => {
      // console.log("ServiceWorker registration successful!");
      sw = swRegistered;
    })
    .catch((err) => console.log("ServiceWorker registration failed: ", err));
}

// Ensure refresh is only called once.
// This works around a bug in "force update on reload".
let refreshing;
navigator.serviceWorker.addEventListener("controllerchange", (_event) => {
  if (refreshing) return;
  refreshing = true;
  // console.log("Controller loaded");
  window.location.reload();
});
