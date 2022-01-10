'use strict'

//para poder crear nuestras rutas
var express = require('express');
//cargar controlador
var SetController = require('../controllers/set');

var router = express.Router();

//creacion de la ruta
router.get('/home', SetController.home);
router.post('/save-set', SetController.saveSet);
router.get('/set/:id', SetController.getSet);
router.get('/sets', SetController.getSets);
router.put('/set/:id', SetController.updateSet);
router.delete('/set/:id', SetController.deleteSet);


module.exports = router;