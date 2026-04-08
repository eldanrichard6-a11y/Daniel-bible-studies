self.addEventListener('install', (e) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (e) => {
  // Hapa App inaweza kusoma vitu hata bila internet ikiboreshwa zaidi
});
