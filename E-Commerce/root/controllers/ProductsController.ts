import { Request, Response, NextFunction } from 'express';
import { PageModel } from '../models/PageModel';

export class ProductsController {
  getProducts = (req: Request, res: Response, next: NextFunction) => {
    res.render('main', { model: new PageModel('Products', 'products') });
  };
}
