export interface SyncUp<T> {
  startSync(elem: T): Promise<void>
  getTaskName(): string
}
