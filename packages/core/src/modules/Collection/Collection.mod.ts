import { Id } from "../Id"
import type { Item, ItemWithContent } from "../types"

/**
 * A generic collection class that manages items of type T.
 * Provides methods for adding, removing, filtering, sorting, and moving items.
 * Supports navigation through enabled items only.
 */
export class Collection<T extends Item | ItemWithContent> {
  /** Internal array to store items */
  private _items: T[] = []
  private disabledItems: Set<string> = new Set()

  /** Current index pointing to an enabled item */
  #currentIndex: number = -1
  #iteratorLoop: boolean = false

  /**
   * Determines if an item has content.
   * @param item - The item to check.
   * @returns `true` if the item has content, `false` otherwise.
   */
  private hasContent(item: any): item is ItemWithContent {
    return item !== null && typeof item === "object" && "content" in item
  }

  /**
   * Retrieves all items in the collection.
   */
  get items(): T[] {
    return this._items
  }

  /**
   * Sets the items in the collection without triggering side effects.
   * Ensures the current index points to an enabled item.
   * @param value - An array of items to set.
   */
  set items(value: T[]) {
    this._items = value
    // Reset current index to the first enabled item
    this.#currentIndex = this.findFirstEnabledIndex()
  }

  /**
   * Retrieves the current index.
   */
  get currentIndex(): number {
    return this.#currentIndex
  }

  /**
   * Sets the current index.
   * Ensures the new index points to an enabled item.
   * @param index - The new index to set.
   * @throws Will throw an error if the index is out of bounds or the item is disabled.
   */
  set currentIndex(index: number) {
    if (
      index >= 0 &&
      index < this._items.length &&
      !this.isDisabled(this._items[index].id)
    ) {
      this.#currentIndex = index
    } else {
      throw new Error(`Invalid or disabled index '${index}'.`)
    }
  }

  /**
   * Adds an item to the collection without triggering side effects.
   * If the item already exists, it returns the existing item.
   * @param item - The item to add.
   * @returns The added or existing item.
   */
  registry(item: T): T {
    const foundItem = this._items.find((i) => i.id === item.id)
    if (foundItem) {
      return foundItem
    }

    this._items.push(item)
    // If this is the first enabled item, set it as current
    if (this.#currentIndex === -1 && !this.isDisabled(item.id)) {
      this.#currentIndex = this._items.length - 1
    }
    return item
  }

  /**
   * Creates a new item with content and an optional ID.
   * @param content - The content of the item.
   * @param id - The unique identifier of the item.
   * @returns The created item.
   */
  createItem(
    content: string,
    id: string = Id.createHumanId(),
  ): Item | ItemWithContent {
    return { id, content }
  }

  /**
   * Removes an item from the collection by its ID.
   * @param id - The unique identifier of the item to remove.
   * @returns `true` if the item was removed, `false` if not found.
   */
  remove(id: string): boolean {
    const index = this._items.findIndex((item) => item.id === id)
    if (index !== -1) {
      this._items.splice(index, 1)
      this.disabledItems.delete(id)
      // Adjust current index if necessary
      if (this.#currentIndex >= this._items.length) {
        this.#currentIndex = this.findLastEnabledIndex()
      }
      return true
    }
    return false
  }

  /**
   * Clears all items from the collection.
   */
  clear(): void {
    this._items = []
    this.disabledItems.clear()
    this.#currentIndex = -1
  }

  /**
   * Filters items based on a query string matching their content.
   * @param query - The search query.
   * @returns An array of items whose content matches the query.
   */
  filter(query: string): T[] {
    const lowerCaseQuery = query.toLowerCase()
    return this._items.filter((item) => {
      if (!this.hasContent(item)) {
        return false
      }
      return item.content.toLowerCase().includes(lowerCaseQuery)
    })
  }

