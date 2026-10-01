/* Offline cache for the whole itinerary site. Bump VERSION when files change. */
const VERSION = "japan-trip-v19";
const ASSETS = [
  "./",
  "index.html",
  "pocket.html",
  "manifest.webmanifest",
  "icon.svg",
  "styles.css?v=19",
  "days-bookends.js?v=19",
  "days-tokyo.js?v=19",
  "days-ports.js?v=19",
  "itinerary.js?v=19",
  "bookings.js?v=19",
  "app.js?v=19"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(VERSION).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    caches.open(VERSION).then(async (cache) => {
      const cached = await cache.match(req, { ignoreSearch: req.mode === "navigate" });
      const network = fetch(req)
        .then((res) => {
          if (res && res.ok) cache.put(req, res.clone());
          return res;
        })
        .catch(() => null);
      if (cached) {
        event.waitUntil(network);
        return cached;
      }
      const res = await network;
      if (res) return res;
      if (req.mode === "navigate") return (await cache.match("pocket.html")) || Response.error();
      return Response.error();
    })
  );
});
