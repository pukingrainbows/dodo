export type NotifierState = Record<string, any>

export interface INotifier<T extends Record<string, any>> {
  subscribe(subscriber: (state: T) => void): () => void
  getSnapshot(): T
  notify<K extends keyof T>(property: K, value: T[K]): void
}

export class Notifier<T extends Record<string, any>> implements INotifier<T> {
  private subscribers = new Map<string, (state: T) => void>()
  private snapshot: T

  constructor(initialState: T) {
    this.snapshot = initialState
  }

  subscribe = (subscriber: (state: T) => void): (() => void) => {
    const id = Math.random().toString(36).slice(2)
    this.subscribers.set(id, subscriber)
    return () => this.subscribers.delete(id)
  }

  getSnapshot = (): T => {
    return this.snapshot
  }

  notify<K extends keyof T>(property: K, value: T[K]): void {
    this.snapshot = { ...this.snapshot, [property]: value }
    this.subscribers.forEach((subscriber) => subscriber(this.snapshot))
  }
}
