//MODO NOCHE Y DIA//
document.getElementById("modoNoche").addEventListener("click", function() {
    if (document.body.id === 'imagenDia') {
        document.body.id = 'imagenNoche';
        this.textContent = 'Modo Día';
        document.documentElement.style.setProperty('--background-color', '#2c3e50');
        document.documentElement.style.setProperty('--text-color', '#ecf0f1');
        document.documentElement.style.setProperty('--button-color', '#2980b9');
        document.documentElement.style.setProperty('--button-hover-color', '#1c6692');
    } else {
        document.body.id = 'imagenDia';
        this.textContent = 'Modo Noche';
        document.documentElement.style.setProperty('--background-color', 'rgb(171 61 18 / 33%)');
        document.documentElement.style.setProperty('--text-color', '#f6f5ff');
        document.documentElement.style.setProperty('--button-color', '#8d2222');
        document.documentElement.style.setProperty('--button-hover-color', '#6a1b1b');
    }
    
});

document.querySelector('.despleOpciones').addEventListener('mouseenter', function() {
    document.querySelector('.contenidoDesple').style.display = 'block';
});

document.querySelector('.desplegable').addEventListener('mouseleave', function() {
    document.querySelector('.contenidoDesple').style.display = 'none';
});

//VALIDACION DEL FORMULARIO//
document.getElementById('formLogin').addEventListener('submit', function(event) {
    // Obtener los valores de los campos de nombre, apellido y DNI etc...
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let dni = document.getElementById('dni').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let codPost = document.getElementById('codPost').value;
    let password = document.getElementById('password').value;
    let repPassword = document.getElementById('repPassword').value;
    
    // Obtener los elementos de mensaje de error
    let mensajeErrorNombre = document.getElementById('mensajeErrorNombre');
    let mensajeErrorApellido = document.getElementById('mensajeErrorApellido');
    let mensajError = document.getElementById('mensajError');
    let mensajErrorEmail = document.getElementById('mensajErrorEmail');
    let mensajErrorTelef = document.getElementById('mensajErrorTelef');
    let mensajErrorCodPost = document.getElementById('mensajErrorCodPost');
    let mensajErrorPass = document.getElementById('mensajErrorPass');
    let mensajErrorRepPass = document.getElementById('mensajErrorRepPass');

    // Expresiónes regulares
    let expreNombreApellido  = /^[A-Z][a-zA-Z]{4,19}$/;
    
    let expreDNI = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

    let expreEmail = /^(?![0-9])[a-zA-Z0-9]+(?:(?:\.[a-zA-Z0-9]+)*)@(?:[a-zA-Z0-9]+(?:(?:\.[a-zA-Z0-9]+)*))(?:\-(?:[a-zA-Z0-9]+))*$/;

    let expreTelefono = /^(0034|\+34|34)[67]\d{8}$/;

    let expreCodigoPostal = /^(0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/;

    let exprePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{5,20}$/;

    //Variable para la validacion favorable
    let validacionCorrecta = true;
    
    // Validar el nombre
    if (!expreNombreApellido.test(nombre)) {
        event.preventDefault();
        document.getElementById('nombre').classList.add('bordeError');
        mensajeErrorNombre.style.display = 'block';
        validacionCorrecta = false;
    } else {
        document.getElementById('nombre').classList.remove('bordeError');
        mensajeErrorNombre.style.display = 'none';
    }
    
    // Validar el apellido
    if (!expreNombreApellido.test(apellido)) {
        event.preventDefault();
        document.getElementById('apellido').classList.add('bordeError');
        mensajeErrorApellido.style.display = 'block';
        validacionCorrecta = false;
    } else {
        document.getElementById('apellido').classList.remove('bordeError');
        mensajeErrorApellido.style.display = 'none';
    }

    // Validar el código postal
    if (!expreCodigoPostal.test(codPost)) {
        event.preventDefault();
        document.getElementById('codPost').classList.add('bordeError');
        mensajErrorCodPost.style.display = 'block';
        validacionCorrecta = false;
    } else {
        document.getElementById('codPost').classList.remove('bordeError');
        mensajErrorCodPost.style.display = 'none';
    }

     // Validar la contraseña
    if (!exprePassword.test(password)) {
        event.preventDefault();
        document.getElementById('password').classList.add('bordeError');
        mensajErrorPass.style.display = 'block';
        validacionCorrecta = false;
    } else {
        document.getElementById('password').classList.remove('bordeError');
        mensajErrorPass.style.display = 'none';
    }
    
    // Validar que la repetición de la contraseña sea igual a la contraseña
    if (password !== repPassword) {
        event.preventDefault();
        document.getElementById('repPassword').classList.add('bordeError');
        mensajErrorRepPass.style.display = 'block';
        validacionCorrecta = false;
    } else {
        document.getElementById('repPassword').classList.remove('bordeError');
        mensajErrorRepPass.style.display = 'none';
    }

     // Si alguna validación falló, no se enviara el formulario
    if (!validacionCorrecta) {
        event.preventDefault();
    }
      // Validar el DNI
    if (!expreDNI.test(dni)) {
        event.preventDefault();
        document.getElementById('dni').classList.add('bordeError');
        mensajError.style.display = 'block';
        validacionCorrecta = false;
    } else {
        document.getElementById('dni').classList.remove('bordeError');
        mensajeError.style.display = 'none';
    }

    // Validar el teléfono
    if (!expreTelefono.test(telefono)) {
        event.preventDefault();
        document.getElementById('telefono').classList.add('bordeError');
        mensajErrorTelef.style.display = 'block';
        validacionCorrecta = false;
    } else {
        document.getElementById('telefono').classList.remove('bordeError');
        mensajErrorTelef.style.display = 'none';
    }

     // Validar el email
    if (!expreEmail.test(email)) {
        event.preventDefault();
        document.getElementById('email').classList.add('bordeError');
        mensajErrorEmail.style.display = 'block';
        validacionCorrecta = false;
    } else {
        document.getElementById('email').classList.remove('bordeError');
        mensajErrorEmail.style.display = 'none';
    }
});