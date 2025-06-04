
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  clients.claim();
});

self.addEventListener('fetch', function(event) {
  // Disable caching: always fetch from network
  event.respondWith(fetch(event.request));
});
