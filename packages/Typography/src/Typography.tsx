import {
  Atom,
  AtomProps,
  PukingRainbowColor,
  PukingRainbowDefinition,
  system,
} from "@pukingrainbows-ui/system"
import { CSSProperties, ReactNode } from "react"
import {
  typographyCSS,
  typographyEllipsisCSS,
  typographyIsVisuallyHiddenCSS,
} from "./Typography.css"

export interface TypographyProps extends Omit<AtomProps, "size"> {
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "a"
  align?: CSSProperties["textAlign"]
  transform?: CSSProperties["textTransform"]
  decoration?: CSSProperties["textDecoration"]
  letterSpacing?: CSSProperties["letterSpacing"]
  appearance?: AtomProps["appearance"]
  fontWeight?: CSSProperties["fontWeight"]
  fontStyle?: CSSProperties["fontStyle"]
  children: ReactNode
  ellipsis?: boolean
  isVisuallyHidden?: boolean
  lineHeight?: string
  color?: PukingRainbowColor
  type: PukingRainbowDefinition["typography"][number]
}

export function Typography(props: TypographyProps) {
  const {
    align: align,
    color,
    decoration,
    ellipsis,
    fontStyle,
    fontWeight,
    isVisuallyHidden,
    jss,
    letterSpacing,
    lineHeight,
    size,
    transform,
    as = "p",
    type = "medium",
    ...moreProps
  } = props

  const typographyCSSSystem = system.typography(type)(system)
  const typographyCSSProperties = {
    "--backgroundColor": "transparent",
    "--borderColor": "transparent",
    "--color": (color && system.color(color)) || undefined,
    "--fontStyle": fontStyle ?? undefined,
    "--fontWeight": fontWeight ?? undefined,
    "--letterSpacing": letterSpacing ?? undefined,
    "--lineHeight": lineHeight ?? undefined,
    "--textAlign": align ?? "left",
    "--textDecoration": decoration ?? undefined,
    "--textTransform": transform ?? undefined,
  } as CSSProperties

  return (
    <Atom
      jss={[
        typographyCSSSystem,
        typographyCSS,
        isVisuallyHidden ? typographyIsVisuallyHiddenCSS : undefined,
        ellipsis ? typographyEllipsisCSS : undefined,
        jss,
      ]}
      style={typographyCSSProperties}
      {...moreProps}
      as={as}
    />
  )
}
