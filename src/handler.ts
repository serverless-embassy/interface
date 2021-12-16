import { IContext } from "./context"
import { IHttpRequest } from "./request"
import { IHttpResponse } from "./response"

export class ReturnedError extends Error {
  wrapped: unknown
  constructor(wrapped: unknown) {
    super()
    this.wrapped = wrapped
  }
}

export interface IConnector<TEventHandler=unknown, IHttpHandler=unknown> 
  extends IEventConnector<TEventHandler>, IHttpConnector<IHttpHandler>{}

export interface IEventConnector<THandler=unknown> {
  makeHandler: <TEvent=unknown, TResult=void>
    (inner: (event: TEvent, context: IContext) => Promise<TResult>) => THandler;
  makeJsonHandler: <TEvent extends object = object, TResult=void>
    (inner: (event: TEvent, context: IContext) => Promise<TResult>) => THandler;
}

export interface IHttpConnector<THandler=unknown> {
  makeHttpHandler: <TResult=void>
    (
      inner: (request: IHttpRequest, response: IHttpResponse, context: IContext) => Promise<TResult>
    ) 
      => THandler;
  makeHttpJsonHandler: <TEvent extends object = object, TResult=void>
    (inner: (event: TEvent, context: IContext) => Promise<TResult>) => THandler;
}
