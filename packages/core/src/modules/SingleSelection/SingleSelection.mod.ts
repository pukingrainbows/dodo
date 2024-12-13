import { Collection } from "../Collection"
import type { ISelection, Item } from "../types"
import { UIEmitter } from "../UIEmitter/UIEmitter"

/**
 * Manages single item selection within a collection.
 */
export class SingleSelection<T extends Item>
  extends UIEmitter<T | null, ReadonlyArray<"selection">>
  implements ISelection<T>
{
  /** The collection of items */
  #collection: Collection<T>

  /** The currently selected item */
  #selectedItem: T | null = null

  constructor(collection: Collection<T>) {
    super()
    this.#collection = collection
  }

  set selectedItem(value: T | null) {
    this.#selectedItem = value
  }

  /**
   * Selects an item by its ID.
   * @param id - The ID of the item to select.
   * @throws Will throw an error if the item is not found.
   */
  select = (id: string): void => {
    const item = this.#collection.getItemById(id)
    if (!item) {
      throw new Error(`Item with id '${id}' not found.`)
    }
    this.#selectedItem = item
    this.emit("selection", item)
  }

  /**
   * Deselects the currently selected item.
   */
  deselect = (): void => {
    this.#selectedItem = null
    this.emit("selection", null)
  }

  /**
   * Checks if an item is selected.
   * @param idOrItem - The ID or item to check.
   * @returns `true` if the item is selected, `false` otherwise.
   */
  isSelected = (idOrItem: string | T): boolean => {
    const id = typeof idOrItem === "string" ? idOrItem : idOrItem.id
    return this.#selectedItem?.id === id
  }

  /**
   * Retrieves the currently selected item.
   * @returns The selected item or `null` if none is selected.
   */
  getSelected = (): T | null => {
    return this.#selectedItem
  }

  /**
   * Clears the selection.
   */
  clear = (): void => {
    this.deselect()
    this.emit("selection", null)
  }

  get items(): T[] {
    return this.#collection.items
  }

  add = (item: T, selectedItem = false): Item => {
    const _item = this.#collection.registry(item)
    if (selectedItem) {
      this.#selectedItem = _item
    }
    return _item
  }

  remove = (id: string): boolean => {
    if (this.#selectedItem?.id === id) {
      this.#selectedItem = null
    }
    return this.#collection.remove(id)
  }

  dispose() {
    this.clearSubscribers()
    this.#collection.clear()
  }

  getCollection = () => {
    return this.#collection
  }
}
