(function (d, w) {
    const rutas = {
        '/index': {
            archivo: 'index.html',
        },
        '/login': {
            archivo: 'login.html',
        },
        '/register': {
            archivo: 'register.html',
        },
    };

    d.addEventListener('readystatechange', function () {
        if (d.readyState === 'interactive') {
            inicicarTodo();
        }
    });

    function inicicarTodo() {
        cargarArchivoRuta(w.location.hash);
        w.addEventListener('hashchange', function () {
            const ruta = w.location.hash.substring(1);
            cargarArchivoRuta(ruta);
        });
    }
    function cargarArchivoRuta(rutaCargar){
        const ruta = rutas[rutaCargar];
        fetch(`${w.location.origin}/paginas/${ruta.archivo}`,{
            method: "GET"
        })
        .then (function(respuesta){
            return respuesta.text();
        })
        .then(function (respuestaTexto){
            console.log(respuestaTexto);
        })
    }
})(document, window);