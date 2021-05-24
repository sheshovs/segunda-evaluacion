(function (d, w) {
    const rutas = {
        '/': {
            archivo: 'principal.html',
        },
        '/login': {
            archivo: 'login.html',
        },
        '/register': {
            archivo: 'register.html',
        },
        '/recover': {
            archivo: 'recover.html'
        },
        '/perfil': {
            archivo: 'perfil.html'
        },
        '/logout': {
            archivo: 'logout.html'
        }
    };

    var contenedor = document.querySelector('.contenedor');
    d.addEventListener('readystatechange', function () {
        if (d.readyState === 'interactive') {
            iniciarTodo();
        }
    });

    function iniciarTodo() {
        w.addEventListener('hashchange', function () {
            const ruta = w.location.hash;
            cargarArchivoRuta(ruta);

            var menuUser = document.querySelector('#menu-user');
            var menu = document.querySelector('#menu');
            var saludo = document.querySelector('#saludo');
            var User = JSON.parse(localStorage.getItem('usuario'));


            if (User && ruta !== '#/login' && ruta !== '#/register' && ruta !== '#/recover') {
                menuUser.style.display = 'flex';
                menu.style.display = 'none';
                saludo.innerHTML = 'Bienvenido ' + User.nombre;
            } else {
                menuUser.style.display = 'none';
                menu.style.display = 'block';
            }
        });
        cargarArchivoRuta(w.location.hash);
    }

    function cargarArchivoRuta(rutaCargar) {
        const ruta = rutas[rutaCargar.substring(1)];
        fetch(`${w.location.origin}/${ruta.archivo}`, {
            method: "GET"
        })
            .then(function (respuesta) {
                return respuesta.text();
            })
            .then(function (respuestaTexto) {
                //console.log(respuestaTexto);
                contenedor.innerHTML = '';
                contenedor.innerHTML = respuestaTexto;
            })
    }

})(document, window);

