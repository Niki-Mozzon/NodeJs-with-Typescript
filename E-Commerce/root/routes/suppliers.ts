import express from 'express';
import supplierController from '../controllers/supplierController';

const router = express.Router();

router.get('/suppliers', supplierController.getSuppliers);
router.post('/add-supplier', supplierController.addSupplier);

export = router;