  /**
   * Moves an item to a new position in the collection.
   * @param id - The ID of the item to move.
   * @param newPosition - The new index position for the item.
   * @throws Will throw an error if the item is not found or the position is invalid.
   */
  move(id: string, newPosition: number): void {
    const index = this._items.findIndex((item) => item.id === id)
    if (index === -1) {
      throw new Error(`Item with id '${id}' not found.`)
    }
    if (newPosition < 0 || newPosition >= this._items.length) {
      throw new Error(`Invalid new position '${newPosition}'.`)
    }
    const [item] = this._items.splice(index, 1)
    this._items.splice(newPosition, 0, item)
    // Update current index if necessary
    if (this.#currentIndex === index) {
      this.#currentIndex = newPosition
    } else if (
      index < this.#currentIndex &&
      newPosition >= this.#currentIndex
    ) {
      this.#currentIndex--
    } else if (
      index > this.#currentIndex &&
      newPosition <= this.#currentIndex
    ) {
      this.#currentIndex++
    }
  }

  /**
   * Sorts items based on the specified criteria.
   * @param type - The sorting criteria.
   * @param predicate - Optional. A custom sorting function.
   */
  sortBy(
    type:
      | "asc:number"
      | "asc:string"
      | "asc:date"
      | "desc:number"
      | "desc:string"
      | "desc:date"
      | "custom",
    predicate?: (a: T, b: T) => number,
  ): void {
    if (type === "custom" && predicate) {
      this._items.sort(predicate)
    } else {
      const compareFunctions: { [key: string]: (a: T, b: T) => number } = {
        "asc:number": (a, b) => {
          if (this.hasContent(a) && this.hasContent(b)) {
            return Number(a.content) - Number(b.content)
          }
          return 0
        },
        "desc:number": (a, b) => {
          if (this.hasContent(a) && this.hasContent(b)) {
            return Number(b.content) - Number(a.content)
          }
          return 0
        },
        "asc:string": (a, b) => {
          if (this.hasContent(a) && this.hasContent(b)) {
            return a.content.localeCompare(b.content)
          }
          return 0
        },
        "desc:string": (a, b) => {
          if (this.hasContent(a) && this.hasContent(b)) {
            return b.content.localeCompare(a.content)
          }
          return 0
        },
        "asc:date": (a, b) => {
          if (this.hasContent(a) && this.hasContent(b)) {
            return new Date(a.content).getTime() - new Date(b.content).getTime()
          }
          return 0
        },
        "desc:date": (a, b) => {
          if (this.hasContent(a) && this.hasContent(b)) {
            return new Date(b.content).getTime() - new Date(a.content).getTime()
          }
          return 0
        },
      }

      const compareFunction = compareFunctions[type]
      if (!compareFunction) {
        throw new Error(`Invalid sort type '${type}'.`)
      }
      this._items.sort(compareFunction)
    }

    // After sorting, reset current index to the first enabled item
    this.#currentIndex = this.findFirstEnabledIndex()
  }

  /**
   * Retrieves an item by its ID.
   * @param id - The unique identifier of the item.
   * @returns The item if found, otherwise `undefined`.
   */
  getItemById(id: string): T | undefined {
    return this._items.find((item) => item.id === id)
  }

  /**
   * Updates the content of an item by its ID.
   * @param id - The unique identifier of the item.
   * @param content - The new content for the item.
   * @returns `true` if the item was updated, `false` otherwise.
   */
  updateItem(id: string, content: string): boolean {
    const item = this.getItemById(id)
    if (item && this.hasContent(item)) {
      item.content = content
      return true
    }
    return false
  }

