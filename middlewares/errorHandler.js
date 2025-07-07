const errorHandler = (err, req, res, next) => {
    const status = err.code || 500;
    res.status(status).json({ error: err.message || 'Error del servidor '});
};
module.exports = errorHandler;