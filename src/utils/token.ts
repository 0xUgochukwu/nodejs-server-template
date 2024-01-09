import jwt from 'jsonwebtoken';
import { IAdmin } from '../models/admin.model';

export const genAccessToken = (payload: IAdmin) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
  };