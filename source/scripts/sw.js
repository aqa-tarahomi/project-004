const CACHE_NAME = 'isitschool-v1';
const ASSETS = [
    '/',
  
    // CSS files
    '/source/styles/style.css',
    '/source/bootstrap-5.3.2-dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.css',
  
    // JavaScript files
    '/source/scripts/script.js',
    '/source/scripts/swiper.js',
    'https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js',
    'https://unpkg.com/aos@2.3.1/dist/aos.js',
    'https://kit.fontawesome.com/41290f7b5b.js',
  
    // Images and icons
    '/source/gallery/logo.png',
    '/source/gallery/test-exam.jpg',
    '/source/gallery/anformatic_students.jpg',
    '/source/gallery/favicon.ico',
  
    // Fonts
    'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap',
];

self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return Promise.all(
          ASSETS.map((asset) => {
            return fetch(asset) // Try to fetch the asset before adding to cache
              .then((response) => {
                if (!response.ok) {
                  throw new Error('Failed to fetch asset: ' + asset);
                }
                return cache.add(asset);
              })
              .catch((err) => {
                console.error('Error caching asset:', asset, err);
              });
          })
        );
      })
    );
  });

  self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(ASSETS).catch((err) => {
          console.error('Error caching assets during install:', err);
        });
      })
    );
  });
  
  