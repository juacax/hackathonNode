import getPool from '../../db/getPool.js';
import errors from '../../helpers/errors.helper.js';

const main = async (entry) => {
    try {
        const pool = await getPool();
        const sqlQuery = 'SELECT AVG(value) as voteAvg FROM entryvotes WHERE entryId = ?';
        const values = [entry.id];
        const [response] = await pool.query(sqlQuery, values);

        if(response.length < 1) {
            errors.notFoundError('Publicación no votada')
        }

        return response[0].voteAvg;


    } catch (error) {
        errors.internalServerError(error.message,'DATA_CONSULT_ERROR');
    }
}

export default main;