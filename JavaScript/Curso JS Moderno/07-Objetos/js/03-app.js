const producto ={
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Aregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

// Eliminar propiedades al objeto
delete producto.disponible; 



console.log(producto);