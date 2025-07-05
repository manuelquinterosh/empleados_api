const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const metodo = req.method;
    const ruta = req.originalUrl;
    console.log(`[${timestamp}] ${metodo} ${ruta}`);
    next();
}