const path = require('path');
const express = require ('express');
const app = express();

//Configuración
app.set('port', process.env.PORT || 3000);

//Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//Para iniciar el servidor
const server = app.listen(app.get('port'), () => {
    console.log('servidor en el puerto' , app.get('port'));
});