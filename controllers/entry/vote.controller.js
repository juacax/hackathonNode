import validateSchema from '../../helpers/validate.helper.js';
import schema from '../../schemas/entry/vote.schema.js';
import entryService from '../../services/entry/index.service.js';

const main = async (req,res,next) => {
    try {
        await validateSchema(schema, req.body)

        const {vote} = req.body;
        const user = req.user;
        const entry = req.entry;

        await entryService.voteEntry(vote,user,entry);
        
        const voteAvg = await entryService.getVoteAvg(entry);

        res.send({
            status: "success",
            message: "Voto registrado con éxito",
            data:{
                voteAvg
            }
        })
    } catch (error) {
        next(error);
    }
}

export default main;