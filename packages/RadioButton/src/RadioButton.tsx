import {
  Atom,
  AtomProps,
  PukingRainbowDefinition,
  system,
} from "@pukingrainbows-ui/system"
import { HTMLAttributes } from "react"
import { radioButtonCSS } from "./RadioButton.css"
export interface RadioButtonProps extends AtomProps<HTMLInputElement> {
  size?:
    | PukingRainbowDefinition["size"][0] // "small"
    | PukingRainbowDefinition["size"][1] // "medium"
    | PukingRainbowDefinition["size"][2] // "large"
}

export function RadioButton(props: RadioButtonProps) {
  const {
    children,
    size = "medium",
    appearance = "default",
    jss,
    ...moreProps
  } = props

  const sizeCSS = system.size(size)(system)
  const interactiveCSS = system.interactive(appearance)(system)
  const appearanceCSS = system.appearance(appearance)(system)
  return (
    <Atom
      as="label"
      direction="row"
      alignItems="center"
      jss={[
        sizeCSS,
        appearanceCSS,
        interactiveCSS,
        {
          cursor: "pointer",
          width: "100%",
          gap: "0.5em",
          border: 0,
          alignItems: "center",
          "--borderRadius": "0",
        },
        jss,
      ]}
      style={{}}
    >
      <Atom
        as="input"
        type="radio"
        jss={[radioButtonCSS, jss]}
        appearance={appearance}
        {...moreProps}
      />

      {children}
    </Atom>
  )
}
