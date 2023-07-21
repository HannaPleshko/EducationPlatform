import bcrypt from "bcrypt";
import {
  registrationUserDB,
  getUserByEmailDB,
} from "../repository/api.repository";
import { iUser } from "../interfaces/interfaces";

async function registrationUser(
  name: string,
  surname: string,
  email: string,
  pwd: string,
  role: number
): Promise<iUser[]> {
  const foundUser = await getUserByEmailDB(email);
  if (foundUser.length)
    throw new Error("there is already a user with this email.");
  const salt = await bcrypt.genSaltSync(10);
  const hashPwd = await bcrypt.hashSync(pwd, salt);
  return await registrationUserDB(name, surname, email, hashPwd, role);
}

async function authorizationUser(email: string, pwd: string): Promise<iUser[]> {
  const foundUser = await getUserByEmailDB(email);
  if (!foundUser.length)
    throw new Error("user with this email does not exist.");
  console.log(foundUser);
  console.log(foundUser[0]);

  if (!(await bcrypt.compare(pwd, foundUser[0].pwd)))
    throw new Error(" wrong password");

  return foundUser;
}

export { registrationUser, authorizationUser };
