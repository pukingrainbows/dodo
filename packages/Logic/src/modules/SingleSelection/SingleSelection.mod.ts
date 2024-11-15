import { Collection } from "../Collection"
import { Notifier } from "../Notifier"
import type { Item } from "../types"

export interface SingleSelectionState {
  selectionId: string | null
}

/**
 * Manages single item selection within a collection.
 */
export class SingleSelection<
  T extends Item,
> extends Notifier<SingleSelectionState> {
  /** The collection of items */
  #collection: Collection<T> = new Collection<T>()

  /** The currently selected item */
  #selectedItem: T | null = null

  constructor() {
    super({ selectionId: null })
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
    this.notify("selectionId", id)
  }

  /**
   * Deselects the currently selected item.
   */
  deselect = (): void => {
    this.#selectedItem = null
    this.notify("selectionId", null)
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
    this.notify("selectionId", null)
  }

  get items(): T[] {
    return this.#collection.items
  }

  registry = (item: T): Item => {
    return this.#collection.registry(item)
  }
}
