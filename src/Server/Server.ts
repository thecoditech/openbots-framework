import * as express from 'express';
import * as bodyParser from 'body-parser';

export interface IServer {
  app: express.Application;
}

class Server implements IServer {
  public app: express.Application;

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    this.app = express();

    this.config();
    this.routes();
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   * @return void
   */
  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
      err.status = 404;
      next(err);
    });
  }

  /**
   * Create router.
   *
   * @class Server
   * @method routes
   * @return void
   */
  private routes(): void {
    const router = express.Router();

    this.app.use(router);
  }
}

export default Server;
