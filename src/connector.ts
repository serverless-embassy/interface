import { IContext } from './context';
import { IHttpRequest } from './request';
import { IHttpResponse } from './response';

export interface IConnector<TEventHandler = unknown, IHttpHandler = unknown>
  extends IEventConnector<TEventHandler>,
    IHttpConnector<IHttpHandler> {}

export type TDefaultResult = void | string | Buffer | object;

export interface IEventConnector<THandler = unknown> {
  makeBufferHandler: <TResult = TDefaultResult>(
    inner: (event: Buffer, context: IContext) => Promise<TResult>,
  ) => THandler;
  makeJsonHandler: <TEvent extends object = object, TResult = TDefaultResult>(
    inner: (event: TEvent, context: IContext) => Promise<TResult>,
  ) => THandler;
}

export interface IHttpConnector<THandler = unknown> {
  makeHttpHandler: <TResult = TDefaultResult>(
    inner: (request: IHttpRequest, response: IHttpResponse, context: IContext) => Promise<TResult>,
  ) => THandler;
  makeHttpJsonHandler: <TEvent extends object = object, TResult = TDefaultResult>(
    inner: (event: TEvent, context: IContext) => Promise<TResult>,
  ) => THandler;
}
