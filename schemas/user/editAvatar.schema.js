import joi from 'joi';
import imgSchema from '../img.schemas.js';

const editAvatarSchema = joi.object({
    avatar: imgSchema.required()
});

export default editAvatarSchema;