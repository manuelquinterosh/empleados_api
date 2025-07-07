const {
   agregarEmpleado,
   obtenerEmpleados,
   obtenerMayoresDe,
   actualizarEmpleado,
   eliminarEmpleado,
   obtenerEstadisticas
} = require('../services/empleadosService');

const validarEmpleado = require('../utils/validarEmpleado');
const mensajes = require('../utils/messages');

const crearEmpleado = async (req, res) => {
   const errores = validarEmpleado(req.body);

   if (errores.length > 0) {
    return res.status(400).json({ error: errores})
   }
    try {
        const empleado = await agregarEmpleado(req.body);
        res.status(201).json({ mensaje: mensajes.crearEmpleado.success, empleado });
    } catch (error) {
        res.status(500).json({ error: mensajes.crearEmpleado.error });
    }
};

const listarEmpleados = async (req, res) => {
    try {
       const filtros = req.query;
       const empleados = await obtenerEmpleados(filtros);
       res.json(empleados);
    } catch (error) {
       res.status(500).json({ error: mensajes.listarEmpleados.error });
    }
};

const listarMayores = async (req, res) => {
    try {
       const mayores = await obtenerMayoresDe(30);
       res.json(mayores);
    } catch (error){
        res.status(500).json({ error: mensajes.listarMayores.error });
    }
};

const actualizarEmpleadoController = async (req, res) => {
    const { id } = req.params;
    const datos = req.body;

    const errores = validarEmpleado(datos, true);

   if (errores.length > 0) {
    return res.status(400).json({ error: errores });
   }

    try {
        const actualizado = await actualizarEmpleado(id, datos);
        res.json(actualizado);
    } catch (error) {
        res.status(error.code || 500).json({ error: error.message || mensajes.actualizarEmpleado.error });
    }
}

const eliminarEmpleadoController = async (req, res) => {
    const { id } = req.params;

    try {
        await eliminarEmpleado(id);
        res.json({ mensaje: mensajes.eliminarEmpleado.success });
    } catch (error) {
        res.status(error.code || 500).json({ error: error.message || mensajes.eliminarEmpleado.error });
    }
};

const getEstadisticas = async (req, res) => {
    try {
       const stats = await obtenerEstadisticas();
       res.json(stats);
    } catch (error) {
       res.status(500).json({ error: mensajes.estadisticas.error });
    }
};

module.exports = {
    crearEmpleado,
    listarEmpleados,
    listarMayores,
    actualizarEmpleado:actualizarEmpleadoController,
    eliminarEmpleado:eliminarEmpleadoController,
    getEstadisticas
};