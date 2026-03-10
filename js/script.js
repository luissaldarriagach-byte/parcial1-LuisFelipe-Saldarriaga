
let carrito = 0


function cambiarTexto() {
    
    document.getElementById("descripcion").innerHTML = "Ahora estás viendo nuestras ofertas!"
}


function cambiarModo() {
    
    let cuerpo = document.body
    let boton = document.getElementById("btnModo")

    
    cuerpo.classList.toggle("oscuro")

    
    if (cuerpo.classList.contains("oscuro")) {
        boton.innerHTML = "Modo claro"
    } else {
        boton.innerHTML = "Modo oscuro"
    }
}


function agregarCarrito(nombreProducto) {
    
    carrito++

    
    document.getElementById("mensajeCarrito").innerHTML =
        "<p><strong>" + nombreProducto + "</strong> fue agregado al carrito.</p>" +
        "<p>Total de productos en el carrito: <strong>" + carrito + "</strong></p>"

    
    let modal = new bootstrap.Modal(document.getElementById("modalCarrito"))
    modal.show()
}


function enviarFormulario() {

    
    let apellidos = document.getElementById("apellidos").value
    let edad = document.getElementById("edad").value
    let genero = document.getElementById("genero").value
    let direccion = document.getElementById("direccion").value
    let telefono = document.getElementById("telefono").value
    let correo = document.getElementById("correo").value

   

    
    let regexApellidos = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/
    
    let regexEdad = /^\d{1,3}$/
    
    let regexDireccion = /^.{5,}$/
    
    let regexTelefono = /^\d{10}$/
    
    let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (apellidos === "" || edad === "" || genero === "" || direccion === "" || telefono === "" || correo === "") {
        alert("Por favor completa todos los campos.")
        return
    }

   o
    if (!regexApellidos.test(apellidos)) {
        alert("Los apellidos solo deben contener letras.")
        return
    }

    if (!regexEdad.test(edad) || parseInt(edad) < 1 || parseInt(edad) > 120) {
        alert("Por favor ingresa una edad válida.")
        return
    }

    if (!regexDireccion.test(direccion)) {
        alert("La dirección debe tener mínimo 5 caracteres.")
        return
    }

    if (!regexTelefono.test(telefono)) {
        alert("El teléfono debe tener exactamente 10 dígitos.")
        return
    }

    if (!regexCorreo.test(correo)) {
        alert("Por favor ingresa un correo electrónico válido.")
        return
    }

    
    document.getElementById("mensajeFormulario").innerHTML =
        "<p><strong>Apellidos:</strong> " + apellidos + "</p>" +
        "<p><strong>Edad:</strong> " + edad + "</p>" +
        "<p><strong>Género:</strong> " + genero + "</p>" +
        "<p><strong>Dirección:</strong> " + direccion + "</p>" +
        "<p><strong>Teléfono:</strong> " + telefono + "</p>" +
        "<p><strong>Correo:</strong> " + correo + "</p>"

    let modal = new bootstrap.Modal(document.getElementById("modalFormulario"))
    modal.show()
}
