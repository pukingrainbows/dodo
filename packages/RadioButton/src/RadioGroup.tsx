import {
  Collection,
  Item,
  SingleSelectionProvider,
  SingleSelectionProviderProps,
} from "@pukingrainbows-ui/core"

import { FC, ReactNode } from "react"
import { RadioButton, RadioButtonProps } from "./RadioButton"

interface RadioGroupComponent {
  (props: SingleSelectionProviderProps): ReactNode
  Item: FC<RadioButtonProps>
}

export const RadioGroup: RadioGroupComponent = (props) => {
  const { children, collection = new Collection<Item>() } = props

  return (
    <SingleSelectionProvider collection={collection}>
      {children}
    </SingleSelectionProvider>
  )
}

RadioGroup.Item = (props) => {
  return <RadioButton {...props} />
}
