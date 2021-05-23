document.querySelector('#form-login').addEventListener('submit', iniciarSesion);

function iniciarSesion(e) {
    e.preventDefault();
    var correo = document.querySelector('#correo').value;
    var password = document.querySelector('#password').value;
    var bAcceso = false;

    bAcceso = validarCredenciales(correo, password);
}

function validarCredenciales(correo, password) {

    var Usuario = JSON.parse(localStorage.getItem('usuario'));

    if (correo !== Usuario.correo) {
        alert("El correo no se encuentra registrado");
        return false;
    }

    if (password !== Usuario.password) {
        alert("Contraseña incorrecta");
        return false;
    }

    return true;
}

function ingresar() {



}



