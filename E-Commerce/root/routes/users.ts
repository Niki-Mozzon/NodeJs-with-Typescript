import express, { NextFunction, Request, Response } from 'express';
import fs from 'fs';
import { UserController } from '../controllers/usersController';
import { PageModel } from '../models/PageModel';
import { User } from '../models/User';

const router = express.Router();

const controller: UserController = new UserController();

router.get('/users', controller.getUsers);

router.post('/add-user', controller.addUser);

export = router;
