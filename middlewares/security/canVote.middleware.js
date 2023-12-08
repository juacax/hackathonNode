import errors from '../../helpers/errors.helper.js'
import entryService from '../../services/entry/index.service.js';

const main = async (req, res, next) => {
  try {
    
    if (req.user.id === req.entry.userId) {
      errors.notAuthorizedError('Usted no puede votar a su propia publicación')
    }

    const votes = await entryService.getVoteByUserId(req.user.id);

    if(votes.length > 0) {
      errors.notAuthorizedError('Usted no puede votar más de una vez la misma publicación')
    }


    next()
  } catch (error) {
    next(error)
  }
}

export default main
