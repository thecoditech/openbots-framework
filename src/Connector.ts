import { Router } from 'express';

export interface IConnector {

}

export interface IConnectorOptions {
  name: string;
  path: string;
}

class Connector implements IConnector {
  private router: Router;

  constructor(options: IConnectorOptions) {

  }

  private createRouter(path: string) {

  }
}

export default Connector;
