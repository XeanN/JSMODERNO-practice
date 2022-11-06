const sumar2 = (n1, n2) => console.log(n1 + n2)
sumar2(5, 10);

const aprendiendo =tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

//////////////////////////////////////////////
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
meses.forEach( mes => {
    if(mes == 'Marzo'){
        console.log( 'Marzo si existe');
    }
})

carrito.forEach( carrito => console.log(carrito));


// Some ideal para arreglo de objeto
let resultado = carrito.some(producto => producto.nombre === 'Celular')
console.log(resultado);

// Reduce
let resultado3 = carrito.reduce( (total, producto) => total + producto.precio, 0);

console.log(resultado3);

resultado2 = carrito.filter( producto => producto.precio > 400);

console.log(resultado2);

resultado2 = carrito.filter( producto =>     producto.nombre !== 'Celular');

console.log(resultado2);