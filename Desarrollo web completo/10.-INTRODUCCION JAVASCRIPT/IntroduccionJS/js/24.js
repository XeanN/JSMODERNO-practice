// For Loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for( let i = 1; i <= 100; i++) {
    if(i % 2 === 0 ) {
        console.log(`El Número ${i} es PAR`);
    } else {
        console.log(`El Número ${i} es IMPAR`);
    }
}


const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 800 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 200 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
]

// for
for(let i= 0; i < carrito.length; i++) {
    console.log( carrito[i].nombre);
}

// While Loop

let i = 0; // Indice

while(i<= 100){ // Condición
    if(i % 2 === 0){
        console.log(`${i} es número par`);
    } else{
        console.log(`${i} es número impar`);
    }
    
    i++;   //Incremento
}

// Do While Loop

let k = 100;

do {
    console.log(k);

    i++
} while( k < 10);