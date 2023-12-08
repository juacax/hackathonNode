import joi from 'joi'
import joiMsg from '../joi.messages.js'

const validateSchema = joi.object({
  registrationCode: joi
    .string()
    .min(30)
    .max(30)
    .required()
    .pattern(/^\S*$/)
    .messages({ ...joiMsg.errorMsg, ...joiMsg.errorMsgUsername })
})

export default validateSchema;