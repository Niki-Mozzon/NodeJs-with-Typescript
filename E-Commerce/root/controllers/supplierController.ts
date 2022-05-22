import { Supplier } from '../models/supplier';
import fs from 'fs';
import dir from '../utils/path';
import { Request, Response, NextFunction } from 'express';
import { PageModel } from '../models/pageModel';
import path from 'path';
import repository from '../utils/repository';

class SupplierController {
  private suppliers: Supplier[] = [];

  private suppliersFile = path.join(dir, 'data', 'suppliers.json');

  getSuppliers = (req: Request, res: Response, next: NextFunction) => {
    try {
      this.suppliers = repository.fetchFile<Supplier[]>(this.suppliersFile);
    } catch (err) {
      console.error(`Error handled: ${err}`);
    } finally {
      res.render('main', {
        model: new PageModel('Suppliers', 'suppliers').setModel(this.suppliers),
      });
    }
  };

  addSupplier = (req: Request, res: Response) => {
    const supplier: Supplier = new Supplier(req.body.supplierName).setId(
      this.suppliers.length
    );
    try {
      this.suppliers = repository.fetchFile<Supplier[]>(this.suppliersFile);
    } catch (err) {
      console.error(`Error handled: ${err}`);
    } finally {
      this.suppliers.push(supplier);
      const data = JSON.stringify(this.suppliers);
      fs.writeFileSync(this.suppliersFile, data, 'utf-8');
      res.redirect('/suppliers');
    }
  };
}
export = new SupplierController();

/* getSuppliers = (req: Request, res: Response, next: NextFunction) => {
    let suppliersString: string = ''; // here is the issue
    const stream = fs.createReadStream(this.suppliersFile, 'utf-8');

    stream.on('data', (chunk) => {
      suppliersString += chunk;
    });
    stream.on('end', () => {
      this.suppliers = JSON.parse(suppliersString);
      res.render('main', {
        model: new PageModel('Suppliers', 'suppliers').setModel(this.suppliers),
      });
    });
    stream.on('error', (err) => {
      console.error(err);

      res.render('main', {
        model: new PageModel('Suppliers', 'suppliers').setModel(this.suppliers),
      });
    });
    console.log(this.suppliers + ' 33');
  };

  addSupplier = (req: Request, res: Response) => {
    console.log(this.suppliers + ' 37');
    const supplier: Supplier = new Supplier(req.body.supplierName).setId(
      this.suppliers.length
    );
    this.suppliers.push(supplier);
    console.log(this.suppliers + ' 42');

    const stream = fs.createWriteStream(this.suppliersFile, 'utf-8');
    stream.write(JSON.stringify(this.suppliers));
    res.redirect('/suppliers');
  };
}
 */
