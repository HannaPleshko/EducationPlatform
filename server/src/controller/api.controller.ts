import express, { Request, Response } from 'express';
import { registrationUser, authorizationUser } from '../service/api.service';
import { buildResponse } from '../helper/buildResponse';
import { handleError } from '../helper/handleError';

const route = express.Router();

route.post('/reg', async function (req: Request, res: Response) {
  try {
    const { name, surname, email, pwd, role } = req.body;
    await registrationUser(name, surname, email, pwd, role);
    buildResponse(res, 200, 'success');
  } catch (error: any) {
    handleError(res, 404, error);
  }
});

route.post('/auth', async function (req: Request, res: Response) {
  try {
    const { email, pwd } = req.body;
    await authorizationUser(email, pwd);
    buildResponse(res, 200, 'success');
  } catch (error: any) {
    handleError(res, 404, error);
  }
});

export default route;
