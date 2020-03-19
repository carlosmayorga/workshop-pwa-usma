

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => {

            setTimeout(() => {

                reg.sync.register('POST-api/users');
                console.log('Se envio el usuario al API')

            }, 8000);

        });

};
