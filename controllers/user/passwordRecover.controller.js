import randomstring from 'randomstring';
import validateSchema from '../../helpers/validate.helper.js';
import schema from '../../schemas/user/passwordRecover.schema.js';
import userService from '../../services/user/index.service.js';
import errors from '../../helpers/errors.helper.js';


const main = async (req, res, next) => {
    try {
        //validacion
        await validateSchema(schema, req.body);

        const { email } = req.body;
        const users = await userService.getByUsernameOrEmail(email,'');

        if(users.length === 0){
            errors.notFoundError('Usuario no encontrado', 'USER_NOT_FOUND');
        }

        if(users.length>1){
            errors.conflictError('Por alguna razón existen más de un usuario','MANY_USERS_ERROR');
        }
        
        const user = users[0];
        const recoverPassCode = randomstring.generate(10);
        await userService.updateRecoverPassCode(user, recoverPassCode);
        await userService.passwordRecoverSendMail(user.email, recoverPassCode);

        res.send({
            status: "success",
            message: "RecoverPassCode enviado con éxito"
        })
    } catch (error) {
        next(error);
    }
}

export default main;