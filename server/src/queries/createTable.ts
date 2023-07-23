import pool from '../DB';

export const createTables = async (): Promise<void> => {
  const client = await pool.connect();
  await client.query(
    `
        CREATE TABLE IF NOT EXISTS users (
          id                    UUID DEFAULT MD5(RANDOM()::TEXT || CLOCK_TIMESTAMP()::TEXT)::UUID,
          name                  VARCHAR(20) NOT NULL, 
          surname               VARCHAR(30) NOT NULL, 
          email                 VARCHAR(40) NOT NULL UNIQUE, 
          pwd                   VARCHAR(100) NOT NULL,
        
          PRIMARY KEY(id)
        );
        
        CREATE TABLE IF NOT EXISTS courses (
          id                    UUID  DEFAULT MD5(RANDOM()::TEXT || CLOCK_TIMESTAMP()::TEXT)::UUID,
          title                 VARCHAR(30) NOT NULL, 
          
          PRIMARY KEY(id)
        );
    `,
  );
};
