


function ocultarPestana() {
    // Oculta todos los contenidos
    
    /* queryselectorall selecciona varios ids, ^ hace que seleccione todos los ides que comiencen con "contenido" */
   /*  La función itera sobre todos los elementos seleccionados usando forEach 
    y establece el estilo display de cada elemento en none, lo que los oculta visualmente en la página. */
    document.querySelectorAll('[id^="pestana"]').forEach(element => {
        element.style.display = 'none';/* esto los oculta */
    });
    
}

function mostrarDescri(id) {
    // Oculta todos los contenidos
    document.querySelectorAll('[id^="pestana"]').forEach(element => {
        element.style.display = 'none';  
        element.style.opacity = 0;       
    });

    // Obtiene el elemento a mostrar
    var elemento = document.getElementById(id);
    elemento.style.display = 'block';  
    elemento.style.opacity = 0;        

    
    var opacidad = 0;
    var interval = setInterval(function() {
        if (opacidad < 1) {
            opacidad += 0.1;  
            elemento.style.opacity = opacidad;
        } else {
            clearInterval(interval);  
        }
    }, 100); 
    
}