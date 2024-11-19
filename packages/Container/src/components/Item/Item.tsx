import {
  PukingRainbowDefinition,
  Stack,
  StackProps,
  system,
} from "@pukingrainbows-ui/system"
import { CSSProperties, ReactNode } from "react"
import { layoutCSS } from "./Item.css"

interface ContainerItemProps extends StackProps {
  children: ReactNode
  size?: PukingRainbowDefinition["size"][number]
  padding?: [x: number, y: number]
  layout?:
    | "|---|-|" // First child expands, others shrink
    | "|-|---|" // Last child expands, others shrink
    | "|-|-|-|" // All children expand equally
    | "|<--->|" // Justify content: space-between
    | "|<->|<->|" // Justify content: space-around
}

export function Item(props: ContainerItemProps) {
  const {
    children,
    size = "medium",
    layout = "|---|-|",
    style,
    jss,
    padding,
    ...moreProps
  } = props

  const sizeCSS = system.size(size)(system)
  const cssProperties = {
    "--paddingX": padding?.length ? system.unit.px(padding[0]) : undefined,
    "--paddingY": padding?.length ? system.unit.px(padding[1]) : undefined,
  } as CSSProperties
  const cssLayout = layoutCSS[layout]

  return (
    <Stack
      direction="row"
      alignItems="center"
      jss={[sizeCSS, cssLayout, jss, { width: "100%" }]}
      style={{ ...cssProperties, ...style }}
      {...moreProps}
    >
      {children}
    </Stack>
  )
}
