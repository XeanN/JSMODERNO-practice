// Switch case break default

const metodoPago = 'tarjeta';

switch(metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('Pagaste con cheque, vamos a revisar los fondos');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
    default:
        console.log('Aún no has pagado');
        break;
}