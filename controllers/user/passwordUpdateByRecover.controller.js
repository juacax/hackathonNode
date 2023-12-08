import bcrypt from 'bcrypt';
import validateSchema from '../../helpers/validate.helper.js'
import schema from '../../schemas/user/passwordUpdateByRecover.schema.js'
import userService from '../../services/user/index.service.js'
import errors from '../../helpers/errors.helper.js'

const main = async (req, res, next) => {
  try {
    //Validamos
    await validateSchema(schema, req.body)
    const { email, recoverPassCode, newPass } = req.body

    const users = await userService.getByUsernameOrEmail(email, '')

    if (users.length === 0) {
      errors.notFoundError('Usuario no encontrado', 'USER_NOT_FOUND')
    }

    if (users.length > 1) {
      errors.conflictError(
        'Por alguna razón existen más de un usuario',
        'MANY_USERS_ERROR'
      )
    }

    const user = users[0]

    if (!user.recoverPassCode) {
      errors.conflictError(
        'El usuario no solicitó una recuperación de contraseña.',
        'INVALID_RECOVER_PASS_ERROR'
      )
    }

    if(user.recoverPassCode !== recoverPassCode) {
        errors.notAuthorizedError(
            'El código de recuperación es incorrecto.',
            'RECOVER_PASS_CODE_ERROR'
          )
    }

    user.password = await bcrypt.hash(newPass, 5);

    await userService.passwordUpdate(user)

    res.send({
        status: "success",
        message: "Contraseña actualizada con éxito"
    })

  } catch (error) {
    next(error)
  }
}

export default main
