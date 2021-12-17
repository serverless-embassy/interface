import { ISource } from './source';
import { ILogger } from './logger';

export interface IContext extends ISource {
  raw: unknown;
  getRequestId(): string;
  getLogger(): ILogger;
}
