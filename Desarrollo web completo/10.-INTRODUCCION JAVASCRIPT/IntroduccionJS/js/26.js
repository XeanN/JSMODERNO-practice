// This
const reservacion = {
    nombre: 'Angel',
    apellido: 'Ponce',
    total: 5000,
    pagado: true,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de  ${this.total} `);
    }
}

reservacion.informacion();


const reservacion2 = {
    nombre: 'Noemi',
    apellido: 'Chavez',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion2.informacion();