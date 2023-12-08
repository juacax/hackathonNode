import joi from 'joi'
import joiMsg from '../joi.messages.js'

const newEntrySchema = joi.object({
  title: joi.string().min(5).max(50).required().messages(joiMsg.errorMsg),
  place: joi.string().min(3).max(30).required().messages(joiMsg.errorMsg),
  description: joi
    .string()
    .min(10)
    .max(500)
    .required()
    .messages(joiMsg.errorMsg)
})

export default newEntrySchema
