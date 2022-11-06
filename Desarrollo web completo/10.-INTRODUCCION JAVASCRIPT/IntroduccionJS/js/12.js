// "use strict"; // Correr JS de manera estricta

// Objects
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto); // Congelar el objeto // No te permite hacer nada 


producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto));

console.log(producto);

Object.seal(producto); // Congela todo pero si te permite modificar
precio.precio = 'Nuevo Precio';
