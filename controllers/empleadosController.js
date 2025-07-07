const {
   agregarEmpleado,
   obtenerEmpleados,
   obtenerMayoresDe,
   actualizarEmpleado,
   eliminarEmpleado,
   obtenerEstadisticas
} = require('../services/empleadosService');

const validarEmpleado = require('../utils/validarEmpleado');

const crearEmpleado = async (req, res) => {
    //const { nombre, edad, puesto, departamento } = req.body;

    /**if (!nombre || nombre.length < 3) {
        return res.status(400).json({ error: 'El nombre debe tener al menos 3 caracteres.'});
    }
    if (!Number.isInteger(edad) || edad <= 0){
        return res.status(400).json({ error: 'La edad debe ser un numero entero positivo.'});
    }
    if (!puesto || !departamento) {
        return res.status(400).json({ error:'Puesto y departamento son requeridos.'});
    }**/
   const errores = validarEmpleado(req.body);

   if (errores.length > 0) {
    return res.status(400).json({ error: errores})
   }
    try {
        const empleado = await agregarEmpleado(req.body);
        res.status(201).json(empleado);
    } catch (error) {
        res.status(500).json({ error:'Error al crear empleado.'});
    }
};

const listarEmpleados = async (req, res) => {
    try {
       const filtros = req.query;
       const empleados = await obtenerEmpleados(filtros);
       res.json(empleados);
    } catch (error) {
       res.status(500).json({ error: 'Error al obtener empleados.'});
    }
};

const listarMayores = async (req, res) => {
    try {
       const mayores = await obtenerMayoresDe(30);
       res.json(mayores);
    } catch (error){
        res.status(500).json({ error: 'Error al obtener empleados mayores de 30.'});
    }
};

const actualizarEmpleadoController = async (req, res) => {
    const { id } = req.params;
    const datos = req.body;

    /*if (datos.nombre && datos.nombre.length < 3) {
        return res.status(400).json({ error: 'El nombre debe tener al menos 3 caracteres.'});
    }

    if (datos.edad !== undefined && (!Number.isInteger(datos.edad) || datos.edad <= 0)){
        return res.status(400).json({ error: 'La edad debe ser un numero entero positivo.'});
    }*/
   const errores = validarEmpleado(datos, true);
   if (errores.length > 0) {
    return res.status(400).json({ error: errores });
   }

    try {
        const actualizado = await actualizarEmpleado(id, datos);
        res.json(actualizado);
    } catch (error) {
        res.status(error.code || 500).json({ error: error.message || 'Error al actualizar empleado.'});
    }
}

const eliminarEmpleadoController = async (req, res) => {
    const { id } = req.params;

    try {
        await eliminarEmpleado(id);
        res.json({ mensaje: 'Empleado eliminado correctamente.'});
    } catch (error) {
        res.status(error.code || 500).json({ error: error.message || 'Error al eliminar empleado.'});
    }
};

const getEstadisticas = async (req, res) => {
    try {
       const stats = await obtenerEstadisticas();
       res.json(stats);
    } catch (error) {
       res.status(500).json({ error: 'Error al calcular estadisticas.'});
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