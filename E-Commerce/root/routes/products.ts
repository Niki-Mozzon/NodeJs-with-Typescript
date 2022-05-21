import express, { Request, Response, NextFunction } from 'express';
import { PageModel } from '../models/pageModel';
import { route } from './users';
import { ProductsController } from '../controllers/productsController';

const router = express.Router();

const controller: ProductsController = new ProductsController();

router.get('/products', controller.getProducts);

export = router;
