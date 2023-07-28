import jwt from 'jsonwebtoken';
import crypto from 'crypto';
// import jwt_decode from 'jwt-decode';

function createToken(user) {
  const { id, name, surname, email, role } = user;
  const jwtSecret: string = crypto.randomBytes(32).toString('hex');

  // const token = jwt.sign({ id, name, surname, email }, jwtSecret, { expiresIn: '1h' });
  const token = jwt.sign({ id, name, surname, email, role }, jwtSecret);
  return { token };
}

// const decodeToken = (token: string): iDataStoredInToken => {
//     return jwt_decode(token);
// };

export { createToken };
