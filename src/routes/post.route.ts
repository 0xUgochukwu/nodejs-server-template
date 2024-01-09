import express from 'express';
import { auth } from '../middlewares/auth';
import { createPost, getPost, getPosts, updatePost } from '../controllers/post.controller';

const router = express.Router();

router.post('/create', auth, createPost);
router.get('/', auth, getPosts);
router.get('/:id', auth, getPost);
router.put('/update/:id', auth, updatePost);
router.delete('/delete/:id', auth, updatePost);

export default router;