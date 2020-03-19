/* ----------------------------------------------------
   Cache : Dynamic, Static, Inmutable
   Appshell: Corazon de la aplicacion
   Estrategias de cache: 
                      - Cache With NetWork Fallback (x)
                      - NetWork with Cache Fallback
   ---------------------------------------------------- */

const CACHE_STATIC_NAME = 'static-v1';
const CACHE_DYNAMIC_NAME = 'dynamic-v1';
const CACHE_INMUTABLE_NAME = 'inmutable-v1';
const CACHE_DYNAMIC_LIMIT = 50;


// APPShell - Lo mínimo para que tu app funcione
// 1 - INSTALL
self.addEventListener('install', e => {

    const cacheProm = caches.open(CACHE_STATIC_NAME)
        .then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/style.css',
                '/img/pwa.png',
                '/js/app.js',
                '/pages/offline.html'
            ]);
        });

    const cacheInmutable = caches.open(CACHE_INMUTABLE_NAME)
        .then(cache => {
            cache.add('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css');
            cache.add('https://use.fontawesome.com/releases/v5.6.3/css/all.css');
            return cache;
        });

    e.waitUntil(Promise.all([cacheProm, cacheInmutable]));
});

// 2 - ACTIVATE
self.addEventListener('activate', e => {

    const respuesta = caches.keys()
        .then(keys => {
            keys.forEach(key => {

                if (key !== CACHE_STATIC_NAME && key.includes('static')) {
                    return caches.delete(key);
                }

            });
        });
    e.waitUntil(respuesta);
});

// 3 - PROXY SERVICE WORKER
self.addEventListener('fetch', e => {

    const respuesta = caches.match(e.request) // Cache First
        .then(res => {
            if (res) return res;

            return fetch(e.request)
                .then(newResp => {
                    caches.open(CACHE_DYNAMIC_NAME)
                        .then(cache => {
                            // Aqui tendriamos que limpiar el Cache
                            cache.put(e.request, newResp);
                        });
                    return newResp.clone();
                })
                .catch(err => {
                    if (e.request.headers.get('accept').includes('text/html')) {
                        return caches.match('/pages/offline.html');
                    }
                });
        });
    e.respondWith(respuesta);
});
