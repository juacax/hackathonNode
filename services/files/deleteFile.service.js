import path from 'path';
import fs from 'fs/promises';
import errors from '../../helpers/errors.helper.js';

const main = async (fileName) =>{
    try {
        const imgPath =  path.join(process.cwd(),'..',process.env.UPLOADS_DIR, fileName);

        try {
            await fs.access(imgPath);
        } catch {
            return;
        }

        await fs.unlink(imgPath);

    } catch (error) {
        errors.internalServerError(error.message, 'DELETE_FILE_ERROR');
    }
}

export default main;