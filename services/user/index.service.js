import register from './register.service.js';
import getByUsernameOrEmail from './getByUsernameOrEmail.service.js';
import registerSendEmail from './registerSendEmail.service.js';
import getByRegistrationCode from './getByRegistrationCode.service.js';
import activate from './activate.service.js';

export default {
    register,
    getByUsernameOrEmail,
    registerSendEmail,
    getByRegistrationCode,
    activate
}