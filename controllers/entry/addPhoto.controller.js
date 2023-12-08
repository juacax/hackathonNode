import validateSchema from '../../helpers/validate.helper.js';
import schema from '../../schemas/entry/addPhoto.schema.js';
import entryService from '../../services/entry/index.service.js';
import fileService from '../../services/files/index.service.js'

const main = async (req,res,next) => {
    try {
        await validateSchema(schema, req.files || {})
        //Almacenar nueva foto
        const fileName = await fileService.savePhoto(req.files.photo, 500)

        //Actualizar base de datos
        try {
            await entryService.addPhoto(req.entry, fileName);
        } catch (error) {
            await fileService.deleteFile(fileName);
            next(error);
        }

        res.send({
            status: "success",
            message: "Foto insertarda con éxito",
            data:{
                photo: fileName
            }
        })


    } catch (error) {
        next(error);
    }
}

export default main;