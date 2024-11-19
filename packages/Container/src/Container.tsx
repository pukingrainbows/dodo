import {
  PukingRainbowColor,
  PukingRainbowDefinition,
  Stack,
  StackProps,
  system,
} from "@pukingrainbows-ui/system"
import { CSSProperties, ReactNode } from "react"
import { containerCSS } from "./Container.css"
import { Item } from "./components/Item"

export interface ContainerProps extends StackProps {
  level?: PukingRainbowDefinition["level"][number]
  borderColor?: PukingRainbowColor | null
  backgroundColor?: PukingRainbowColor | null
  color?: PukingRainbowColor
  appearance?: PukingRainbowDefinition["appearance"][number]
  borderRadius?: number
}

export interface ContainerComponent {
  (props: ContainerProps): ReactNode
  Item: typeof Item
}

export function Container(props: ContainerProps) {
  const {
    jss,
    level = "level-1",
    borderColor,
    backgroundColor,
    color,
    padding = [0.5, 0.5],
    appearance,
    ...moreProps
  } = props

  const levelCSS = system.level(level)(system)
  const borderRadius = system.unit.px(props.borderRadius ?? 0.5)
  const borderColorHex = borderColor ? system.color(borderColor) : undefined
  const backgroundColorHex = backgroundColor
    ? system.color(backgroundColor)
    : undefined
  const colorHex = color ? system.color(color) : undefined

  /**
   * 1. If appearance is set, we don't need to set the border color or background color.
   * 2. If borderColor is set to null, we set the border color to transparent.
   * 3. If borderColor is set, we set the border color to the hex value.
   */
  const borderColorCSSProp = appearance
    ? undefined
    : borderColor === null
    ? { "--borderColor": "transparent" }
    : borderColor && borderColorHex
    ? { "--borderColor": borderColorHex }
    : undefined

  /**
   * 1. If appearance is set, we don't need to set the background color.
   * 2. If backgroundColor is set to null, we set the background color to transparent.
   * 3. If backgroundColor is set, we set the background color to the hex value.
   */
  const backgroundColorCSSProp = appearance
    ? undefined
    : backgroundColor === null
    ? { "--backgroundColor": "transparent" }
    : backgroundColor && backgroundColorHex
    ? { "--backgroundColor": backgroundColorHex }
    : undefined

  const colorCSSProp = color && colorHex ? { "--color": colorHex } : undefined
  const appearanceCSS = appearance ? system.appearance(appearance)(system) : {}

  const cardCSSProperties = {
    "--borderRadius": borderRadius,
    ...(borderColorCSSProp ?? {}),
    ...(backgroundColorCSSProp ?? {}),
    ...(colorCSSProp ?? {}),
  } as CSSProperties

  return (
    <Stack
      jss={[levelCSS, containerCSS, appearanceCSS, jss]}
      style={{
        ...cardCSSProperties,
      }}
      {...moreProps}
    />
  )
}

Container.Item = Item
