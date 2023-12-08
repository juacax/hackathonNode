import getPool from "../../db/getPool.js";
import errors from '../../helpers/errors.helper.js';

const main = async (user, recoverPassCode) =>{
    try {
        const pool = await getPool();
        const sqlQuery = 'UPDATE users SET recoverPassCode = ? WHERE id = ?';
        const values = [recoverPassCode, user.id]
        const [response] = await pool.query(sqlQuery, values);

        if(response.affectedRows !== 1){
            errors.conflictError('Error al actualizar el recoverPassCode','UPDATE_RECOVER_PASS_CODE_ERROR');
        }

    } catch (error) {
        errors.internalServerError(error.message,'DATA_UPDATE_ERROR');
    }
}

export default main;