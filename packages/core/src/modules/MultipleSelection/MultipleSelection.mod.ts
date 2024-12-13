import { Collection } from "../Collection"
import type { Item } from "../types"

/**
 * Manages multiple item selection within a collection, including toggle functionality.
 */
export class MultipleSelection<T extends Item> {
  /** The collection of items */
  private collection: Collection<T>

  /** Set of currently selected items */
  private selectedItems: Set<T> = new Set()

  constructor(collection: Collection<T>) {
    this.collection = collection
  }

  /**
   * Selects an item by its ID.
   * @param id - The ID of the item to select.
   * @throws Will throw an error if the item is not found.
   */
  select(id: string): void {
    const item = this.collection.getItemById(id)
    if (!item) {
      throw new Error(`Item with id '${id}' not found.`)
    }
    this.selectedItems.add(item)
  }

  /**
   * Deselects an item by its ID.
   * @param id - The ID of the item to deselect.
   */
  deselect(id: string): void {
    const item = this.collection.getItemById(id)
    if (item) {
      this.selectedItems.delete(item)
    }
  }

  /**
   * Toggles the selection state of an item by its ID.
   * @param id - The ID of the item to toggle.
   */
  toggle(id: string): void {
    if (this.isSelected(id)) {
      this.deselect(id)
    } else {
      this.select(id)
    }
  }

  /**
   * Checks if an item is selected.
   * @param idOrItem - The ID or item to check.
   * @returns `true` if the item is selected, `false` otherwise.
   */
  isSelected(idOrItem: string | T): boolean {
    const id = typeof idOrItem === "string" ? idOrItem : idOrItem.id
    const item = this.collection.getItemById(id)
    return item ? this.selectedItems.has(item) : false
  }

  /**
   * Determines the selection state of the collection.
   * @returns 'all' if all items are selected, 'none' if no items are selected, 'indeterminate' if some items are selected.
   */
  getSelectionState(): "all" | "none" | "indeterminate" {
    if (this.selectedItems.size === 0) {
      return "none"
    } else if (this.selectedItems.size === this.collection.items.length) {
      return "all"
    } else {
      return "indeterminate"
    }
  }

  /**
   * Selects all items in the collection.
   */
  selectAll(): void {
    this.selectedItems = new Set(this.collection.items)
  }

  /**
   * Deselects all items.
   */
  deselectAll(): void {
    this.selectedItems.clear()
  }

  /**
   * Retrieves all selected items.
   * @returns An array of selected items.
   */
  getSelected(): T[] {
    return [...this.selectedItems]
  }

  /**
   * Clears the selection.
   */
  clear(): void {
    this.deselectAll()
  }
}
