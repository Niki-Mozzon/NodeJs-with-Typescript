import { Request, Response, NextFunction } from 'express';
import { PageModel } from '../models/PageModel';

export class AdminController {
  getDashboard = (req: Request, res: Response, next: NextFunction) => {
    res.render('main', { model: new PageModel('Dashboard', 'dashboard') });
  };
}
