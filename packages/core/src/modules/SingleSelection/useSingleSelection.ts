import { useContext } from "react"
import {
  contextSingleSelection,
  contextSingleSelectionItem,
} from "./SingleSelection.provider"
export function useSingleSelection() {
  const singleSelection = useContext(contextSingleSelection)
  const value = useContext(contextSingleSelectionItem)
  if (!singleSelection || !value) {
    throw new Error(
      "useSingleSelection and item must be used within a SingleSelectionProvider",
    )
  }

  return { singleSelection, value }
}
