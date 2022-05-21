import express, { Request, Response, NextFunction } from 'express';
import { PageModel } from '../../models/pageModel';
import dir from '../../utils/path';
import path from 'path';
import { AdminController } from '../../controllers/adminController';

const router = express.Router();
router.use(express.static(path.join(dir, 'public')));

const conrtoller: AdminController = new AdminController();

router.get('/dashboard', conrtoller.getDashboard);

export = router;
