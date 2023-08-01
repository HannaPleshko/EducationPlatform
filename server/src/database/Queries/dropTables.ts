import { Pool } from 'pg';
import { defaultPool } from '../connection';

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
  } catch (error) {}
};
