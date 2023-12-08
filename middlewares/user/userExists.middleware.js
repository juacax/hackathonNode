import userService from '../../services/user/index.service.js';
import errors from '../../helpers/errors.helper.js';

const main = async (req, res, next) => {
    try {
        const userId = req.user?.id || req.params.userId
        const users = await userService.getById(userId);

        if(users.length === 0) {
            errors.notFoundError('Usuario no encontrado','USER_NOT_FOUND');
        }

        req.user = users[0];

        next();
    } catch (error) {
        next(error);
    }
}

export default main;