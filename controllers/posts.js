import express from 'express';
import mongoose from 'mongoose';
import ProjectMessage from '../models/ProjectMessage.js';

const router = express.Router();

export const getProjects = async (req, res) => { 
    try {
        const projectMessage = await ProjectMessage.find();
                
        res.status(200).json(projectMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getProject = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await ProjectMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createProject = async (req, res) => {
    const post =req.body;

    const newPostMessage = new ProjectMessage(post)

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const deleteProject  = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await ProjectMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export default router;
