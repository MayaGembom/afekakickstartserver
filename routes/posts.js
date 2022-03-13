import express from 'express';
import { getPosts, createPost, deletePost,pladgeProject } from '../controllers/posts.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', getPosts);
router.post('/',auth, createPost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/pladgeProject', auth, pladgeProject);

export default router;