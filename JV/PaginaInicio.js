function mostrarContenido(id) {
    // Oculta todos los contenidos
    alert("presionado");
    alert(id);
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
    alert("presionado");
    alert(id);
    /* queryselectorall selecciona varios ids, ^ hace que seleccione todos los ides que comiencen con "contenido" */
   /*  La función itera sobre todos los elementos seleccionados usando forEach 
    y establece el estilo display de cada elemento en none, lo que los oculta visualmente en la página. */
    document.querySelectorAll('[id^="Descripcion"]').forEach(element => {
        element.style.display = 'none';/* esto los oculta */
    });

    // Muestra el contenido especificado por su ID
    document.getElementById(id).style.display = 'block';
}