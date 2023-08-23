//funcion para validar si el formulario esta vacio
function enviar() {
    /**
     * document.getElementById('nombre').value  Capturar el valor del campo nombre
     */ 
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('correo').value;
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let result = email.match(pattern);
    // valida si el nombre esta vacio
    if (nombre == "" || nombre == null) {
        document.getElementById('error_name').innerHTML = 'Debe ingresar el nombre';
    }else if (email == "" || email == null) {
        document.getElementById('error_email').innerHTML = 'Debe ingresar el Correo Electronico';
    }else if (result) {
        document.getElementById('error_email').innerHTML = 'Formato no';
    } else {
        document.getElementById('mensaje').innerHTML = 'Bienvenido Usuario ' + nombre + ' su correo es :' + email;
        document.getElementById('nombre').value = "";
        document.getElementById('correo').value = "";
        document.getElementById('error_name').innerHTML ='';
        document.getElementById('error_email').innerHTML = '';
    }

}

function isValidEmail(mail) { 
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail); 
  }