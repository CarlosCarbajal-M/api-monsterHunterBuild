'use strict'

//variables para obtener objetos de la libreria
var express = require('express');
var bodyParser = require('body-parser');

//variable que ejecuta express
var app = express();

//arcvhivo de rutas
var set_routes = require('./routes/set');

//middlewares
	//para convertir lo que llegue a json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//rutas se agrega el segmento api aunque esto es opcional
app.use('/api', set_routes);

//exportar el modulo
module.exports = app;