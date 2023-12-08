import getPool from "../../db/getPool.js";
import errors from '../../helpers/errors.helper.js';

const main = async (photo) =>{
    try {
        const pool = await getPool();
        const sqlQuery = 'DELETE FROM entryphotos WHERE id = ?';
        const values = [photo.id]
        const [response] = await pool.query(sqlQuery, values);

        if(response.affectedRows !== 1){
            errors.conflictError('Error al eliminar la foto','DELETE_PHOTO_ERROR');
        }

    } catch (error) {
        errors.internalServerError(error.message,'DATA_DELETE_ERROR');
    }
}

export default main;