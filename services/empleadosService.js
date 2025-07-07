const fs = require('fs-extra');
const FILE = './data/empleados.json';

const leerDatos = async () => { 
    try {
        const data = await fs.readJson(FILE);
        return Array.isArray(data) ? data.filter(Boolean) : [];
    } catch {
        return [];
    }
}

const guardarDatos = (data) => fs.writeJson(FILE, data, { spaces: 2 });

const generarNuevoId = (empleados) => 
    empleados.length ? Math.max(...empleados.map(e => e.id)) + 1 : 1;


const agregarEmpleado = async (empleado) => {
    const empleados = await leerDatos();
    const nuevo = { id:generarNuevoId(empleado), ...empleado };
    empleados.push(nuevo);
    await guardarDatos(empleados);
    return nuevo;
}

const obtenerEmpleados = async ({ edadMin, edadMax, puesto, departamento }) => {
    let empleados = await leerDatos();

    if (edadMin) empleados = empleados.filter(e => e.edad >= parseInt(edadMin));
    if (edadMax) empleados = empleados.filter(e => e.edad <= parseInt(edadMax));
    if (puesto) empleados = empleados.filter(e => e.puesto.toLowerCase() === puesto.toLowerCase());
    if (departamento) empleados = empleados.filter(e => e.departamento.toLowerCase() === departamento.toLowerCase());

    return empleados;
}

const obtenerMayoresDe = async (edad) => {
    const empleados = await leerDatos();
    return empleados.filter(e => e.edad > edad);
}

const actualizarEmpleado = async (id, datos) => {
    const empleados = await leerDatos();
    const index = empleados.findIndex(e => e.id == id);

    if (index === -1) {
        throw { message: 'Empleado no encontrado', code: 404 };
    }

    empleados[index] = {...empleados[index], ...datos };
    await guardarDatos(empleados);
    return empleados[index];
}

const eliminarEmpleado = async (id) => {
    let empleados = await leerDatos();
    const existe = empleados.some(e => e.id == id);

    if (!existe) {
        throw { message: 'Empleado no encontrado', code: 404 };
    }

    const actualizados = empleados.filter(e => e.id != id);
    await guardarDatos(actualizados);
}

const obtenerEstadisticas = async () => {
    const empleados = await leerDatos();
    const total= empleados.length;

    const promedioEdad = total ? (empleados.reduce((acc, e) => acc + e.edad, 0) / total).toFixed(2) : 0;

    const porPuesto = {};
    const porDepartamento = {};

    for (const e of empleados) {
        porPuesto[e.puesto] = (porPuesto[e.puesto] || 0) + 1;
        porDepartamento[e.departamento] = (porDepartamento[e.departamento] || 0) + 1;
    };

    return { total, promedioEdad, porPuesto, porDepartamento };
};

module.exports = {
    agregarEmpleado,
    obtenerEmpleados,
    obtenerMayoresDe,
    actualizarEmpleado,
    eliminarEmpleado,
    obtenerEstadisticas
};