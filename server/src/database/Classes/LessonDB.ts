import { Database } from '..';
import { ILesson, TabPreview } from '../Interfaces';
import { HttpException } from '@exceptions/HttpException';
import { ExceptionType } from '@exceptions/exceptions.type';
import { DatabaseError } from 'pg';

export class LessonDB extends Database {
  async create(data: ILesson): Promise<ILesson> {
    try {
      await this.pool.query('BEGIN');

      const { title, description, course_id } = data;

      const query = {
        text: 'INSERT INTO lessons (title, description, course_id) VALUES ($1, $2, $3) RETURNING *',
        values: [title, description, course_id],
      };

      const { rows } = await this.pool.query(query);
      await this.pool.query('COMMIT');

      return rows;
    } catch (err) {
      await this.pool.query('ROLLBACK');

      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_COURSE_CREATE_NOT_CREATED);
    }
  }

  async getAll(): Promise<TabPreview> {
    try {
      const query = { text: 'SELECT * FROM lessons' };

      const { rows, fields, rowCount } = await this.pool.query(query);
      console.log(fields);

      return {
        fields: fields.map(field => field.name),
        rows,
        rowCount,
      };
    } catch (err) {
      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_COURSE_GET_ALL_NOT_GOT);
    }
  }

  async getById(course_id: string): Promise<ILesson> {
    try {
      const query = {
        text: 'SELECT * FROM lessons WHERE course_id = $1',
        values: [course_id],
      };

      const { rows } = await this.pool.query(query);
      if (!rows.length) throw new HttpException(404, ExceptionType.DB_COURSE_NOT_FOUND);

      return rows;
    } catch (err) {
      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_COURSE_GET_BY_ID_NOT_GOT);
    }
  }

  async deleteById(lesson_id: string): Promise<ILesson> {
    try {
      await this.pool.query('BEGIN');
      const query = {
        text: 'DELETE FROM lessons WHERE lesson_id = $1 RETURNING *',
        values: [lesson_id],
      };

      const { rows } = await this.pool.query(query);
      if (!rows) throw new HttpException(404, ExceptionType.DB_COURSE_NOT_FOUND);

      await this.pool.query('COMMIT');
      return rows;
    } catch (err) {
      await this.pool.query('ROLLBACK');

      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_COURSE_DELETE_NOT_DELETED);
    }
  }

  async updateById(lesson_id: string, data: ILesson): Promise<ILesson> {
    try {
      await this.pool.query('BEGIN');

      const { title, description, course_id } = data;

      const query = {
        text: `UPDATE lessons SET title = COALESCE($1, title), description = COALESCE($2, description), course_id = COALESCE($3, course_id) WHERE lesson_id = $4 RETURNING *`,
        values: [title, description, course_id, lesson_id],
      };

      const { rows } = await this.pool.query(query);
      if (!rows) throw new HttpException(404, ExceptionType.DB_COURSE_NOT_FOUND);

      await this.pool.query('COMMIT');
      return rows;
    } catch (err) {
      await this.pool.query('ROLLBACK');

      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_COURSE_UPDATE_NOT_UPDETED);
    }
  }
}
