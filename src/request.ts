import { ISource } from "./source";

export interface IHttpRequest extends ISource {
  raw: unknown
  getBodyByBuffer(): Promise<Buffer>
  getBodyByString(): Promise<string>
  getBodyByJson<T=unknown>(): Promise<T>
  getBodyByForm<T=unknown>(): Promise<T>
}
