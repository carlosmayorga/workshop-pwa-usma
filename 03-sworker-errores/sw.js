/* ---------------------------------------------------- */
// Manejo de errores
// porque un sw, solo es reconocido con https o localhost
/* ---------------------------------------------------- */

self.addEventListener('fetch', event => {

//   event.respondWith(
//      fetch(event.request)
//      .then(resp => {

//         console.log(resp);

//         return resp;
//      })
//   );


// Forma de hacerlo - 1

   //  const resp = fetch( event.request )
   //     .then( resp => resp.ok ? resp : fetch('img/not-found.png'));

   //  event.respondWith(resp);


// Forma de hacerlo - 2 (x)
      const resp = fetch( event.request )
         .then(resp => {

            if(resp.ok){
               return resp;
            }

            if(resp.url.includes('img')){
               return fetch('img/not-found.png');
            }

         });

     event.respondWith(resp);

});