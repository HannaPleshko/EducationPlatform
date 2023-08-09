import { ICourse, IUser, TabPreview } from '@database/Interfaces';
import { Response } from 'express';
import { SuccessfullyType } from '@exceptions/exceptions.type';

type message = IUser | IUser[] | ICourse | ICourse[] | TabPreview | (typeof SuccessfullyType)[keyof typeof SuccessfullyType];

const buildResponse = (res: Response, status: number, message: message) => {
  res.status(status);
  res.send(message);
};

export { buildResponse };
