import { ICourse, IUser, ILesson, TabPreview } from '@database/Interfaces';
import { Response } from 'express';
import { SuccessfullyType } from '@exceptions/exceptions.type';

type message = IUser | IUser[] | ICourse | ICourse[] | ILesson[] | TabPreview | (typeof SuccessfullyType)[keyof typeof SuccessfullyType];

const buildResponse = (res: Response, status: number, message: message) => {
  res.status(status);
  res.send(message);
};

export { buildResponse };
