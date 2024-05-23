
$(document).ready(function() {
    cargarCarrito();

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

    $('#lista-carrito').on('click', '.eliminar-item', function() {
        let nombre = $(this).data('nombre');
        eliminarDelCarrito(nombre);
        actualizarCarrito();
    });

    $('.cerrar').click(function() {
        $('#modal-carrito').hide();
    });

    $('#icono-carrito').click(function(e) {
        e.preventDefault();
        $('#modal-carrito').show();
        mostrarCarrito();
    });

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

    $('#borrar-carrito').click(function() {
        localStorage.removeItem('carrito');
        actualizarCarrito();
        actualizarContadorCarrito();
    });

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
