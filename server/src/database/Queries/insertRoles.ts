import { Pool } from 'pg';
import { defaultPool } from '../connection';
import { ExceptionType } from '@exceptions/exceptions.type';
import { HttpException } from '@exceptions/HttpException';

export const insertRoles = async (pool: Pool = defaultPool): Promise<void> => {
  try {
    const client = await pool.connect();
    await client.query(
      `
    INSERT INTO roles(role) VALUES ('student'), ('teacher'), ('admin'); 
    `,
    );
  } catch (error) {
    if (error instanceof HttpException) throw error;
    throw new HttpException(500, ExceptionType.DB_ROLE_TABLE_NOT_INITIALIZED);
  }
};
