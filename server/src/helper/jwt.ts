import jwt from 'jsonwebtoken';
import crypto from 'crypto';
// import jwt_decode from 'jwt-decode';

function createToken(user) {
    const { id, name, surname, email } = user
    const jwtSecret: string = crypto.randomBytes(32).toString('hex');

    return {
        token: jwt.sign({ id, name, surname, email }, jwtSecret),
    };
};

// const decodeToken = (token: string): iDataStoredInToken => {
//     return jwt_decode(token);
// };


export { createToken };