import joi from 'joi'
import joiMsg from '../joi.messages.js'

const registerSchema = joi.object({
  email: joi.string().email().required().messages(joiMsg.errorMsg)
})

export default registerSchema
