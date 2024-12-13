import { Collection } from "./Collection"

/**
 * Interface representing an item with a unique identifier and content.
 */
export interface Item {
  /** Unique identifier for the item */
  id: string
}

export type ItemWithContent = Item & {
  /** Content to display */
  content: string
}

export type ItemOrNull = Item | null

export interface ISelection<T extends Item | ItemWithContent> {
  getCollection: () => Collection<T>
}
