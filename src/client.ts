export type TOptions = {
  headers?: object
}

export interface IReturn<T> {
  toBuffer(): Buffer
  toString(): string
  toJson(): T
}

export interface IClient {
  invoke<TEvent = object, TResult = void>(
    srvName:string, funcName: string, event?: TEvent, options?: TOptions
  ): Promise<IReturn<TResult>>
}
