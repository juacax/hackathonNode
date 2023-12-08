import jwt from 'jsonwebtoken';
import errors from '../../helpers/errors.helper.js';

const main = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if(!authorization){
            errors.notAuthorizedError('El token es un campo requerido');
        }

        let tokenInfo;

        try {
            tokenInfo = jwt.verify(authorization, process.env.SECRET_KEY);
        } catch (error) {
            errors.notAuthorizedError('El token es incorrecto');
        }

        req.user = tokenInfo;

        next();
    } catch (error) {
        next(error);
    }    
}

export default main;