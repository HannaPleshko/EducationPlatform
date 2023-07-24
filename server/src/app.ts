import express, { Request, Response, NextFunction } from 'express';
import user from './controller/user.controller';
import course from './controller/course.controller';
import api from './controller/api.controller';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/user', user);
app.use('/course', course);
app.use('/api', api);

app.use(function (error, req: Request, res: Response, next: NextFunction) {
  res.status(500).send(error.message);
});

export default app;
