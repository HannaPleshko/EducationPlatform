import { Pool } from 'pg';
import { defaultPool } from '../connection';
import { HttpException } from '@exceptions/HttpException';
import { ExceptionType } from '@exceptions/exceptions.type';

export const createTables = async (pool: Pool = defaultPool): Promise<void> => {
  try {
    const client = await pool.connect();
    await client.query(
      `
        CREATE TABLE IF NOT EXISTS ROLES (
            role_id               SMALLSERIAL PRIMARY KEY,
            role                  VARCHAR(15) NOT NULL
          );
  
          CREATE TABLE IF NOT EXISTS USERS (
            user_id               UUID DEFAULT MD5(RANDOM()::TEXT || CLOCK_TIMESTAMP()::TEXT)::UUID PRIMARY KEY,
            name                  VARCHAR(20) NOT NULL, 
            surname               VARCHAR(30) NOT NULL, 
            email                 VARCHAR(40) NOT NULL UNIQUE, 
            pwd                   VARCHAR(100) NOT NULL,
            role                  SMALLINT,
            
            FOREIGN KEY (role) REFERENCES roles(role_id) ON DELETE CASCADE 
          );
          
          CREATE TABLE IF NOT EXISTS COURSES (
            course_id             UUID  DEFAULT MD5(RANDOM()::TEXT || CLOCK_TIMESTAMP()::TEXT)::UUID PRIMARY KEY,
            title                 VARCHAR(30) NOT NULL,
            description           VARCHAR(400) NOT NULL
          );
`,
    );
  } catch (error) {
    if (error instanceof HttpException) throw error;
    throw new HttpException(500, ExceptionType.DB_INITIALIZE_TABLES__NOT_INITIALIZED);
  }
};
