// Arreglos o Arrays
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


// console.table(numeros[4]);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
const meses1 = ['Enero', 'Febrero', 'Marzo', 'Abril'];
// console.log(meses);
// console.log(meses1);

// console.log(meses.length);

// numeros.forEach( function(numero) {
//     console.log(numero);
// })

// Agregar elementos al final
// numeros.push(110);
// numeros.push(120);

// // Agrega elemntos al inicio
// numeros.unshift(-10, -20, -30);

// console.log(numeros);


// // Elimina al final del array
// meses1.pop();
// //Elmina al inicio del array
// meses1.shift();

// // elimina donde uno desea (pide la ubicacion, y cuantos a partir de alli)
// meses1.splice(1,1)
// console.table(meses1);


// Rest Operator o Spread Operator

// Agregar al final
const nuevoArreglo = [...meses, 'Mayo'];
console.log(nuevoArreglo);

// Agregar al inicio
const nuevoArreglo2 = ['Diciembre', ...meses];
console.log(nuevoArreglo2)