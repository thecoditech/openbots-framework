export interface ISession {
  locale: string;
}

class Session implements ISession {
  public locale: string;

  constructor() {}
}

export default Session;
