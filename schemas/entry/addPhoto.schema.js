import joi from 'joi';
import imgSchema from '../img.schemas.js';

const editAvatarSchema = joi.object({
    photo: imgSchema.required()
});

export default editAvatarSchema;