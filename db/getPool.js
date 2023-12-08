import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASS,
    MYSQL_DB
} = process.env;

let pool;

const getPool = async()=>{
    try {
        if(!pool){
            const poolTemp = mysql.createPool({
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASS,
            })

            await poolTemp.query(`CREATE DATABASE IF NOT EXISTS ${MYSQL_DB}`);

            pool = mysql.createPool({
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASS,
                database: MYSQL_DB,
                connectionLimit: 10,
                timezone: 'Z'
            });
        }

        return pool;
    } catch (error) {
        console.error(error);
    }
}

export default getPool;