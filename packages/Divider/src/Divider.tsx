import {
  Atom,
  AtomProps,
  PukingRainbowColor,
  system,
} from "@pukingrainbows-ui/system"
import { CSSProperties } from "react"
import { dividerCSS } from "./Divider.css"

interface DividerTitleProps {
  title: string
  titleAlignment?: "left" | "center" | "right"
}

interface DividerBaseProps {
  direction?: "horizontal" | "vertical"
  space?: number
  appearance?: AtomProps["appearance"]
  color?: PukingRainbowColor
}

export type DividerProps =
  | (DividerBaseProps & DividerTitleProps)
  | (DividerBaseProps & { title?: undefined; titleAlignment?: never })

export function Divider(props: DividerProps) {
  const {
    appearance = "default",
    direction = "horizontal",
    space = 0,
    title,
    titleAlignment,
    color = "grey600",
    ...moreProps
  } = props

  const borderColor = `${color ? system.color(color) : "var(--borderColor)"}`
  const titleAlignmentCSS = getTitleAlignment(titleAlignment)
  const unit = system.unit.px(space)
  const dividerCSSProperties = {
    "--dividerWidth": direction === "horizontal" ? "100%" : "1px",
    "--dividerHeight": direction === "horizontal" ? "1px" : "100%",
    "--borderColor": direction === "horizontal" ? borderColor : "transparent",
    "--padding": unit,
    "--left": titleAlignmentCSS["--left"],
    "--transformX": titleAlignmentCSS["--transformX"],
    "--blur-filter": title ? "4px" : "0",
  } as CSSProperties

  const dataAttributeTitle = title ? { "data-title": title } : {}

  return (
    <Atom
      as="div"
      jss={dividerCSS}
      appearance={appearance}
      style={{
        ...dividerCSSProperties,
      }}
      {...moreProps}
      {...dataAttributeTitle}
    />
  )
}

interface TitleAlignmentCSS {
  "--left": string
  "--transformX": string
}

function getTitleAlignment(
  title: DividerProps["titleAlignment"],
): TitleAlignmentCSS {
  const titleAlignmentCSS = { "--left": "", "--transformX": "" }

  switch (title ?? "left") {
    case "center":
      titleAlignmentCSS["--left"] = "50%"
      titleAlignmentCSS["--transformX"] = "-50%"
      break
    case "right":
      titleAlignmentCSS["--left"] = "100%"
      titleAlignmentCSS["--transformX"] = "-100%"
      break
    default:
      titleAlignmentCSS["--left"] = "0"
      titleAlignmentCSS["--transformX"] = "0"
      break
  }
  return titleAlignmentCSS
}
