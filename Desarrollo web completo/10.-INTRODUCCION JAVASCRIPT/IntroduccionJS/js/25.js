const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 800 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 200 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

// ForEach
carrito.forEach( producto => console.log(producto.nombre));

// MAP
const arreglo2 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);
console.log(arreglo2);