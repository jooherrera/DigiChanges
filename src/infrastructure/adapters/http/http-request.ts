export interface HTTPRequest {
  get<T>(url: string): Promise<T>
}
