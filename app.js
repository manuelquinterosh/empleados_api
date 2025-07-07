const express = require('express');
const logger = require('./middlewares/logger')
const empleadosRoutes = require('./routes/empleadosRoutes');
const { getEstadisticas } = require('./controllers/empleadosController');


const app = express();
const PORT = 3000;

app.use(express.json());

app.use(logger);

app.use('/empleados', empleadosRoutes);

app.get('/estadisticas', getEstadisticas);

app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

module.exports = app;