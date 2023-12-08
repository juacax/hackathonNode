import validateSchema from '../../helpers/validate.helper.js'
import schema from '../../schemas/user/validate.schema.js'
import userSevice from '../../services/user/index.service.js'
import errors from '../../helpers/errors.helper.js'

const main = async (req, res, next) => {
  try {
    const { registrationCode } = req.params
    //Validar schema
    await validateSchema(schema, { registrationCode })

    const users = await userSevice.getByRegistrationCode(registrationCode)

    if (users.length > 1) {
      errors.conflictError(
        'Hemos detectado más de un usuario con el mismo registrationCode',
        'USER_VALIDATE_ERROR'
      )
    }

    if(users.length == 0){
        errors.conflictError(
            'Usuario activado con anterioridad',
            'USER_VALIDATE_ERROR'
          )
    }

    await userSevice.activate(users[0])

    res.send({
        status: "success",
        message: "Usuario activado con éxito"
    })

  } catch (error) {
    next(error)
  }
}

export default main;
