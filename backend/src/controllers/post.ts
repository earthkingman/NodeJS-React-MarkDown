import { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
import User from '../entity/User';
import Post from '../entity/Post';
dotenv.config();

const upload = async (req, res, next) => {
    const { email, title, text } = req.body;
    const image = req.file ? req.file.key : "null";
    try {
        const exPost = Post.create({ email, title, text, image })
        await exPost.save();
        res.status(200).json({
            result: true,
            message: "Upload Success"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            result: false,
            message: `An error occurred (${error.message})`
        })
    }
    res.json(req.file.key);
}


export default {
    upload: upload
}