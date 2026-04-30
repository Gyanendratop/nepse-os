const CACHE = 'nepse-ai-v1';
const PRE = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRE)));
});

self.addEventListener('fetch', e => {
  if (e.request.url.includes('/api/')) {
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(e.request).then(cached => {
          const fetched = fetch(e.request).then(resp => {
            cache.put(e.request, resp.clone());
            return resp;
          });
          return cached || fetched;
        })
      )
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(c => c || fetch(e.request))
    );
  }
});
