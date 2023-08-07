import { defaultClient as client, defaultPool as pool } from '@database/connection';
import { UserDB } from '@database/Classes/UserDB';
import { IUser, TabPreview } from '@database/Interfaces';
import bcrypt from 'bcrypt';
import { HttpException } from '@exceptions/HttpException';
import { ExceptionType } from '@exceptions/exceptions.type';

export class UserService {
  private userDB = new UserDB(client, pool);

  async getUsers(): Promise<TabPreview> {
    const foundUsers = await this.userDB.getAll();
    return foundUsers;
  }

  async getUserById(user_id: string): Promise<IUser> {
    const foundUser = await this.userDB.getById(user_id);
    return foundUser;
  }

  async createUser(user: IUser): Promise<void> {
    const foundUser = await this.userDB.getByEmail(user.email);
    if (foundUser) throw new HttpException(400, ExceptionType.DB_USER_GET_BY_EMAIL_ALREADY_EXIST);

    const userHashed: IUser = await this.generatePasswordHash(user);

    await this.userDB.create(userHashed);
  }

  async updateUser(user_id: string, user: IUser): Promise<void> {
    const foundUser = await this.userDB.getById(user_id);
    if (user?.prevPwd && !(await bcrypt.compare(user.prevPwd, foundUser.pwd))) throw new HttpException(400, ExceptionType.DB_USER_INVALID_PWD);

    const userWthHash: IUser = await this.generatePasswordHash(user);

    await this.userDB.updateById(user_id, userWthHash);
  }

  async authenticateUser(user: IUser): Promise<IUser> {
    const foundUser = await this.userDB.getByEmail(user.email);
    if (!foundUser) throw new HttpException(400, ExceptionType.DB_USER_GET_BY_EMAIL_NOT_FOUND);
    if (!(await bcrypt.compare(user.pwd, foundUser.pwd))) throw new HttpException(400, ExceptionType.DB_USER_INVALID_PWD);
    return foundUser;
  }

  async deleteUser(user_id: string): Promise<void> {
    await this.userDB.deleteById(user_id);
  }

  async generatePasswordHash(user: IUser): Promise<IUser> {
    const hashPwd = await bcrypt.hashSync(user.pwd, await bcrypt.genSaltSync(10));
    return { ...user, pwd: hashPwd };
  }
}
