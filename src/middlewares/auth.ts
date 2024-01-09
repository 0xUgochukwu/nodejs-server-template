import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import AdminModel from '../models/admin.model';


export const auth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = <JwtPayload>jwt.verify(token, process.env.JWT_SECRET as string);
        const admin: typeof AdminModel = await AdminModel.findOne({ _id: decoded._id, 'tokens.token': token });

        if (!admin) {
            throw new Error();
        }

        req.admin = admin;
        next();
    } catch (err) {
        res.status(401).json({
            message: "Please authenticate",
            success: false
        });
    }
}