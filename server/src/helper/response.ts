import { Response } from 'express';

function buildResponse(res: Response, status: number, message: any) {
  res.status(status);
  res.send(message);
}

export { buildResponse };
