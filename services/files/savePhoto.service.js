import path from 'path';
import fs from 'fs/promises';
import randomstring from 'randomstring';
import sharp from 'sharp';
import errors from '../../helpers/errors.helper.js';


const main = async (imagen, ancho) => {
    try {
        const uploadDir = path.join(process.cwd(),'..',process.env.UPLOADS_DIR);

        try {
            await fs.access(uploadDir);
        } catch {
            await fs.mkdir(uploadDir);
        }

        const imgSharp = sharp(imagen.data)
        imgSharp.resize(ancho);
        const nameRandom = randomstring.generate(15) + '.jpg';
        const imgPath = path.join(uploadDir, nameRandom);

        await imgSharp.toFile(imgPath)
        return nameRandom;
    } catch (error) {
        errors.internalServerError(error.message,'SAVE_PHOTO_ERROR');
    }
}

export default main;