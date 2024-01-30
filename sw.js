self.addEventListener('install', (e) => {
  import.meta.env.VITE_REACT_APP_ENV !== 'production' &&
    console.log('[Service Worker] installed')
})

self.addEventListener('activate', (e) => {
  import.meta.env.VITE_REACT_APP_ENV !== 'production' &&
    console.log('[Service Worker] actived', e)
})

self.addEventListener('fetch', (e) => {
  import.meta.env.VITE_REACT_APP_ENV !== 'production' &&
    console.log('[Service Worker] fetched resource ' + e.request.url)
})