  /**
   * Disables an item by its ID.
   * If the disabled item is the current item, moves to the next enabled item.
   * @param id - The unique identifier of the item to disable.
   */
  disable(id: string): void {
    this.disabledItems.add(id)
    // If the disabled item is the current item, move to the next enabled item
    if (
      this.#currentIndex !== -1 &&
      this._items[this.#currentIndex].id === id
    ) {
      this.next()
    }
  }

  /**
   * Enables an item by its ID.
   * If no current index is set, sets it to this item.
   * @param id - The unique identifier of the item to enable.
   */
  enable(id: string): void {
    if (this.disabledItems.delete(id)) {
      // If no current index is set, set it to this item
      if (this.#currentIndex === -1) {
        const index = this._items.findIndex((item) => item.id === id)
        if (index !== -1) {
          this.#currentIndex = index
        }
      }
    }
  }

  /**
   * Toggles the disabled state of an item by its ID.
   * If the item is disabled, it becomes enabled.
   * If the item is enabled, it becomes disabled.
   * @param id - The unique identifier of the item to toggle.
   */
  toggleDisabled(id: string): void {
    if (this.isDisabled(id)) {
      this.enable(id)
    } else {
      this.disable(id)
    }
  }

  /**
   * Checks if an item is disabled.
   * @param id - The unique identifier of the item.
   * @returns `true` if the item is disabled, `false` otherwise.
   */
  isDisabled(id: string): boolean {
    return this.disabledItems.has(id)
  }

  /**
   * Moves the iterator to the next enabled item.
   * @returns The next enabled item or `undefined` if none found.
   */
  next(): T | undefined {
    if (this._items.length === 0) {
      return undefined
    }

    let attempts = 0
    let nextIndex = this.#currentIndex

    do {
      nextIndex = (nextIndex + 1) % this._items.length
      attempts++

      if (!this.isDisabled(this._items[nextIndex].id)) {
        this.#currentIndex = nextIndex
        return this._items[nextIndex]
      }

      // If looping is disabled and we've reached the end
      if (!this.#iteratorLoop && nextIndex === this._items.length - 1) {
        break
      }
    } while (attempts < this._items.length)

    return undefined // No enabled items found
  }

  /**
   * Moves the iterator to the previous enabled item.
   * @returns The previous enabled item or `undefined` if none found.
   */
  prev(): T | undefined {
    if (this._items.length === 0) {
      return undefined
    }

    let attempts = 0
    let prevIndex = this.#currentIndex

    do {
      prevIndex = (prevIndex - 1 + this._items.length) % this._items.length
      attempts++

      if (!this.isDisabled(this._items[prevIndex].id)) {
        this.#currentIndex = prevIndex
        return this._items[prevIndex]
      }

      // If looping is disabled and we've reached the start
      if (!this.#iteratorLoop && prevIndex === 0) {
        break
      }
    } while (attempts < this._items.length)

    return undefined // No enabled items found
  }

  /**
   * Moves the iterator to a specific index.
   * If the target item is disabled, moves to the next available enabled item.
   * @param index - The target index to move to.
   * @returns The target enabled item or `undefined` if none found.
   * @throws Will throw an error if the index is out of bounds.
   */
  go(index: number): T | undefined {
    if (this._items.length === 0) {
      return undefined
    }

    if (index < 0 || index >= this._items.length) {
      throw new Error(`Index '${index}' is out of bounds.`)
    }

    if (!this.isDisabled(this._items[index].id)) {
      this.#currentIndex = index
      return this._items[index]
    }

    // If the target is disabled, find the next enabled item
    let attempts = 0
    let nextIndex = index

    do {
      nextIndex = (nextIndex + 1) % this._items.length
      attempts++

      if (!this.isDisabled(this._items[nextIndex].id)) {
        this.#currentIndex = nextIndex
        return this._items[nextIndex]
      }

      // If looping is disabled and we've reached the end
      if (!this.#iteratorLoop && nextIndex === this._items.length - 1) {
        break
      }
    } while (nextIndex !== index && attempts < this._items.length)

    return undefined // No enabled items found
  }

  /**
   * Finds the first enabled item's index.
   * @returns The index of the first enabled item or -1 if none found.
   */
  private findFirstEnabledIndex(): number {
    for (let i = 0; i < this._items.length; i++) {
      if (!this.isDisabled(this._items[i].id)) {
        return i
      }
    }
    return -1
  }

  /**
   * Finds the last enabled item's index.
   * @returns The index of the last enabled item or -1 if none found.
   */
  private findLastEnabledIndex(): number {
    for (let i = this._items.length - 1; i >= 0; i--) {
      if (!this.isDisabled(this._items[i].id)) {
        return i
      }
    }
    return -1
  }

  /**
   * Sets the looping behavior for navigation.
   * @param shouldLoop - `true` to enable looping, `false` to disable.
   */
  setLooping(shouldLoop: boolean): void {
    this.#iteratorLoop = shouldLoop
  }
}
