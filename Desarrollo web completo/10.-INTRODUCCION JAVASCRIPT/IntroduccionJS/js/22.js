// if  else
const puntaje = 1000;

if (puntaje == 1000) {
    console.log('Si el puntaje es 1000');
} else {
    console.log('No es igual');
}


const efectivo = 1000;
const carrito = 800;

if ( efectivo > carrito) {
    console.log('El usuario puede pagar');
} else {
    console.log('Fondos insuficientes');
}


const rol ='Visitante';

if(rol == 'Administrador') {
    console.log('Acceso a todo el sistema');
} else if(rol == 'Editor') {
    console.log('Solo acceso de edición');
} else{
    console.log('No tienes acceso');
}