/* ---------------------------------------------------- */
// ECMAScript 6: (include, y =>)
// porque un sw, solo es reconocido con https o localhost
/* ---------------------------------------------------- */


//   self.addEventListener('fetch', event => {
//       console.log(event.request.url);
//       if ( event.request.url.includes('style.css')) {
//           //event.respondWith( null );
//           //event.respondWith( fetch('./css/mim-style.css'));
//       }
//       event.respondWith(fetch(event.request));
//   });