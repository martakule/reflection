const CACHE_NAME = "reflection-v2";

const ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./style.css",
  "./data.json",
  "./manifest.webmanifest",
  "./icon.png",
  "./components/body.js",
  "./components/button.js",
  "./components/heading.js",
  "./components/notes.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((cached) => cached ?? fetch(event.request)),
  );
});
