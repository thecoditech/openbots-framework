import { get, set, unset } from 'lodash';

export interface IConversationContext {
  id: string;
  persistent: boolean;
}

export interface IUserContext {
  id: string;
  persistent: boolean;
}

export interface IStorage {
  context: IConversationContext | IUserContext;

  get(id: string): any;
  set(id: string, data: any): void;
  remove(id: string): void;
}

class MemoryStorage implements IStorage {
  private store = {};

  constructor(public context: IConversationContext | IUserContext) {}

  get(id: string) {
    return get(this.store, id);
  }

  set(id: string, data: any) {
    set(this.store, id, data);
  }

  remove(id: string) {
    unset(this.store, id);
  }
}

export default MemoryStorage;
