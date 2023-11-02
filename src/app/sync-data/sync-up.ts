export interface SyncUp<T> {
  run(): Promise<T[] | null | undefined>
  getTaskName(): string
}
