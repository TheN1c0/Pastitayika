


function mostrarContenido(id) {
    // Oculta todos los contenidos
    
    /* queryselectorall selecciona varios ids, ^ hace que seleccione todos los ides que comiencen con "contenido" */
   /*  La función itera sobre todos los elementos seleccionados usando forEach 
    y establece el estilo display de cada elemento en none, lo que los oculta visualmente en la página. */
    document.querySelectorAll('[id^="contenido"]').forEach(element => {
        element.style.display = 'none';/* esto los oculta */
    });
    
    // Muestra el contenido especificado por su ID
    document.getElementById(id).style.display = 'block';
}

function mostrarDescri(id) {
    // Oculta todos los contenidos
    document.querySelectorAll('[id^="Descripcion"]').forEach(element => {
        element.style.display = 'none';  // Oculta los elementos
        element.style.opacity = 0;       // Resetea la opacidad
    });

    // Obtiene el elemento a mostrar
    var elemento = document.getElementById(id);
    elemento.style.display = 'block';  // Hace visible el elemento
    elemento.style.opacity = 0;        // Establece la opacidad inicial

    // Incrementa la opacidad gradualmente
    var opacidad = 0;
    var interval = setInterval(function() {
        if (opacidad < 1) {
            opacidad += 0.1;  // Incrementa la opacidad
            elemento.style.opacity = opacidad;
        } else {
            clearInterval(interval);  // Detiene la animación cuando la opacidad es 1
        }
    }, 100); 
    
}