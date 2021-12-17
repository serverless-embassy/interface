import { ISource } from './source';

export interface IHttpRequest extends ISource {
  raw: unknown;
  getUrl(): string;
  getPath(): string;
  getMethod(): string;
  getQueries(): object;
  getHeaders(): object;
  getClientIp(): object;
  getBodyByBuffer(): Promise<Buffer>;
  getBodyByString(): Promise<string>;
  getBodyByJson<T = unknown>(): Promise<T>;
  getBodyByForm<T = unknown>(): Promise<T>;
}
