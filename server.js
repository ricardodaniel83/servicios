// server.js - Tutorial Noderos.com

// paquetes necesarios

var express = require('express');
var path = require('path');
var partials = require('express-partials');
var favicon = require('serve-favicon');
var app = express(); // Instancia del servidor express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mi_propuesta', function(err,res){
	if(err) console.log('ERROR:Conectando a la BD'+ err);
	else console.log('Conexión a la BD realizada');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(partials());
// Configurar app para usar bodyParser
// con este paquete obtendremos
// los datos enviados por POST
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


// puerto del servidor
// podra ser seteado como argumento en comando
var port = process.env.PORT || 3200;

// RUTAS de la API
var router = express.Router();

// Middleware 
router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log('Request a la API.');
    next(); // llamamos a la función next para continuar
});

// ruta para probar nuestro servidor
/*router.get('/', function(req, res){
    res.json({message: 'Ándale, arriba arriba, yepa yepa'});
});*/



// rutas de acceso para las funciones del rest
require('./routers/fileManaged')(router);
require('./routers/users')(router);
require('./routers/taxonomies')(router);
require('./routers/comments')(router);
require('./routers/proposals')(router);
require('./routers/data_proposal')(router);
require('./routers/data_comments')(router);
require('./routers/index')(router);

// Registrar las rutas con prefijo /api
app.use('/', router);

// Iniciar servidor
app.listen(port);
console.log('La magia esta en el puerto ' + port);