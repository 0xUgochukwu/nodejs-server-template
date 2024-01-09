import { Schema, model } from "mongoose";

export interface IPost {
    title: string;
    content: string;
    image: string;
    author: string;
    likes: number;
}

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
        type: String,
        required: true,
    },
  likes: Number,
  author: {
    type: String,
    required: true,
  }
},
{
  timestamps: true,
});


export default model<IPost>("posts", postSchema);