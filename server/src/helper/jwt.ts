import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { IUser } from '@database/Interfaces';

function createToken(user: IUser) {
  const { user_id, name, surname, email, role } = user;
  const jwtSecret: string = crypto.randomBytes(32).toString('hex');

  // const token = jwt.sign({ user_id, name, surname, email }, jwtSecret, { expiresIn: '1h' });
  const token = jwt.sign({ user_id, name, surname, email, role }, jwtSecret);
  return { token };
}

export { createToken };
