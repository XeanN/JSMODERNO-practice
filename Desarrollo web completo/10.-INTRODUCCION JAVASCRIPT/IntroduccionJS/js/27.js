// POO

/** Object Literal */
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;

}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Monitor Samsung de 51"', 1500);
const producto4 = new Producto('Monitor LG de 27"', 600, true);
const producto5 = new Producto('Teclado Logitech MXPRO', 150, false);

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);

////////////////////////////////////////////////////////

// Object Constructor
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.appellido = apellido;
}

Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.appellido}`;
}

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

//Crear funciones que solo se utilizan en un objeto específico.
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}


const products2 = new Producto('Monitor Curvo de 49"', 800);
const products3 = new Producto('Monitor Samsung de 51"', 1500);
const cliente = new Cliente('Angel', 'Ponce');

console.log(products2);
console.log(products2.formatearProducto());
console.log(products3.formatearProducto());
console.log(cliente.formatearCliente());