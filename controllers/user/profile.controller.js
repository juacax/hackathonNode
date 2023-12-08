const main = async (req, res, next) => {
    try {
        const user = req.user;

        const userDto = {
            id: user.id,
            username: user.username,
            email: user.email,
            avatar: user.avatar,
            createdAt: user.createdAt
        }

        res.send({
            status: "success",
            message: "Usuario obtenido con éxito",
            data:{
                user: userDto
            }
        })
        
    } catch (error) {
        next(error);
    }
}

export default main;