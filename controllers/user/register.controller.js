import randomstring from 'randomstring';
import bcrypt from 'bcrypt';
import validateSchema from '../../helpers/validate.helper.js';
import schema from '../../schemas/user/register.schema.js';
import userSevice from '../../services/user/index.service.js';

const main = async (req,res,next) => {
    try {
        //recibir info en req que vamos a tener que validar 
        await validateSchema(schema, req.body);
        const {email, username, password} = req.body;
        const registrationCode = randomstring.generate(30);

        const passwordEncoded = await bcrypt.hash(password,5)
        await userSevice.register(email, username, passwordEncoded, registrationCode);

        res.send({
            status: "success",
            message: "Usuario registrado con éxito"
        })

    } catch (error) {
        next(error);
    }  
};

export default main;