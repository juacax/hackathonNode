import express from 'express';
import userController from '../controllers/user/index.controller.js'; 

const router = express.Router();

router.post('/users/register', userController.register)
router.get('/users/validate/:registrationCode', userController.validate)
router.post('/users/login', userController.login)

export default router;