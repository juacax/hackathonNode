import entryService from '../../services/entry/index.service.js';
import fileService from '../../services/files/index.service.js';
import errors from '../../helpers/errors.helper.js';

const main = async (req,res,next) => {
    try {
        const photos = await entryService.getPhotoById(req.params.photoId)
        if(photos.length === 0) {
            errors.notFoundError('Foto no encontrada', 'PHOTO_NOT_FOUND');
        }

        if(photos[0].entryId !== req.entry.id){
            errors.forbiddenError('No tienes permisos para eliminar esta foto', 'FORBIDDEN_DELETE_PHOTO');
        }

        await fileService.deleteFile(photos[0].name);
        await entryService.deletePhoto(photos[0]);

        res.send({
            status: "success",
            message: "Foto eliminada con éxito",
        })
    } catch (error) {
        next(error);
    }
}

export default main;