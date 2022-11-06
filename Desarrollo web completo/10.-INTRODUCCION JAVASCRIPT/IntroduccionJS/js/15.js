const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Television 50 Pulgadas', precio: 200},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifinos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
]

// forEach
meses.forEach( function(mes) {
    if(mes == 'Marzo'){
        console.log( 'Marzo si existe');
    }
})

carrito.forEach( function(carrito) {
    console.log(carrito)
})

// Includes (True o False)  Solo arreglos simples
let resultado = meses.includes('Marzo');
console.log(resultado);

// Some ideal para arreglo de objeto
let resultado2 = carrito.some( function(producto) {
    return producto.nombre === 'Celular'
})
console.log(resultado2);

// Reduce
let resultado3 = carrito.reduce( function(total, producto) {
    return total + producto.precio
}, 0);

console.log(resultado3);

resultado2 = carrito.filter( function(producto) {
    return producto.precio > 400
});

console.log(resultado2);

resultado2 = carrito.filter( function(producto) {
    return producto.nombre !== 'Celular'
});

console.log(resultado2);