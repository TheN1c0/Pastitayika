$(document).ready(function(){
    $("#registroForm").submit(function(event){
        var nombre = $("#name").val();
        var email = $("#email").val();
        var mensaje = $("#mensaje").val();
        var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

        if (nombre == ""){
            alert("Ingrese su Nombre.");
            return false; 
        }

        if (nombre.length < 3 || nombre.length > 20){
            alert("El nombre y el apellido deben tener entre 3 y 20 caracteres.");
            return false; 
        }

        if (email == ""){
            alert("Ingrese su Email.");
            return false;
        }

        if (!expr.test(email)){
            alert("Su correo no cumple con los requisitos. Inténtelo de nuevo.");
            return false;
        }

        if (mensaje == ""){
            alert("Complete este campo para poder continuar.");
            return false;
        }

        $("#registroForm")[0].reset(); 
        alert("¡Solicitud realizada con éxito!");
        return true; 
    });
});
