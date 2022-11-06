const express = require('express');

// Crear la app
const app = express();

//Routing
app.get('/', function(req, res){
    res.send('Hola Mundo en express');
})

// Definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, () =>{
    console.log(`El servidor está funcionando en el puerto ${port}`)
})