const nombre = document.getElementById("nombres")
const correo = document.getElementById("correo")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")
var checkbox = document.getElementById("cajita")
const form = document.getElementById("form-registro")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(nombre.value.length <4){
        alert("El nombre debe tener minimo 4 caracteres")
        return
    }
    if(!regexEmail.test(correo.value)){
        alert("Correo inválido")
        return
    }
    if(password.value.length < 6){
        alert("La contraseña debe tener minimo 6 caracteres")
        return
    }
    if(password2.value !== password.value){
        alert("Las contraseñas no coinciden")
        return
    }
    if(!checkbox.checked){
        alert("Debe aceptar los terminos y condiciones")
        return
    }

    var usuario = {
        nombre:nombre.value, 
        correo:correo.value, 
        password:password.value
    } 
    
    localStorage.setItem( "usuario", JSON.stringify(usuario));
})