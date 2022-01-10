'use strict'

//variable para obtener el modulo de mongoose
var mongoose = require('mongoose');
//variable que importa app.js de este mismo fichero
var app = require('./app');
var port= 3700;

//conexion a la base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/builds')
		//resulatado de la promesa si es que se logra conectar de forma adecuada
		.then(() => {
			console.log("Conexion a la base de datos establecida con exito....");
			//Creacion del servidor
			app.listen(port,() =>{
				console.log("Servidor corriendo correctamente en la url: localhost:3700");
			});

		})
		//obtener el error en caso de no conectar de forma adecuada
		.catch(err => console.log(err));