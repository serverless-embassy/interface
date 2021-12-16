import { ISource } from "./source";

export interface IHttpResponse extends ISource {
  raw: unknown
  setStatusCode(code: number): IHttpResponse
  setHeader(key: string, value: string): IHttpResponse
  delHeader(key: string): IHttpResponse
  send(body: Buffer | string): IHttpResponse
}
