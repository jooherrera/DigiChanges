import { HTTPRequest } from './http-request'

export abstract class HTTPBase implements HTTPRequest {
  abstract get(url: string): Promise<any>
}
