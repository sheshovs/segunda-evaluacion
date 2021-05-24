
function iniciarSesion(e) {
    e.preventDefault();
    var correo = document.querySelector('#correo').value;
    var password = document.querySelector('#password').value;
    var bAcceso = false;
    var menuUser = document.querySelector('#menu-user');
    var menu = document.querySelector('#menu');

    bAcceso = validarCredenciales(correo, password);

    if (bAcceso) {
        ingresar(menuUser, menu);
    }
}

function validarCredenciales(correo, password) {

    var Usuario = JSON.parse(localStorage.getItem('usuario'));

    if (Usuario) {
        if (correo !== Usuario.correo) {
            alert("El correo no se encuentra registrado");
            return false;
        }

        if (password !== Usuario.password) {
            alert("Contraseña incorrecta");
            return false;
        }
    } else {
        alert('Usuario no registrado.');
        return false
    }

    return true;
}

function ingresar(menuUser, menu) {

    menuUser.style.display = 'block';
    menu.style.display = 'none';

    window.location.hash = '#/';

}

function cerrarSesion() {
    localStorage.removeItem('usuario');
    window.location.hash = '#/';
}



