document.getElementById("registroForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    
    if(name.trim() === ""){
        alert("Por favor, ingrese su nombre.");
        return;
    }
    
    if(email.trim() === ""){
        alert("Por favor, ingrese su correo.");
        return;
    }
    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
    
    alert("¡Formulario enviado con éxito!");
});
