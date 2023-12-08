import validateSchema from '../../helpers/validate.helper.js'
import schema from '../../schemas/user/editAvatar.schema.js'
import fileService from '../../services/files/index.service.js'
import userService from '../../services/user/index.service.js'

const main = async (req, res, next) =>{
    try {
        //validamos archivos
        await validateSchema(schema, req.files || {});

        //Almacenar nueva foto
        const fileName = await fileService.savePhoto(req.files.avatar, 150)

        //Actualizar base de datos
        try {
            await userService.updateAvatar(req.user, fileName);
        } catch (error) {
            await fileService.deleteFile(fileName);
            next(error);
        }

        //Eliminar foto vieja
        if(req.user.avatar) await fileService.deleteFile(req.user.avatar)

        res.send({
            status: "success",
            message: "Avatar actualizado con éxito"
        })
    } catch (error) {
        next(error);
    }
}

export default main;