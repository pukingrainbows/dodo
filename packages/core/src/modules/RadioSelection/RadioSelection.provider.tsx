import { Component, createContext, ReactNode } from "react"
import { Collection } from "../Collection"
import { Item, ItemOrNull } from "../types"
import { RadioSelection } from "./RadioSelection.mod"

export const contextRadioSelection = createContext<RadioSelection<Item>>(
  {} as any,
)
export const contextRadioSelectionItem = createContext<ItemOrNull>(null)

interface RadioSelectionProviderProps {
  children: ReactNode
  collection: Collection<Item>
}

interface RadioSelectionProviderState {
  item: ItemOrNull
}

export class RadioSelectionProvider extends Component<
  RadioSelectionProviderProps,
  RadioSelectionProviderState
> {
  #radioSelection: RadioSelection<Item>
  constructor(props: RadioSelectionProviderProps) {
    super(props)
    this.#radioSelection = new RadioSelection(this.props.collection)
    this.#radioSelection.on("selection", this.onSelection)
    this.state = { item: null }
  }

  componentWillUnmount(): void {
    this.#radioSelection.dispose()
  }

  onSelection = (item: Item | null) => {
    this.setState({ item })
  }

  render() {
    return (
      <contextRadioSelectionItem.Provider value={this.state.item}>
        <contextRadioSelection.Provider value={this.#radioSelection}>
          {this.props.children}
        </contextRadioSelection.Provider>
      </contextRadioSelectionItem.Provider>
    )
  }
}
