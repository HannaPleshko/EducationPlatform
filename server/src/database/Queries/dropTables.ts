import { Pool } from 'pg';
import { defaultPool } from '../connection';
import { ExceptionType } from '@exceptions/exceptions.type';
import { HttpException } from '@exceptions/HttpException';

export const dropTables = async (pool: Pool = defaultPool): Promise<void> => {
  try {
    const client = await pool.connect();
    await client.query(
      `
    DROP TABLE IF EXISTS ROLES CASCADE;
          
    DROP TABLE IF EXISTS USERS CASCADE; 
     
    DROP TABLE IF EXISTS COURSES CASCADE;
    `,
    );
  } catch (error) {
    if (error instanceof HttpException) throw error;
    throw new HttpException(500, ExceptionType.DB_TABLES_NOT_DELETED);
  }
};
