import humanId from "human-id"
import type { Item } from "../types"

/**
 * A generic collection class that manages items of type T.
 * Provides methods for adding, removing, filtering, sorting, and moving items.
 * Supports methods with and without side effects.
 */
export class Collection<T extends Item> {
  /** Internal array to store items */
  private _items: T[] = []

  /**
   * Retrieves all items in the collection.
   */
  get items(): T[] {
    return this._items
  }

  /**
   * Sets the items in the collection without triggering side effects.
   * @param value - An array of items to set.
   */
  set items(value: T[]) {
    this._items = value
  }

  /**
   * Adds an item to the collection without triggering side effects.
   * @param item - The item to add.
   * @throws Will throw an error if an item with the same ID already exists.
   */
  registry(item: T) {
    const foundItem = this._items.find((i) => i.id === item.id)
    if (foundItem) {
      return foundItem
    }

    this._items.push(item)
    return item
  }

  createItem(content: string, id: string = humanId()): Item {
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
      return true
    }
    return false
  }

  /**
   * Clears all items from the collection.
   * Triggers side effects.
   */
  clear(): void {
    this._items = []
  }

  /**
   * Filters items based on a query string matching their content.
   * @param query - The search query.
   * @returns An array of items whose content matches the query.
   */
  filter(query: string): T[] {
    const lowerCaseQuery = query.toLowerCase()
    return this._items.filter((item) =>
      item.content.toLowerCase().includes(lowerCaseQuery),
    )
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
      return
    }

    const compareFunctions: { [key: string]: (a: T, b: T) => number } = {
      "asc:number": (a, b) => Number(a.content) - Number(b.content),
      "desc:number": (a, b) => Number(b.content) - Number(a.content),
      "asc:string": (a, b) => a.content.localeCompare(b.content),
      "desc:string": (a, b) => b.content.localeCompare(a.content),
      "asc:date": (a, b) =>
        new Date(a.content).getTime() - new Date(b.content).getTime(),
      "desc:date": (a, b) =>
        new Date(b.content).getTime() - new Date(a.content).getTime(),
    }

    const compareFunction = compareFunctions[type]
    if (!compareFunction) {
      throw new Error(`Invalid sort type '${type}'.`)
    }
    this._items.sort(compareFunction)
  }

  /**
   * Retrieves an item by its ID.
   * @param id - The unique identifier of the item.
   * @returns The item if found, otherwise `undefined`.
   */
  getItemById(id: string): T | undefined {
    return this._items.find((item) => item.id === id)
  }
}
