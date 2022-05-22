import express from 'express';
import { ProductsController } from '../controllers/productsController';

const router = express.Router();

const controller: ProductsController = new ProductsController();

router.get('/products', controller.getProducts);
router.post('/add-product', controller.addProduct);
router.post('/delete-product', controller.deleteProduct);
router.get('/products/:productId', controller.getProductById);

export = router;
