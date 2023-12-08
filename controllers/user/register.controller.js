import validateSchema from '../../helpers/validate.helper.js';
import schema from '../../schemas/user/register.schema.js';

const main = async (req,res,next) => {
    try {
        //recibir info en req que vamos a tener que validar 
        await validateSchema(schema, req.body);

        const {email, username, password} = req.body;

    } catch (error) {
        next(error);
    }  
};

export default main;