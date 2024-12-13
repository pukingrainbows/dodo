import { Component, createContext, ReactNode } from "react"
import { Collection } from "../Collection"
import { Item, ItemOrNull } from "../types"
import { SingleSelection } from "./SingleSelection.mod"

export const contextSingleSelection = createContext<SingleSelection<Item>>(
  {} as any,
)
export const contextSingleSelectionItem = createContext<ItemOrNull>(null)

export interface SingleSelectionProviderProps {
  children: ReactNode
  collection: Collection<Item>
}

export interface SingleSelectionProviderState {
  value: ItemOrNull
}

export class SingleSelectionProvider extends Component<
  SingleSelectionProviderProps,
  SingleSelectionProviderState
> {
  #singleSelection: SingleSelection<Item>
  constructor(props: SingleSelectionProviderProps) {
    super(props)
    this.#singleSelection = new SingleSelection(this.props.collection)
    this.#singleSelection.on("selection", this.onSelection)
    this.state = { value: null }
  }

  componentWillUnmount(): void {
    this.#singleSelection.dispose()
  }

  onSelection = (value: Item | null) => {
    this.setState({ value: value })
  }

  render() {
    return (
      <contextSingleSelectionItem.Provider value={this.state.value}>
        <contextSingleSelection.Provider value={this.#singleSelection}>
          {this.props.children}
        </contextSingleSelection.Provider>
      </contextSingleSelectionItem.Provider>
    )
  }
}
