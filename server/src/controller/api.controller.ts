import express, { Request, Response } from 'express';
import { registrationUser, authorizationUser } from '../service/api.service';
import { buildResponse } from '../helper/buildResponse';
import { handleError } from '../helper/handleError';
import { createToken } from '../helper/jwt';

const route = express.Router();

route.post('/reg', async function (req: Request, res: Response) {
  try {
    const user = req.body
    await registrationUser(user);
    buildResponse(res, 200, { mess: 'SUCCESS' });
  } catch (error: any) {
    handleError(res, 404, error.message);
  }
});

route.post('/auth', async function (req: Request, res: Response) {
  try {
    const user = req.body
    const data = await authorizationUser(user);
    buildResponse(res, 200, createToken(data))
  } catch (error: any) {
    handleError(res, 404, error.message);
  }
});

export default route;
