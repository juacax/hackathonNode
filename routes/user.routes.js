import express from 'express';
import userController from '../controllers/user/index.controller.js'; 
import securityMiddleware from '../middlewares/security/primer.middleware.js';

const router = express.Router();

router.get('/users/hola', securityMiddleware, userController.saludar);
router.get('/users/chau', securityMiddleware, userController.despedir);
router.post('/users/register',userController.register)

export default router;