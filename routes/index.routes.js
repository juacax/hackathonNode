import express from 'express';
import userRouter from './user.routes.js';
import productRouter from './product.routes.js';

const router = express.Router();
router.use(userRouter);
router.use(productRouter);

export default router;