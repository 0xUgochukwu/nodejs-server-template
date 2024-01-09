import express from 'express';
import { auth } from '../middlewares/auth';
import { createAdmin, login } from '../controllers/admin.controller';


const router = express.Router();

router.post('/create', createAdmin);
router.post('/login', login);

export default router;