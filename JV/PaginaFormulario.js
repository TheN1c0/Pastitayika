$(document).ready(function(){
    $("#registroForm").submit(function(event){
        event.preventDefault();

        var nombre = $("#name").val();
        var email = $("#email").val();
        var contraseña = $("#contraseña").val();
        var celular = $("#celular").val();
        var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

        if (nombre == ""){
            alert("Ingrese su Nombre.")
            return;
        }

        if (nombre.length < 3 || nombre.length > 20){
            alert("El nombre y el Apellido deben tener entre 3 y 20 caracteres.")
            return;
        }

        if (email == ""){
            alert("Ingrese su Email.")
            return;
        }

        if (!expr.test(email)){
            alert("Su correo no cumple con los requisitos. Intentelo de nuevo.")
            return;
        }

        if (contraseña == ""){
            alert("Ingrese su contraseña")
            return;
        }

        if (celular !== "" && (isNaN(celular) || celular.toString().length !== 9)){ 
            alert("Número no válido.")
            return;
        }

        $("#registroForm")[0].reset();

        alert("¡¡Registro Exitoso!!");
    });
});