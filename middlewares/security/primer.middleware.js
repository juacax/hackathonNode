const main = (req, res, next) => {
    req.nombre = "Juacax";
    next();
}

export default main;