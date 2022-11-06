// Objects Destructuring
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible: true
}

// Forma antigua
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;


console.log(precioProducto);
console.log(nombreProducto);

// Destructuring
const {precio, disponible} = producto;

console.log(precio);
console.log(disponible);
