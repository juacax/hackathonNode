import joi from 'joi'
import joiMsg from '../joi.messages.js'

const passwordRecover = joi.object({
  email: joi.string().email().required().messages(joiMsg.errorMsg)
})

export default passwordRecover
