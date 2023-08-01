import { Database } from '..';
import { ICourse } from '../Interfaces';
import { HttpException } from '@exceptions/HttpException';
import { ExceptionType } from '@exceptions/exceptions.type';
import { DatabaseError } from 'pg';

export class CourseDB extends Database {
  async create(data: ICourse): Promise<void> {
    try {
      await this.pool.query('BEGIN');

      const { title } = data;

      const query = {
        text: 'INSERT INTO courses (title) VALUES ($1)',
        values: [title],
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

  async getAll(): Promise<ICourse[]> {
    try {
      const query = { text: 'SELECT * FROM courses' };

      const course: ICourse[] = (await this.pool.query(query)).rows;
      if (!course.length) throw new HttpException(404, ExceptionType.DB_USERS_NOT_FOUND);

      return course;
    } catch (err) {
      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_USERS_GET_ALL_NOT_GOT);
    }
  }

  async getById(course_id: string): Promise<ICourse[]> {
    try {
      const query = {
        text: 'SELECT * FROM courses WHERE course_id = $1',
        values: [course_id],
      };

      const course: ICourse[] = (await this.pool.query(query)).rows;
      if (!course.length) throw new HttpException(404, ExceptionType.DB_USERS_NOT_FOUND);

      return course;
    } catch (err) {
      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_USERS_GET_BY_ID_NOT_GOT);
    }
  }

  async deleteById(course_id: string): Promise<void> {
    try {
      await this.pool.query('BEGIN');
      const query = {
        text: 'DELETE FROM courses WHERE course_id = $1',
        values: [course_id],
      };

      await this.pool.query(query);
      await this.pool.query('COMMIT');
    } catch (err) {
      await this.pool.query('ROLLBACK');

      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_USERS_DELETE_NOT_DELETED);
    }
  }

  async updateById(course_id: string, data: ICourse): Promise<void> {
    try {
      await this.pool.query('BEGIN');

      const { title } = data;

      const query = {
        text: `UPDATE courses SET
                title = COALESCE($1, title)
                WHERE course_id = $2`,
        values: [title, course_id],
      };

      await this.pool.query(query);

      await this.pool.query('COMMIT');
    } catch (err) {
      await this.pool.query('ROLLBACK');

      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_USERS_UPDATE_NOT_UPDETED);
    }
  }
}
