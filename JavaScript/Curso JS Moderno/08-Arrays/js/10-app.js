const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500 },
    {nombre: 'Television', precio: 100 },
    {nombre: 'Tablet', precio: 200 },
    {nombre: 'Audifinos', precio: 300 },
    {nombre: 'Teclado', precio: 400 },
    {nombre: 'Celular', precio: 700 },
]
// Crea un nevo Arreglo
// carrito.map( function (producto) {
//     console.log(`${producto.nombre} - Precio: ${producto.precio}`);
// }),
const nuevoArreglo= carrito.map( function (producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
});

// No se puede crear un nuevo arreglo
// carrito.forEach( function (producto) {
//     console.log(`${producto.nombre} - Precio: ${producto.precio}`);
// });

const nuevoArreglo2 = carrito.forEach( function (producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
});

console.log(nuevoArreglo);
console.log(nuevoArreglo2);