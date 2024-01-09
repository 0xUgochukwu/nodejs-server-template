import AdminModel, { IAdmin } from '../models/admin.model';
import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import { genAccessToken } from '../utils/token';


export const createAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
        const admin: IAdmin = req.body;
        admin.password = bcryptjs.hashSync(admin.password, 10);
        const savedAdmin = await new AdminModel(admin).save();
        res.status(201).json({
            message: "Admin created",
            success: true,
            data: savedAdmin
        });
    } catch (err) {
        res.status(400).json({
            message: err.message,
            success: false
        });
    }
}

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        let { email, password } = req.body;
        password = bcryptjs.hashSync(password, 10);
        const admin: IAdmin = await AdminModel.findOne({ email, password });
        const token = genAccessToken(admin);

        res.status(200).json({
            message: "Admin logged in",
            success: true,
            data: {
                admin,
                token
            }
        });
    } catch (err) {
        res.status(400).json({
            message: err.message,
            success: false
        });
    }
}