export class ExternalError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ExternalError'
  }
}
