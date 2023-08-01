import { Pool } from 'pg';
import { defaultPool } from '../connection';

export const insertRoles = async (pool: Pool = defaultPool): Promise<void> => {
  try {
    const client = await pool.connect();
    await client.query(
      `
    INSERT INTO roles(role) VALUES ('student'), ('teacher'), ('admin'); 
    `,
    );
  } catch (error) {}
};
