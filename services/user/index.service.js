import register from './register.service.js';
import getByUsernameOrEmail from './getByUsernameOrEmail.service.js';
import registerSendEmail from './registerSendEmail.service.js';
import getByRegistrationCode from './getByRegistrationCode.service.js';
import activate from './activate.service.js';
import getById from './getById.service.js';
import updateAvatar from './updateAvatar.service.js';
import updateRecoverPassCode from './updateRecoverPassCode.service.js';
import passwordRecoverSendMail from './passwordRecoverSendMail.service.js';
import passwordUpdate from './passwordUpdate.service.js';

export default {
    register,
    getByUsernameOrEmail,
    registerSendEmail,
    getByRegistrationCode,
    activate,
    getById,
    updateAvatar,
    updateRecoverPassCode,
    passwordRecoverSendMail,
    passwordUpdate
}