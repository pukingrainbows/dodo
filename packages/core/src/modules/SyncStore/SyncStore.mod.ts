export type SyncState = Record<string, any>

export interface ISyncStore<T extends Record<string, any>> {
  subscribe(subscriber: (state: T) => void): () => void
  snapshot(): T
  sync<K extends keyof T>(property: K, value: T[K]): void
}

export class SyncStore<T extends Record<string, any>> implements ISyncStore<T> {
  private _subscribers = new Map<string, (state: T) => void>()
  private _snapshot: T

  constructor(initialState: T) {
    this._snapshot = initialState
  }

  subscribe = (subscriber: (state: T) => void): (() => void) => {
    const id = Math.random().toString(36).slice(2)
    this._subscribers.set(id, subscriber)
    return () => this._subscribers.delete(id)
  }

  snapshot = (): T => {
    return this._snapshot
  }

  sync<K extends keyof T>(property: K, value: T[K]): void {
    this._snapshot = { ...this._snapshot, [property]: value }
    this._subscribers.forEach((subscriber) => subscriber(this._snapshot))
  }
}
