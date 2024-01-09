import { Request as ExpressRequest } from 'express';
import AdminModel from './src/models/admin.model';

declare module 'express-serve-static-core' {
  interface Request {
    admin?: typeof AdminModel;
  }
}