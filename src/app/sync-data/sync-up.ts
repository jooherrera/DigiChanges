export interface SyncUp<T> {
  run(): Promise<T[]>
  getTaskName(): string
}
