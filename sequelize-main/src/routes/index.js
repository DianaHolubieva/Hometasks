import express from 'express';
import userRouter from './user';
import taskRouter from './tasks';

const router = express.Router();
router.use('/user', userRouter);
router.use('/tasks', taskRouter);

export default router;
