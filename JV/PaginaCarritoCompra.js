/*  
$(document).ready(function(){
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    function actualizarCarrito(){
        $('#lista-carrito').empty();
        let total = 0;
        let cantidadTotal = 0;

        carrito.forEach(producto =>{
            $('#lista-carrito').append(`
                <li data-id="${producto.id}">
                    ${producto.nombre} - $${producto.precio} x ${producto.cantidad}
                    <button class="eliminar-producto btn btn-danger btn-sm">X</button>
                </li>
            `);
            total += producto.precio * producto.cantidad;
            cantidadTotal += producto.cantidad;
        });

        $('#total-carrito').text(total.toFixed(2));
        $('#contador-carrito').text(cantidadTotal);
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function agregarProducto(id, nombre, precio){
        const productoExistente = carrito.find(producto => producto.id == id);
        if (productoExistente){
            productoExistente.cantidad++;
        } else {
            carrito.push({id, nombre, precio, cantidad: 1});
        }
        
        actualizarCarrito();
    }

    function eliminarProducto(id){
        const productoExistente = carrito.find(producto => producto.id == id);
        if (productoExistente){
            if (productoExistente.cantidad > 1){
                productoExistente.cantidad--;
            } else {
                const index = carrito.findIndex(producto => producto.id == id);
                if (index > 1){
                    carrito.splice(index, 1);
                }
            }
        }
        actualizarCarrito();
    }

    $('.grid.container').on('click','.agregar-carrito', function(){
        const producto = $(this).closest('.card');
        const id = producto.data('id');
        const nombre = producto.data('nombre');
        const precio = parseFloat(producto.data('precio'));
        agregarProducto(id, nombre, precio);
    });

    $('#lista-carrito').on('click', '.eliminar-producto', function(){
        const id = $(this).closest('li').data('id');
        eliminarProducto(id);
    });

    const modal = $('#modal-carrito');
    const iconoCarrito = $('#icono-carrito');
    const spanCerrar = $('.cerrar');

    iconoCarrito.on('click', function(){
        modal.show();
        actualizarCarrito();
    });

    spanCerrar.on('click', function(){
        modal.hide();
    });

    $(window).on('click', function(event){
        if ($(event.target).is(modal)){
            modal.hide();
        }
    });

    actualizarCarrito();
})*/
$(document).ready(function() {
    // Cargar carrito de localStorage
    cargarCarrito();

    // Añadir al carro
    $('.btn-primary').click(function(e) {
        e.preventDefault();
        let producto = $(this).closest('.card');
        let nombre = producto.find('.card-title').text();
        let precio = parseFloat(producto.find('.price').text().replace('$', '').replace('.', '').replace(',', '.'));

        let itemCarrito = {
            nombre: nombre,
            precio: precio,
            cantidad: 1
        };

        agregarAlCarrito(itemCarrito);
        actualizarCarrito();
    });

    // Cerrar modal de carrito
    $('.cerrar').click(function() {
        $('#modal-carrito').hide();
    });

    // Mostrar carrito
    $('#icono-carrito').click(function(e) {
        e.preventDefault();
        $('#modal-carrito').show();
        mostrarCarrito();
    });

    // Funciones
    function agregarAlCarrito(item) {
        let carrito = obtenerCarrito();
        let encontrado = false;

        carrito.forEach(function(producto) {
            if (producto.nombre === item.nombre) {
                producto.cantidad += 1;
                encontrado = true;
            }
        });

        if (!encontrado) {
            carrito.push(item);
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarContadorCarrito();
    }

    function obtenerCarrito() {
        let carrito = localStorage.getItem('carrito');
        return carrito ? JSON.parse(carrito) : [];
    }

    function actualizarCarrito() {
        let carrito = obtenerCarrito();
        $('#lista-carrito').empty();
        let total = 0;

        carrito.forEach(function(producto) {
            let precioFormateado = producto.precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
            let item = `<li>${producto.nombre} - ${precioFormateado} x ${producto.cantidad}</li>`;
            $('#lista-carrito').append(item);
            total += producto.precio * producto.cantidad;
        });

        let totalFormateado = total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
        $('#total-carrito').text(totalFormateado);
    }

    function cargarCarrito() {
        actualizarContadorCarrito();
        actualizarCarrito(); 
    }

    function actualizarContadorCarrito() {
        let carrito = obtenerCarrito();
        let contador = carrito.reduce((total, producto) => total + producto.cantidad, 0);
        $('#contador-carrito').text(contador);
    }

    function mostrarCarrito() {
        actualizarCarrito();
    }
});
