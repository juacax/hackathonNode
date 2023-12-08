const despedir = (req, res) =>{
    res.send(`Chau ${req.nombre} desde el Controller`);
}

export default despedir;