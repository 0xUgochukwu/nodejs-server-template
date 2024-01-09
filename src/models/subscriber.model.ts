import { Schema, model } from "mongoose";

export interface ISubscriber {
    email: string;
    name?: string;
}

const subscriberSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  }
},
{
  timestamps: true,
});


export default model<ISubscriber>("subscribers", subscriberSchema);