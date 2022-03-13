import express from 'express';
import mongoose from 'mongoose';

import ProjectData from '../models/projectData.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await ProjectData.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createPost = async (req, res) => {
    const post = req.body;
    const newPostMessage = new ProjectData({ ...post, creator: req.userId, createdAt: new Date().toISOString()})

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await ProjectData.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export default router;

export const pladgeProject = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await ProjectData.findById(id);

  
    const updatedPost = await ProjectData.findByIdAndUpdate(id, { pledgeCount: post.pledgeCount + 1}, { new: true });
    res.status(200).json(updatedPost);


}

