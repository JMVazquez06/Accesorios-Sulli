const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesControllers.js');
const conexion = require('../config/db.js');


// Ruta para obtener todos los clientes
router.get('/clientes', clientesController.getAllClients);

// Ruta para agregar un nuevo cliente
router.post('/cliente', clientesController.addClient);

// Ruta para modificar un cliente existente
router.put('/cliente/actualizar/:id', clientesController.updateClient);

// Ruta para eliminar un cliente
router.delete('/cliente/eliminar/:id', clientesController.deleteClient);


module.exports = router;