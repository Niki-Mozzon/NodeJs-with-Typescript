import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import { PageModel } from '../models/pageModel';
import { User } from '../models/user';
import dir from '../utils/path';
const usersData = dir + '/data/users.txt';

export class UserController {
  getUsers = (req: Request, res: Response, next: NextFunction) => {
    const users: User[] = [];
    if (fs.existsSync(usersData)) {
      const data = Array.from(
        fs.readFileSync(dir + '/data/users.txt', 'utf-8').split('\n')
      );
      data.pop();
      data.forEach((user) => {
        users.push(new User(user, undefined));
      });
    }
    res.render('main', {
      model: new PageModel('Users', 'users').setModel(users),
    });
  };

  addUser = (req: Request, res: Response, next: NextFunction) => {
    const userName = req.body.userName + '\n';
    if (fs.existsSync(usersData)) {
      fs.appendFileSync(usersData, userName);
    } else {
      fs.writeFileSync(usersData, userName);
    }
    res.redirect('/users');
  };
}
