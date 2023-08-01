import { Client, Pool } from 'pg';
import { createTables } from './Queries/createTables';
import { insertRoles } from './Queries/insertRoles';
import { dropTables } from './Queries/dropTables';

const credentials = {
  user: process.env.USER_DB,
  host: process.env.HOST_DB,
  database: process.env.DATABASE,
  password: process.env.PASSWORD_DB,
  port: process.env.PORT_DB,
};

export const defaultClient = new Client(credentials);

export const defaultPool = new Pool(credentials);

export class ConnectionDB {
  public client: Client;
  public pool: Pool;

  constructor(client: Client = defaultClient, pool: Pool = defaultPool) {
    this.client = client;
    this.pool = pool;
  }

  public async initializeDB(): Promise<void> {
    try {
      await createTables(this.pool);
      // await insertRoles(this.pool);
      // await dropTables(this.pool);

      console.info(`Database initialization: success`);
    } catch (error) {
      console.error(`Connection. initializeDB. ${error}`);
    }
  }
}
