const CACHE_NAME = 'isitschool-v1';
const ASSETS = [
    '/',
  
    // CSS files
    'project-004/source/styles/style.css',
    'project-004/source/bootstrap-5.3.2-dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.css',
  
    // JavaScript files
    'project-004/source/scripts/script.js',
    'project-004/source/scripts/swiper.js',
    'https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js',
    'https://unpkg.com/aos@2.3.1/dist/aos.js',
    'https://kit.fontawesome.com/41290f7b5b.js',
  
    // Images and icons
    'project-004/source/gallery/logo.png',
    'project-004/source/gallery/test-exam.jpg',
    'project-004/source/gallery/anformatic_students.jpg',
    'project-004/source/gallery/favicon.ico',
  
    // Fonts
    'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap',
];

self.addEventListener("install", (event) => {
  event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
          return cache.add(ASSETS);
      })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
      caches.match(event.request).then((response) => {
          return response || fetch(event.request);
      })
  );
});