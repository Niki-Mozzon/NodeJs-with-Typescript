import { Request, Response, NextFunction } from 'express';
import { PageModel } from '../models/pageModel';
import { Product } from '../models/product';
import fetch from 'node-fetch';

export class ProductsController {
  getProducts = async (req: Request, res: Response, next: NextFunction) => {
    const response = await fetch('http://localhost:4000/products')
      .then((json) => json.json())
      .then((products) => {
        res.render('main', {
          model: new PageModel('Products', 'products').setModel(products),
        });
      });
  };

  addProduct = (req: Request, res: Response) => {
    const product: Product = new Product(req.body.productName);
    fetch('http://localhost:4000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    }).then((data) => {
      res.redirect('/products');
    });
  };

  deleteProduct = (req: Request, res: Response) => {
    const id = req.body.productId;
    fetch('http://localhost:4000/products/' + id, {
      method: 'DELETE',
    }).then((data) => {
      res.redirect('/products');
    });
  };

  getProductById = (req: Request, res: Response) => {
    const id = req.params.productId;
    fetch('http://localhost:4000/products/' + id, {
      method: 'GET',
    })
      .then((data) => data.json())
      .then((json) => {
        const product: Product = json;
        res.render('main', {
          model: new PageModel(product.name, 'product').setModel(product),
        });
      });
  };
}
