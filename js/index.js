let sw = null;
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../service-worker.js")
    .then((swRegistered) => {
      console.log("ServiceWorker registration successful!");
      sw = swRegistered;
    })
    .catch((err) => console.log("ServiceWorker registration failed: ", err));
}
