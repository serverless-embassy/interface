import { IConnector } from './connector';

export type TOptions = {
  qualifier?: string;
  headers?: object;
};

export interface IReturn<T> {
  getData(): T;
  toBuffer(): Buffer;
  toString(): string;
  toJson(): object;
}

export interface IClient {
  connector: IConnector;

  invoke<TEvent = string | object, TResult = void>(
    srvName: string,
    funcName: string,
    event?: TEvent,
    options?: TOptions,
  ): Promise<IReturn<TResult>>;
}
