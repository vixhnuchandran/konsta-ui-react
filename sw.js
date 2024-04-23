// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const responseClone = response.clone();
        return responseClone;
      })
      .catch((error) => {
        console.error('Fetch failed:', error);
      })
  );
});
