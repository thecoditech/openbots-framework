import * as _ from 'lodash';

import Connector from './Connector';
import Localizer from './Localizer';
import Logger from './Logger';
import Storage from './Storage';

export interface IOptions {
  defaultLocale: string;
}

export interface IBot {
  connect(connectors: Connector | Connector[]): void;
}

/**
 * Bot implementation.
 *
 * @class Bot
 */
class Bot implements IBot {
  private options: IOptions = {
    defaultLocale: 'en',
  };

  private localizer = Localizer;
  private logger = Logger;
  private storage = Storage;

  public connectors: Connector[];

  public connect(connectors: Connector | Connector[]) {

  }
}

export default Bot;
