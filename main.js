function saludarUsuario() {
    const nombre = prompt("Ingrese su nombre.");
    const sexo = prompt("Cual es tu sexo? (M para masculino, F para femenino");

    if (sexo.toUpperCase() === 'M') {
        alert(`Hola Señor ${nombre}! Bienvenido a Cremas ByQcyo.`);
    } else if (sexo.toUpperCase() === 'F') {
        alert(`Hola Señora ${nombre}! Bienvenida a Cremas ByQcyo`);
    } else {
        alert(`Hola ${nombre}! Bienvenido a Cremas ByQcyo`);
    }
}

const carrito = [];
const productos = [
    { nombre: "Crema Hidratante", precio: 20000 },
    { nombre: "Crema con VitaminaC", precio: 25000 },
    { nombre: "Crema Corporal", precio: 35000 }
];

function agregarAlCarrito() {
    let seleccion = prompt("Ingresa el número del producto a agregar al carrito (1-3):");

    if (seleccion && seleccion >= 1 && seleccion <= productos.length) {
        carrito.push(productos[seleccion - 1]);
        alert(`Producto agregado: ${productos[seleccion - 1].nombre} - $${productos[seleccion - 1].precio}`);
    } else {
        alert("Selección inválida. Por favor, ingresa un número válido.");
    }
}

function stockDisponible() {
    let mensaje = "Productos disponibles: ";

    for (let i = 0; i < productos.length; i++) {
        mensaje += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio} `;
    }

    alert(mensaje);
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        let precioTotal = 0;
        let mensajeCarrito = "Productos en tu carrito: ";

        for (let i = 0; i < carrito.length; i++) {
            mensajeCarrito += `${i + 1}. ${carrito[i].nombre} - $${carrito[i].precio} `;
            precioTotal += carrito[i].precio;
        }

        mensajeCarrito += ` El total de tu compra es: $${precioTotal}`;
        alert(mensajeCarrito);
    }
}

function agregarAlCarrito() {
    let seleccion = prompt("Ingresa el número del producto a agregar al carrito (1-3):");

    if (seleccion && seleccion >= 1 && seleccion <= productos.length) {
        carrito.push(productos[seleccion - 1]);
        alert(`Producto agregado: ${productos[seleccion - 1].nombre} - $${productos[seleccion - 1].precio} `);
    } else {
        alert("Selección inválida. Por favor, ingresa un número válido.");
    }
}

function iniciarSimulador() {
    let continuar = true;
    saludarUsuario();

    while (continuar) {
        let accion = prompt(
            "¿Qué deseas hacer? 1. Ver productos 2. Agregar al carrito 3. Ver carrito 4. Salir"
        );

        switch (accion) {
            case "1":
                stockDisponible();
                break;
            case "2":
                agregarAlCarrito();
                break;
            case "3":
                mostrarCarrito();
                break;
            case "4":
                alert("Hasta luego!");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intenta nuevamente.");
                break;
        }
    }
}

iniciarSimulador();