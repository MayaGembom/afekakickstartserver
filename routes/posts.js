import express from 'express';
import { getProjects, getProject, createProject , deleteProject } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getProjects);
router.post('/', createProject);
router.get('/:id', getProject);
router.delete('/:id', deleteProject);

export default router;