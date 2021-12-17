export interface ISource {
  /** aliyun / tencent */ 
  source: string
  getSource(): string
}