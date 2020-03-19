/* ---------------------------------------------------- */
// Evento sync conexion a internet
//
/* ---------------------------------------------------- */

self.addEventListener('sync', event => {

    console.log('Tenemos internet!');
    console.log(event);
    console.log(event.tag);

});

