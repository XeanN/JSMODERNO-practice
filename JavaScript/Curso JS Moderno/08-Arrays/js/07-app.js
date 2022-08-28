const carrito = [];

//Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto4 = {
    nombre: 'Celular2',
    precio: 100
}

// .push agrega al final de un arreglo
carrito.push(producto2);
carrito.push(producto);

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

carrito.unshift(producto3);

console.table(carrito);

//Eliminar último elemento de un arregle...
carrito.pop();
console.table(carrito);

//Eliminar el inicio del arreglo
carrito.shift(carrito);
console.table(carrito);

// Elimina en la posicion donde se ponga
carrito.splice(1.1);
console.table(carrito);