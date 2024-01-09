import PostModel, { IPost } from '../models/post.model';
import { Request, Response } from 'express';


export const createPost = async (req: Request, res: Response): Promise<void> => {
    try {
        const post: IPost = req.body;
        const savedPost = await new PostModel(post).save();
        res.status(201).json({
            message: "Post created",
            success: true,
            data: savedPost
        });
    } catch (err) {
        res.status(400).json({
            message: err.message,
            success: false
        });
    }
}

export const getPosts = async (req: Request, res: Response): Promise<void> => {
    try {
        const posts = await PostModel.find();
        res.status(200).json({
            message: "Post fetched",
            success: true,
            data: posts
        });
    } catch (err) {
        res.status(400).json({
            message: err.message,
            success: false
        });
    }
}

export const getPost = async (req: Request, res: Response): Promise<void> => {
    try {
        const post = await PostModel.findById(req.body.id);
        res.status(200).json({
            message: "Post fetched",
            success: true,
            data: post
        });
    } catch (err) {
        res.status(400).json({
            message: err.message,
            success: false
        });
    }
}

export const updatePost = async (req: Request, res: Response): Promise<void> => {
    try {
        const post: IPost = req.body;
        const updatedPost = await PostModel.findByIdAndUpdate(req.body.id, post);
        res.status(200).json({
            message: "Post updated",
            success: true,
            data: updatedPost
        });
    } catch (err) {
        res.status(400).json({
            message: err.message,
            success: false
        });
    }
}


export const deletePost = async (req: Request, res: Response): Promise<void> => {
    try {
        const post = await PostModel.findByIdAndDelete(req.body.id);
        res.status(200).json({
            message: "Post deleted",
            success: true,
            data: post
        });
    } catch (err) {
        res.status(400).json({
            message: err.message,
            success: false
        });
    }
}
