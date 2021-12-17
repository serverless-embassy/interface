export class ReturnedError extends Error {
  wrapped: unknown
  constructor(wrapped: unknown) {
    super()
    this.wrapped = wrapped
  }
}
