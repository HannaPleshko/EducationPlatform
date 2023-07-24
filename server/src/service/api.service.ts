import bcrypt from 'bcrypt';
import { registrationUserDB, getUserByEmailDB } from '../repository/api.repository';
import { iUser } from '../interfaces/interfaces';

async function registrationUser(user: iUser): Promise<void> {
  const foundUser = await getUserByEmailDB(user.email);
  if (foundUser?.id) throw new Error('there is already a user with this email.');

  const createdUser = await registrationUserDB({ ...user, pwd: await bcrypt.hash(user.pwd, 10) });
  if (!createdUser.length) throw new Error('User does not create')
}

async function authorizationUser(user: iUser): Promise<iUser> {
  const foundUser = await getUserByEmailDB(user.email);
  if (!foundUser?.id) throw new Error('user with this email does not exist.');
  if (!(await bcrypt.compare(user.pwd, foundUser.pwd))) throw new Error('wrong password');
  return foundUser
}

export { registrationUser, authorizationUser };
