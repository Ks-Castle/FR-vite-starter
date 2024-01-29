if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    import.meta.env.VITE_REACT_APP_ENV !== 'production' &&
      navigator.serviceWorker.register('/sw.js', { scope: '/' })
  })
}
