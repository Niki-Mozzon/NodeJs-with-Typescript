import express, { Request, Response, NextFunction } from 'express';
import { ProductsController } from '../controllers/productsController';
import { PageModel } from '../models/pageModel';
import { route } from './users';

const router = express.Router();

const controller: ProductsController = new ProductsController();

router.get('/products', controller.getProducts);
router.post('/add-product', controller.addProduct);

export = router;
