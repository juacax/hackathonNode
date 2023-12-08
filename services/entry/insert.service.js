import getPool from '../../db/getPool.js';
import errors from '../../helpers/errors.helper.js';

const main = async (title, place, description, userId) =>{
    try {
        const pool = await getPool();

        const sqlQuery = 'INSERT INTO entries (title, place, description, userId) VALUES (?, ?, ?, ?)';
        const values = [title, place, description, userId]
    
        const [response] = await pool.query(sqlQuery, values);

        if(response.affectedRows !== 1){
            errors.conflictError('Error al insertar nueva entrada','INSERT_ENTRY_ERROR');
        }

        console.log(response);

        return response.insertId;
    } catch (error) {
        errors.internalServerError(error.message,'DATA_INSERT_ERROR');
    }
}

export default main;