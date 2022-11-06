// Classes

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El Producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }
}


const producto2 = new Producto('Monitor Curvo de 49"', 600);
const producto3 = new Producto('Laptop', 300);


// console.log(producto2.formatearProducto());
// console.log(producto3.formatearProducto());

// Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio)
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} con el ISBN ${this.isbn}`
    }
}

const libro = new Libro('Javascript la Revolución', 120,'34324343423s');
console.log(libro.formatearProducto());

console.log(producto2.formatearProducto());