const express = require('express');
const logger = require('./middlewares/logger')


const app = express();
const PORT = 3000;

app.use(express.json());

app.use(logger);

app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
    console.log(`Servidor http://localhost:${PORT}`);
})

