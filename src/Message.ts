export interface IMessage { };
export interface IDialog {
  identifier: string;
  waterfall: Array<Function>;
};

class Dialog implements IDialog {
  constructor(public identifier: string, public waterfall: Array<Function>) { };
}

class Message implements IMessage { }

export default Message;
