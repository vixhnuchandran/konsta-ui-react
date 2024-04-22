// Fetch event
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clone the response to allow consuming it twice (for the cache and the browser)
        const responseClone = response.clone()
        return responseClone
      })
      .catch(error => {
        console.error("Fetch failed:", error)
        // You could return a custom offline page here if needed
      })
  )
})
