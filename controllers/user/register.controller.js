import randomstring from 'randomstring';
import bcrypt from 'bcrypt';
import validateSchema from '../../helpers/validate.helper.js';
import schema from '../../schemas/user/register.schema.js';
import userSevice from '../../services/user/index.service.js';
import errors from '../../helpers/errors.helper.js';

const main = async (req,res,next) => {
    try {
        //recibir info en req que vamos a tener que validar 
        await validateSchema(schema, req.body);
        const {email, username, password} = req.body;

        //Generamos código aleatorio
        const registrationCode = randomstring.generate(30);

        //Validamos que no exista un usuario ya registrado
        const users = await userSevice.getByUsernameOrEmail(email, username);
        if(users.length > 0) {
            errors.conflictError('El username o email ya se encuentra registrado','USER_REGISTER_ERROR');
        }

        //Encriptamos la contraseña
        const passwordEncoded = await bcrypt.hash(password,5)
        //Registramos
        await userSevice.register(email, username, passwordEncoded, registrationCode);

        //enviamos Email
        await userSevice.registerSendEmail(email, registrationCode);

        res.send({
            status: "success",
            message: "Usuario registrado con éxito"
        })

    } catch (error) {
        next(error);
    }  
};

export default main;