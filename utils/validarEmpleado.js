const validarEmpleado = (data, esActualizacion = false) => {
    const errores = [];

    if (!esActualizacion || data.nombre !== undefined) {
        if (!data.nombre || data.nombre.length < 3){
            errores.push('El nombre debe tener al menos 3 caracteres.');
        }
    }

    if (!esActualizacion || data.edad !== undefined) {
        if (!Number.isInteger(data.edad) || data.edad <= 0){
            errores.push('La edad debe ser un numero entero positivo.');
        }
    }

    if (!esActualizacion || data.puesto === undefined) {
        if (!data.puesto || typeof data.puesto !== 'string' || data.puesto.trim().length === 0) {
            errores.push('El puesto es requerido.');
        }
    }

    if (!parcial || data.departamento !== undefined) {
        if (!data.departamento || typeof data.departamento !== 'string' || data.departamento.trim().length === 0) {
            errores.push('El departamento es requerido.');
        }
    }
    
    return errores;
};
module.exports = validarEmpleado;