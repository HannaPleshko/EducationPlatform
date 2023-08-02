import { Database } from '..';
import { ICourse } from '../Interfaces';
import { HttpException } from '@exceptions/HttpException';
import { ExceptionType } from '@exceptions/exceptions.type';
import { DatabaseError } from 'pg';

export class CourseDB extends Database {
  async create(data: ICourse): Promise<ICourse> {
    try {
      await this.pool.query('BEGIN');

      const { title } = data;

      const query = {
        text: 'INSERT INTO courses (title) VALUES ($1) RETURNING *',
        values: [title],
      };

      const {
        rows: [createdCourse],
      } = await this.pool.query(query);
      await this.pool.query('COMMIT');
      return createdCourse;
    } catch (err) {
      await this.pool.query('ROLLBACK');

      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_COURSE_CREATE_NOT_CREATED);
    }
  }

  async getAll(): Promise<ICourse[]> {
    try {
      const query = { text: 'SELECT * FROM courses' };

      const { rows: foundCourses } = await this.pool.query(query);
      if (!foundCourses.length) throw new HttpException(404, ExceptionType.DB_COURSE_NOT_FOUND);

      return foundCourses;
    } catch (err) {
      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_COURSE_GET_ALL_NOT_GOT);
    }
  }

  async getById(course_id: string): Promise<ICourse> {
    try {
      const query = {
        text: 'SELECT * FROM courses WHERE course_id = $1',
        values: [course_id],
      };

      const {
        rows: [foundCourse],
      } = await this.pool.query(query);
      if (!foundCourse) throw new HttpException(404, ExceptionType.DB_COURSE_NOT_FOUND);

      return foundCourse;
    } catch (err) {
      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_COURSE_GET_BY_ID_NOT_GOT);
    }
  }

  async deleteById(course_id: string): Promise<ICourse> {
    try {
      await this.pool.query('BEGIN');
      const query = {
        text: 'DELETE FROM courses WHERE course_id = $1 RETURNING *',
        values: [course_id],
      };

      const {
        rows: [deletedCourse],
      } = await this.pool.query(query);
      if (!deletedCourse) throw new HttpException(404, ExceptionType.DB_COURSE_NOT_FOUND);

      await this.pool.query('COMMIT');
      return deletedCourse;
    } catch (err) {
      await this.pool.query('ROLLBACK');

      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_COURSE_DELETE_NOT_DELETED);
    }
  }

  async updateById(course_id: string, data: ICourse): Promise<ICourse> {
    try {
      await this.pool.query('BEGIN');

      const { title } = data;

      const query = {
        text: `UPDATE courses SET title = COALESCE($1, title) WHERE course_id = $2 RETURNING *`,
        values: [title, course_id],
      };

      const {
        rows: [updatedCourse],
      } = await this.pool.query(query);
      if (!updatedCourse) throw new HttpException(404, ExceptionType.DB_COURSE_NOT_FOUND);

      await this.pool.query('COMMIT');
      return updatedCourse;
    } catch (err) {
      await this.pool.query('ROLLBACK');

      const error: DatabaseError = err;
      console.error(`Message: ${error.message}. Detail: ${error.detail}`);

      throw new HttpException(500, ExceptionType.DB_COURSE_UPDATE_NOT_UPDETED);
    }
  }
}
