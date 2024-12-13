import { useContext } from "react"
import {
  contextRadioSelection,
  contextRadioSelectionItem,
} from "./RadioSelection.provider"
export function useSingleSelection() {
  const radioSelection = useContext(contextRadioSelection)
  const item = useContext(contextRadioSelectionItem)
  if (!radioSelection || !item) {
    throw new Error(
      "useSingleSelection and item must be used within a SingleSelectionProvider",
    )
  }

  return { radioSelection, item }
}
