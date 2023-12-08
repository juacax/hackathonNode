import getPool from '../../db/getPool.js';
import errors from '../../helpers/errors.helper.js';

const main = async (photoId) => {
    try {
        const pool = await getPool();
        const sqlQuery = 'SELECT * FROM entryphotos WHERE id = ?';
        const values = [photoId];
        const [photos] = await pool.query(sqlQuery, values);

        return photos;

    } catch (error) {
        errors.internalServerError(error.message,'DATA_CONSULT_ERROR');
    }
}

export default main;