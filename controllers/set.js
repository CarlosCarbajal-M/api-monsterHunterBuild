'use strict'

//importar el modelo set
var Set = require ('../models/set');

//objeto json con funciones
var controller = {
	home: function(req, res){
		return res.status(200).send({
			message: 'Soy la Home'
		});
	},
	//metodo para guardar un set
	saveSet: function(req, res){
		var set = new Set();

		var params = req.body;
		set.name = params.name;
		set.wepon = params.wepon;
		set.helmet = params.helmet;
		set.coat = params.coat;
		set.gloves = params.gloves;
		set.belt = params.belt;
		set.boots = params.boots;

		set.save((err, setStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar el documento.'});

			if(!setStored) return res.status(404).send({message: "No se ha podido guardar la build"});

			return res.status(200).send({set: setStored});//esta parte del codigo es lo que guarda en la coleccion
		});
	},
	//metodo para encontrar un set mediante su id
	getSet: function(req,res){
		var setId = req.params.id;
		Set.findById(setId,(err, set) => {
			if(err) return res.status(500).send({message:"Error al devolver los datos"});

			if(!set) return res.status(404).send({message:"set no encontrado"});

			return res.status(200).send({
				set
			});
		});
	},
	//metodo para obtener todos los sets en la coleccion
	getSets: function(req,res){

		Set.find({}).exec((err,sets) => {
			if(err) return res.status(500).send({message:'Error al devolver los datos'});

			if(!sets) return res.status(404).send({message:'No hay nada para mostrar'});

			return res.status(200).send({sets});
		});
	},
	//actualizacion de projecto
	updateSet: function(req,res){
		var setId = req.params.id;
		var update = req.body;

		Set.findByIdAndUpdate(setId, update, {new:true},(err,setUpdated)=>{
			if(err) return res.status(500).send({message:"Error al actualizar"});

			if(!setUpdated) return res.status(404).send({message:"No existe el set para actualizar"});

			return res.status(200).send({
				set:setUpdated
			});
		});
	},
	deleteSet: function(req, res){
		var setId = req.params.id;

		Set.findByIdAndRemove(setId, (err, setRemoved) => {
			if(err) return res.status(500).send({message:'No se ha podido borrar el proyecto'});

			if(!setRemoved) return res.status(404).send({message: "no se puede eliminar ese proyecto"});

			return res.status(200).send({
				set: setRemoved
				});
		});
	}
};


//exportar el objeto json
module.exports = controller;