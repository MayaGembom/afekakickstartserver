import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    title: String,
    description: String,
    creator: String,
    category: String,
    goal: Number,
    selectedFile: String,
    pledgeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    deadLine: {
        type: Date,
        default: new Date()
    }
});

const ProjectMessage = mongoose.model('Projects', projectSchema);

export default ProjectMessage;
