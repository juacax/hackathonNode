import getPool from '../../db/getPool.js';
import errors from '../../helpers/errors.helper.js';

const main = async (email, username) => {
    try {
        const pool = await getPool();
        const sqlQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
        const values = [username, email];
        const [users] = await pool.query(sqlQuery, values);

        return users;

    } catch (error) {
        errors.internalServerError(error.message,'DATA_CONSULT_ERROR');
    }
}

export default main;