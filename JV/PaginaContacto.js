$(document).ready(function(){
    $("#registroForm").sumbit(function(event){
        var name = $("name").val();
        var email = $("email").val();
        var mensaje = $("mensaje").val();
        var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

        if (nombre == ""){
            alert("Ingrese su Nombre.")
            return;
        }

        if (nombre.length < 3 || nombre.length > 20){
            alert("El nombre y el apellido debe tener entre 3 y 20 caracteres.")
            return;
        }

        if (email == ""){
            alert("Ingre su Email.")
            return;
        }

        if (!expr.test(email)){
            alert("Su correo no cumple con los requisitos. Intentelo de nuevo.")
            return;
        }

        if (mensaje == ""){
            alert("Complete este campo para poder continuar.")
            return;
        }

        $("#registroForm")[0].reset();

        alert("¡Solicitud realizada con exito!");

    })
})



