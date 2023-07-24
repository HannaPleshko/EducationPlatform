import { Response } from 'express';
import { iCourse, iUser } from '../interfaces/interfaces';

function buildResponse(res: Response, status: number, message: string | iCourse[] | iUser[] | any) {
  res.status(status);
  res.send(message);
}

export { buildResponse };
