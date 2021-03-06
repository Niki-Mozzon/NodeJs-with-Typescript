import bodyParser from 'body-parser';
import express, { Request, Response, NextFunction, Router } from 'express';
import userRoutes from './routes/users';
import adminRoutes from './routes/admin/admin';
import productRoutes from './routes/products';
import errorsRoutes from './routes/errors';
import dir from './utils/path';
import path from 'path';
import { PageModel } from './models/pageModel';
import supplierRoutes from './routes/suppliers';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(dir, 'views'));

app.use(express.static(path.join(dir, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRoutes);
app.use(productRoutes);
app.use(supplierRoutes);
app.use(supplierRoutes);
app.use('/admin', adminRoutes);

app.get('/', (req: Request, res: Response, next) =>
  res.render('main', { model: new PageModel('Home', 'home') })
);

app.use(errorsRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
