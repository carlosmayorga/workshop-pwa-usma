/* ---------------------------------------------------- */
// Inyección de codigo css
// porque un sw, solo es reconocido con https o localhost
/* ---------------------------------------------------- */


//  self.addEventListener('fetch', event => {

//      console.log(event.request.url);

//      if ( event.request.url.includes('style.css')) {
        
//         let response = new Response (`
//             body {
//                 background-color: #ffc048;
//                 color: blue;
//             }`,
//             {
//             headers: {
//                 'Content-Type': 'text/css'
//             }
//         });

//         event.respondWith(response);
//      }

//  });