
const cacheName = 'rb-taxi-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/vysledek.js',
  '/logic.js',
  '/render.js',
  '/historie.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
