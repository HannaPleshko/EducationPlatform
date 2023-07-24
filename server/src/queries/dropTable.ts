import pool from '../DB';

export const dropTables = async (): Promise<void> => {
  const client = await pool.connect();
  await client.query(
    `
    DROP TABLE IF EXISTS ROLES CASCADE;
          
    DROP TABLE IF EXISTS USERS CASCADE; 
     
    DROP TABLE IF EXISTS COURSES CASCADE;
    `,
  );
};
