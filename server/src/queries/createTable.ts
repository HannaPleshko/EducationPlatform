import pool from '../DB';

export const createTables = async (): Promise<void> => {
  const client = await pool.connect();
  await client.query(
    `
        CREATE TABLE IF NOT EXISTS ROLES (
          id                    SMALLSERIAL PRIMARY KEY,
          role                  VARCHAR(15) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS USERS (
          id                    UUID DEFAULT MD5(RANDOM()::TEXT || CLOCK_TIMESTAMP()::TEXT)::UUID PRIMARY KEY,
          name                  VARCHAR(20) NOT NULL, 
          surname               VARCHAR(30) NOT NULL, 
          email                 VARCHAR(40) NOT NULL UNIQUE, 
          pwd                   VARCHAR(100) NOT NULL,
          role                  SMALLINT,
          
          FOREIGN KEY (role) REFERENCES roles(id) ON DELETE CASCADE 
        );
        
        CREATE TABLE IF NOT EXISTS COURSES (
          id                    UUID  DEFAULT MD5(RANDOM()::TEXT || CLOCK_TIMESTAMP()::TEXT)::UUID PRIMARY KEY,
          title                 VARCHAR(30) NOT NULL
        );
    `,
  );
};
