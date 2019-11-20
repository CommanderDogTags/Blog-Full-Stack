import { Router } from 'express';
import blogsRouter from './blogs';
import authorsRouter from './authors';
import blogtagsRouter from './blogtags';

const router = Router();

router.use('/blogs', blogsRouter);
router.use('/authors', authorsRouter);
router.use('/blogtags', blogtagsRouter);

export default router;