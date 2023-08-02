import express from 'express';
import { PORT } from '@config';
import { IRoutes } from '@interfaces';
import { defaultClient as client, ConnectionDB, defaultPool as pool } from '@database/connection';
import { errorMiddleware } from '@middlewares/error.middleware';
import cors from 'cors';
import cookieParser from 'cookie-parser';

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;
  public database: ConnectionDB;

  constructor(routes: IRoutes[]) {
    this.app = express();
    this.port = PORT;
    this.database = new ConnectionDB(client, pool);

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandling();
    this.database.initializeDB();
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.info(`╭───────────────────────────────────────────────────╮`);
      console.info(`│                                                   │`);
      console.info(`│            App listening at port ${this.port}!            │`);
      console.info(`│                                                   │`);
      console.info(`╰───────────────────────────────────────────────────╯`);
    });
  }

  public getServer(): express.Application {
    return this.app;
  }

  private initializeMiddlewares(): void {
    this.app.use(
      cors({
        origin: 'http://localhost:3000',
        credentials: true,
      }),
    );
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private initializeRoutes(routes: IRoutes[]): void {
    routes.forEach(route => {
      this.app.use('/api/v1/', route.router);
    });
  }

  private initializeErrorHandling(): void {
    this.app.use(errorMiddleware);
  }
}

export default App;
