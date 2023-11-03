import { HTTPBase } from './http-base'

export class FetchRequest extends HTTPBase {
  async get(url: string): Promise<any> {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Request failed')
    }
    return response.json()
  }
}
