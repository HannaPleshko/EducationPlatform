import { Database } from '..';
import { IUser, TabPreview } from '../Interfaces';
import { HttpException } from '@exceptions/HttpException';
import { ExceptionType } from '@exceptions/exceptions.type';
import { DatabaseError } from 'pg';

export class UserDB extends Database {
  async create(data: IUser): Promise<void> {
    try {
      await this.pool.query('BEGIN');

      const { name, surname, email, pwd, role } = data;

      const query = {
        text: 'INSERT INTO users (name, surname, email, pwd, role) VALUES ($1, $2, $3, $4, $5)',
        values: [name, surname, email, pwd, role],
      };

      await this.pool.query(query);
      await this.pool.query('COMMIT');
    } catch (err) {
      await this.pool.query('ROLLBACK');

      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_USERS_CREATE_NOT_CREATED);
    }
  }

  async getAll(): Promise<TabPreview> {
    try {
      const query = { text: 'SELECT * FROM users' };

      const { rows, fields, rowCount } = await this.pool.query(query);
      if (!rows.length) throw new HttpException(404, ExceptionType.DB_USERS_NOT_FOUND);

      return {
        fields: fields.map(field => field.name),
        rows,
        rowCount,
      };
    } catch (err) {
      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_USERS_GET_ALL_NOT_GOT);
    }
  }

  async getById(user_id: string): Promise<IUser> {
    try {
      const query = {
        text: 'SELECT * FROM users WHERE user_id = $1',
        values: [user_id],
      };

      const {
        rows: [foundUser],
      } = await this.pool.query(query);

      if (!foundUser) throw new HttpException(404, ExceptionType.DB_USERS_NOT_FOUND);
      return foundUser;
    } catch (err) {
      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_USERS_GET_BY_ID_NOT_GOT);
    }
  }

  async getByEmail(email: string): Promise<IUser> {
    try {
      const query = {
        text: 'SELECT * FROM users WHERE email = $1',
        values: [email],
      };

      const {
        rows: [foundUser],
      } = await this.pool.query(query);

      return foundUser;
    } catch (err) {
      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_USER_GET_BY_EMAIL_NOT_GOT);
    }
  }

  async deleteById(user_id: string): Promise<void> {
    try {
      await this.pool.query('BEGIN');
      const query = {
        text: 'DELETE FROM users WHERE user_id = $1 RETURNING *',
        values: [user_id],
      };

      const {
        rows: [deletedCourse],
      } = await this.pool.query(query);
      if (!deletedCourse) throw new HttpException(404, ExceptionType.DB_USERS_NOT_FOUND);

      await this.pool.query('COMMIT');
    } catch (err) {
      await this.pool.query('ROLLBACK');

      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_USERS_DELETE_NOT_DELETED);
    }
  }

  async updateById(user_id: string, data: IUser): Promise<void> {
    try {
      await this.pool.query('BEGIN');

      const { name, surname, email, pwd, role } = data;

      const query = {
        text: `UPDATE users SET
        name = COALESCE($1, name),
        surname = COALESCE($2, surname),
        email = COALESCE($3, email),
        role = COALESCE($4, role),
        pwd = COALESCE($5, pwd)
        WHERE user_id = $6 RETURNING *`,
        values: [name, surname, email, role, pwd, user_id],
      };

      const {
        rows: [updatedCourse],
      } = await this.pool.query(query);
      if (!updatedCourse) throw new HttpException(404, ExceptionType.DB_USERS_NOT_FOUND);

      await this.pool.query('COMMIT');
    } catch (err) {
      await this.pool.query('ROLLBACK');

      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_USERS_UPDATE_NOT_UPDETED);
    }
  }
}
