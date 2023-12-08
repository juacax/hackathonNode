const saludar = (req, res) =>{
    res.send(`Hola ${req.nombre} desde el Controller`);
}

export default saludar;