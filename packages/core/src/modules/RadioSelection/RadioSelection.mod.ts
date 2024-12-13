import { Collection } from "../Collection"
import { Id } from "../Id"
import { SingleSelection } from "../SingleSelection"
import { Item } from "../types"

export class RadioSelection<T extends Item> extends SingleSelection<T> {
  #group: string
  constructor(collection: Collection<T>, group: string = Id.createHumanId()) {
    super(collection)
    this.#group = group
  }

  get group() {
    return this.#group
  }
}
