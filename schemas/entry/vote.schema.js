import joi from 'joi'
import joiMsg from '../joi.messages.js'

const newEntrySchema = joi.object({
  vote: joi.number().min(1).max(5).required().messages({...joiMsg.errorMsg,...joiMsg.errorMsgVote})
})

export default newEntrySchema
