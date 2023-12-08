import validateSchema from '../../helpers/validate.helper.js';
import schema from '../../schemas/entry/insert.schema.js';
import entryService from '../../services/entry/index.service.js';

const main = async (req,res,next) => {
    try {
        await validateSchema(schema, req.body);
        const {title, place, description} = req.body;
        const user = req.user;

        const entryId = await entryService.insert(title, place, description, user.id)

        res.send({
            status: "success",
            message: "Entrada registrada con éxito",
            data:{
                id: entryId,
                title,
                place,
                description,
                userId: user.id,
                createdAt: new Date()
            }
        })
    } catch (error) {
        next(error);
    }
}

export default main;