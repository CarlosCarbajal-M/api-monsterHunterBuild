'use  strict'

//cargar mongoose
var mongoose = require('mongoose');
//Objeto para crear nuestro esquema
var Schema = mongoose.Schema;


//Esquema de la entidad set existente en la base de datos
var SetSchema = Schema({
	name: String,
	wepon: String,
	helmet: String,
	coat: String,
	gloves: String,
	belt: String,
	boots: String
});

//exportar el modulo y utilizar el esquema como modelo
module.exports = mongoose.model('Set', SetSchema)