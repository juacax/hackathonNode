import express from 'express';
import userRouter from './user.routes.js';
import entryRouter from './entry.routes.js';

const router = express.Router();
router.use(userRouter);
router.use(entryRouter);

export default router;