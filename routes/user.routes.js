import express from 'express';
import userController from '../controllers/user/index.controller.js'; 
import { authUser } from '../middlewares/security/index.middleware.js';
import { userExists} from '../middlewares/user/index.middleware.js';


const router = express.Router();

router.post('/users/register', userController.register)
router.get('/users/validate/:registrationCode', userController.validate)
router.post('/users/login', userController.login)
router.get('/users/profile', authUser, userExists, userController.profile)
router.get('/users/profile/:userId', userExists, userController.publicProfile)
router.put('/users/avatar', authUser, userExists, userController.editAvatar)
router.post('/users/password/recover', userController.passwordRecover)


export default router;