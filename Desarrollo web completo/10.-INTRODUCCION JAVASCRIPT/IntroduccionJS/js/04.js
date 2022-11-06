// String o Cadenas de Texto

const producto = "Monitor de 20 pulgadas";
const producto2 = String('Monitor 30 Pulgadas');
const producto3 = new String('Monitor 50 Pulgadas');

console.log(producto);
console.log(producto2);
console.log(producto3);


///////////////////////////////////////////////////////77

const tweet = 'Aprnediendo JavaScript con el curso de Desarrollo Web Completo';
const product2 = 'Monitor HD';
const email = 'correo@correo.com';

// Length es para la extension
console.log(tweet.length);
console.log(product2.length);

// IndexOf (Retorna posición)
console.log(tweet.indexOf('JavaS    cript'));
console.log(product2.indexOf('Tablet'));
console.log(email.indexOf('@'));

// Includes ( retorna true or false )
console.log(tweet.includes('JavaScript'));
console.log(product2.includes('Tablet'));
console.log(email.includes('@'));