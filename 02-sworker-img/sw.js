/* ---------------------------------------------------- */
// Interceptar imagen y devolver otra
// porque un sw, solo es reconocido con https o localhost
/* ---------------------------------------------------- */

// self.addEventListener('fetch', event => {

//    console.log(event.request.url);
   
//    if (event.request.url.includes('pwa.png')) {

//     event.respondWith( fetch('img/other-img.png'));
//    }

// });