import express from 'express';

import { getPosts, getPost, createPost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.delete('/:id', deletePost);

export default router;