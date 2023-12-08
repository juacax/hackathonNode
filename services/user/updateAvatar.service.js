import getPool from "../../db/getPool.js";
import errors from '../../helpers/errors.helper.js';

const main = async (user, avatar) =>{
    try {
        const pool = await getPool();
        const sqlQuery = 'UPDATE users SET avatar = ? WHERE id = ?';
        const values = [avatar, user.id]
        const [response] = await pool.query(sqlQuery, values);

        if(response.affectedRows !== 1){
            errors.conflictError('Error al actualizar el avatar','UPDATE_AVATAR_ERROR');
        }

    } catch (error) {
        errors.internalServerError(error.message,'DATA_UPDATE_ERROR');
    }
}

export default main;