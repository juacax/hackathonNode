import errors from '../../helpers/errors.helper.js'

const main = async (req, res, next) => {
  try {
    if (req.user.id !== req.entry.userId) {
      errors.notAuthorizedError('No tienes permisos para editar esta entrada')
    }

    next()
  } catch (error) {
    next(error)
  }
}

export default main
