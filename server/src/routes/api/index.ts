import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { jobRouter } from './jobs-routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/jobs', jobRouter);

export default router;
