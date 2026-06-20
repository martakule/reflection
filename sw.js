const CACHE_NAME = "reflection-v8";

const ASSETS = [
	"./",
	"./index.html",
	"./scripts/app.js",
	"./scripts/theme.js",
	"./style.css",
	"./data.json",
	"./manifest.webmanifest",
	"./assets/icon.png",
	"./assets/background.png",
	"./components/body.js",
	"./components/button.js",
	"./components/heading.js",
	"./components/notes.js",
	"./components/icon-button.js",
	"./components/modal.js",
	"./assets/back.svg",
	"./assets/reset.svg",
	"./assets/info.svg",
	"./assets/moon.svg",
	"./assets/sun.svg",
	"./assets/close.svg",
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

/** Network first so reloads pick up edits; cache when offline. */
self.addEventListener("fetch", (event) => {
	if (event.request.method !== "GET") return;

	event.respondWith(
		(async () => {
			try {
				const response = await fetch(event.request);
				if (response.ok) {
					const cache = await caches.open(CACHE_NAME);
					try {
						await cache.put(event.request, response.clone());
					} catch {
						/* non-cacheable response */
					}
				}
				return response;
			} catch {
				const cached = await caches.match(event.request);
				if (cached) return cached;
				throw new Error("offline");
			}
		})(),
	);
});
