
// Métodos de propiedad
const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo Canción con el ID: ${id}`)
    },
    pausar: function(){
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la Playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción ${id}`)
}

reproductor.reproducir(2020);
reproductor.pausar();
reproductor.borrarCancion(232);
reproductor.crearPlaylist('Programmer');
reproductor.reproducirPlaylist('Programmer');