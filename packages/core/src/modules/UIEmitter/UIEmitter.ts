export class UIEmitter<T, E extends ReadonlyArray<string>> {
  #subscribers = new Map<E[number], Set<Function>>()

  on(event: E[number], callback: Function) {
    if (!this.#subscribers.has(event)) {
      this.#subscribers.set(event, new Set())
    }
    this.#subscribers.get(event)?.add(callback)

    return () => {
      this.#subscribers.get(event)?.delete(callback)
    }
  }

  emit(event: E[number], payload: T) {
    this.#subscribers.get(event)?.forEach((callback) => {
      callback(payload)
    })
  }

  clearSubscribers() {
    this.#subscribers.clear()
  }
}
