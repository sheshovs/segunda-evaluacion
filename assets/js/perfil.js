

const cargarDatos = (e) => {
    e.preventDefault();

    var User = JSON.parse(localStorage.getItem('usuario'));

    var inputNombre = document.querySelector('#nombres');
    var inputCorreo = document.querySelector('#correo');
    var inputTelefono = document.querySelector('#telefono');

    inputNombre.value = User.nombre;
    inputCorreo.value = User.correo;
    inputTelefono.value = User.telefono;
}

const actualizarDatos = (e) => {
    e.preventDefault();

    var User = JSON.parse(localStorage.getItem('usuario'));

    var inputNombre = document.querySelector('#nombres');
    var inputCorreo = document.querySelector('#correo');
    var inputTelefono = document.querySelector('#telefono');

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    if (inputNombre.value.length < 4) {
        alert("El nombre debe tener mínimo 4 caracteres")
        return
    }
    if (!regexEmail.test(inputCorreo.value)) {
        alert("Correo inválido")
        return
    }

    localStorage.setItem('usuario', JSON.stringify({
        nombre: inputNombre.value,
        correo: inputCorreo.value,
        telefono: inputTelefono.value,
        password: User.password
    }))

    alert('Datos actualizados con éxito.');
    inputNombre.value = '';
    inputCorreo.value = '';
    inputTelefono.value = '';
}