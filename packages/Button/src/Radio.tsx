import { Glyph } from "@pukingrainbows-ui/glyph"
import { AtomProps } from "@pukingrainbows-ui/system"
import { ChangeEvent, useContext, useSyncExternalStore } from "react"
import { Button } from "./Button"
import { contextButtonRadio, contextButtonRadioModule } from "./Radio.provider"

export interface RadioButtonProps extends AtomProps {
  value: string
}

export function RadioButton(props: RadioButtonProps) {
  const { children, value, ...moreProps } = props
  const { appearance, appearanceChecked, groupName, onChange, iconChecked } =
    useContext(contextButtonRadio)

  const { singleSelection } = useContext(contextButtonRadioModule)
  const { registry, isSelected, getSnapshot, subscribe } = singleSelection

  const item = registry({
    id: value,
    content: "",
  })

  useSyncExternalStore(subscribe, getSnapshot)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    singleSelection.select(value)
    onChange(value)
  }

  return (
    <Button
      as="label"
      {...moreProps}
      appearance={isSelected(item) ? appearanceChecked : appearance}
    >
      {isSelected(item) && iconChecked && (
        <>
          <Glyph icon={iconChecked} a11yText="checked item" />{" "}
        </>
      )}
      {children}
      <input
        type="radio"
        name={groupName}
        value={item.id}
        checked={isSelected(item)}
        onChange={handleChange}
        style={{ visibility: "hidden", position: "absolute" }}
      />
    </Button>
  )
}
