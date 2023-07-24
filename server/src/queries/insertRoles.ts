import pool from '../DB';

export const insertRoles = async (): Promise<void> => {
  const client = await pool.connect();
  await client.query(
    `
    INSERT INTO roles(role) VALUES ('student'), ('teacher'), ('admin'); 
    `,
  );
};
