const fs = require('fs-extra');
const FILE = './data/empleados.json';

async function leerDatos() {
    return (await fs.readJson(FILE).catch(() => [])).filter(Boolean);
}

async function guardarDatos(data) {
    return fs.writeJson(FILE, data, { spaces: 2 });
}

function generarNuevoId(empleados) {
    const ids = empleados.map(e => e.id);
    return ids.length ? Math.max(...ids) + 1 : 1;
}

const agregarEmpleado = async (empleado) => {
    const empleados = await leerDatos();
    const nuevo = { id:generarNuevoId(empleado), ...empleado };
    empleados.push(nuevo);
    await guardarDatos(empleados);
    return nuevo;
}

const obtenerEmpleados = async (filtros) => {
    let empleados = await leerDatos();

    if (filtros.edadMin) empleados = empleados.filter(e => e.edad >= parseInt(filtros.edadMin));
    if (filtros.edadMax) empleados = empleados.filter(e => e.edad <= parseInt(filtros.edadMax));
    if (filtros.puesto) empleados = empleados.filter(e => e.puesto.toLowerCase() === filtros.puesto.toLowerCase());
    if (filtros.departamento) empleados = empleados.filter(e => e.departamento.toLowerCase() === filtros.departamento.toLowerCase());

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
    const existe = empleados.find(e => e.id == id);

    if (!existe) {
        throw { message: 'Empleado no encontrado', code: 404 };
    }

    empleados = empleados.filter(e => e.id != id);
    await guardarDatos(empleados);
}

const obtenerEstadisticas = async () => {
    const empleados = await leerDatos();
    const total= empleados.length;
    const promedioEdad = total > 0 ? (empleados.reduce((acc, e) => acc + e.edad, 0) / total).toFixed(2) : 0;

    const porPuesto = {};
    const porDepartamento = {};

    empleados.forEach(e => {
        porPuesto[e.puesto] = (porPuesto[e.puesto] || 0) + 1;
        porDepartamento[e.departamento] = (porDepartamento[e.departamento] || 0) + 1;
    });

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