import { GlyphProps } from "@pukingrainbows-ui/glyph"
import { Item, SingleSelection } from "@pukingrainbows-ui/logic"
import { AtomProps } from "@pukingrainbows-ui/system"
import humanId from "human-id"
import { createContext, ReactNode, useMemo, useState } from "react"
import { Group } from "./Group"

export const contextButtonRadioModule = createContext<{
  singleSelection: SingleSelection<Item>
}>({} as any)

interface ContextButtonProps<T = any> {
  appearance: AtomProps["appearance"]
  appearanceChecked: AtomProps["appearance"]
  onChange: (value: T) => void
  defaultValue: T
  groupName: string
  iconChecked?: GlyphProps["icon"]
}

export const contextButtonRadio = createContext<ContextButtonProps>({} as any)

export interface CheckboxButtonProviderProps<T> {
  children: ReactNode
  appearance?: AtomProps["appearance"]
  appearanceChecked?: AtomProps["appearance"]
  onChange: (value: T) => void
  defaultValue: string
  iconChecked?: GlyphProps["icon"]
}
export function RadioButtonGroup<T extends Item>(
  props: CheckboxButtonProviderProps<T>,
) {
  const {
    appearance = "default",
    appearanceChecked = "primary",
    children,
    defaultValue,
    iconChecked,
    onChange,
  } = props

  const [instance] = useState(() => {
    const singleSelection = new SingleSelection()
    if (defaultValue) {
      singleSelection.selectedItem = { id: defaultValue, content: "" }
    }
    return { singleSelection }
  })

  const values = useMemo(() => {
    return {
      appearance,
      appearanceChecked,
      defaultValue,
      groupName: humanId(),
      iconChecked,
      onChange,
    }
  }, [appearance, appearanceChecked, onChange, defaultValue])

  return (
    <contextButtonRadio.Provider value={values}>
      <contextButtonRadioModule.Provider value={instance}>
        <Group>{children}</Group>
      </contextButtonRadioModule.Provider>
    </contextButtonRadio.Provider>
  )
}
