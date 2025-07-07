const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleadosController');

router.post('/', empleadosController.crearEmpleado);

router.get('/', empleadosController.listarEmpleados);

router.get('/mayores', empleadosController.listarMayores);

router.put('/:id', empleadosController.actualizarEmpleado);

router.delete('/:id', empleadosController.eliminarEmpleado);

module.exports = router;