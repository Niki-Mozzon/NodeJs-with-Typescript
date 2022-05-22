import express, { Request, Response, NextFunction } from 'express';
import { PageModel } from '../models/pageModel';

const router = express.Router();

router.use('/error', (req: Request, res: Response) =>
  res.render('main', { model: new PageModel('Ooops!', 'error') })
);

router.use((req: Request, res: Response) =>
  res.status(404).render('main', { model: new PageModel('Not found', '404') })
);

export = router;
