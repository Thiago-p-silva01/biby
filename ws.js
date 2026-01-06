const CACHE_NAME = 'biby-cache-v4'; // 🔄 troque o número sempre que atualizar seus arquivos
const FILES_TO_CACHE = [
  'index.html',
  'style.css',
  'script.js',
  'icon-192.png',
  'icon-512.png'
];

// 🔥 Instala e guarda os arquivos no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Service Worker: cache criado');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting(); // força o novo SW a assumir imediatamente
});

// 🚀 Ativa e limpa caches antigos automaticamente
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => {
              console.log('Service Worker: removendo cache antigo', key);
              return caches.delete(key);
            })
      );
    })
  );
  self.clients.claim(); // aplica o SW novo em todas as abas abertas
});

// 🌐 Intercepta requisições e responde com cache ou rede
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: false }).then(response => {
      return response || fetch(event.request);
    })
  );
});