    var nombre = prompt("Hola! Por favor ingresa tu nombre");
    var apellido = prompt("Gracias! Ahora, por favor ingresa tu apellido");
    

    if(nombre!="" && apellido!="") {
        Swal.fire({
            icon: 'success',
            iconColor: '#90c09a',
            background: '#E3E0DE',
            title: '¡Hola, ' + nombre + ' ' + apellido + "!",
            confirmButtonColor: '#90c09a',
            text: "Te damos la bienvenida a la guía de ejercicios de JavaScript"
        });
    }else{ 

        Swal.fire({
            icon: 'error',
            iconColor: '#FFA1A1',
            background: '#E3E0DE',
            title: 'Oops...',
            confirmButtonColor: '#90c09a',
            text: 'No escribiste tu nombre',
         });
}
 

// alert ("¡Hola, " + nombre + " " + apellido + " ! Te damos la bienvenida a la guía de ejercicios de JavaScript");

