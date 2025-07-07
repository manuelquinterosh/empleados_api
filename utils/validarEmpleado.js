const validarEmpleado = (data, parcial = false) => {
    const errores = [];

    if (!parcial || data.nombre !== undefined) {
        if (!data.nombre || data.nombre.length < 3){
            errores.push('El nombre debe tener al menos 3 caracteres.');
        }
    }

    if (!parcial || data.edad !== undefined) {
        if (!Number.isInteger(data.edad) || data.edad <= 0){
            errores.push('La edad debe ser un numero entero positivo.');
        }
    }

    if (!parcial || data.puesto === undefined || data.departamento === undefined) {
        if (!data.puesto || !data.departamento) {
            errores.push('Puesto y departamento son requeridos.');
        }
    }
    return errores;
};
module.exports = validarEmpleado;