const CACHE = "campusone-v1";
const ASSETS = ["/", "/manifest.webmanifest"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (url.pathname.startsWith("/api/")) {
    // SWR for APIs
    e.respondWith(
      caches.open(CACHE).then(async (cache) => {
        try {
          const fresh = await fetch(e.request);
          cache.put(e.request, fresh.clone());
          return fresh;
        } catch {
          const cached = await cache.match(e.request);
          return cached || new Response(JSON.stringify({ offline: true }), { headers: { "Content-Type": "application/json" } });
        }
      })
    );
    return;
  }

  // Cache-first for static
  e.respondWith(
    caches.match(e.request).then((hit) => hit || fetch(e.request))
  );
});
