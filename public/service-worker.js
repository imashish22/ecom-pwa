// service-worker.js

self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('my-cache').then(cache => {
        return cache.addAll([
          '/index.html',
          '/static/css/main.chunk.css',
          '/static/js/main.chunk.js',
          '/static/js/1.chunk.js',
          '/static/media/logo.svg',
          // Add other assets to cache
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  