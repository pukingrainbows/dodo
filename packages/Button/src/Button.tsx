import { Atom, AtomProps, system } from "@pukingrainbows-ui/system"
import { HTMLAttributes } from "react"
import { buttonCSS } from "./Button.css"

type ButtonBase = HTMLAttributes<HTMLButtonElement>
export type ButtonProps = AtomProps & ButtonBase

export function Button(props: ButtonProps) {
  const {
    children,
    size = "medium",
    appearance = "default",
    jss,
    ...moreProps
  } = props

  const interactiveCSS = system.interactive(appearance)(system)

  return (
    <Atom
      as="button"
      appearance={appearance}
      jss={[buttonCSS, interactiveCSS, jss]}
      size={size}
      data-pukingrainbows-ui="button"
      {...moreProps}
    >
      {children}
    </Atom>
  )
}
