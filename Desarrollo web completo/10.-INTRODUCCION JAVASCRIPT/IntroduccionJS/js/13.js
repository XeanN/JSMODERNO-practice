const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medida = {
    peso: '1Kg',
    medida: '1m'
}

const nuevoProducto = { ...producto, ...medida};

console.log(producto);
console.log(nuevoProducto);