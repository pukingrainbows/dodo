import { CSSInterpolation } from "@emotion/css/create-instance"
import { DetailedHTMLProps, ElementType, ReactNode } from "react"
import { system } from "../../system"
import { stackColumnCSS, stackRowCSS } from "./Stack.css"

export interface StackProps<T = HTMLElement>
  extends DetailedHTMLProps<React.HTMLAttributes<T>, T>,
    Record<string, any> {
  as?: ElementType
  jss?: CSSInterpolation | CSSInterpolation[]
  direction?: "row" | "column"
  display?: "flex" | "inline-flex"
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
  alignItems?: "flex-start" | "center" | "flex-end"
  gap?: number
}

export function Stack(props: StackProps): ReactNode {
  const {
    jss,
    as: Component = "div",
    ref,
    gap = 1,
    direction = "column",
    justifyContent = "flex-start",
    alignItems = "flex-start",
    display = "flex",
    ...rest
  } = props

  const gapInPx = system.unit.px(gap)
  const jssFromProps = Array.isArray(jss) ? jss : [jss]

  return (
    <Component
      css={[
        direction === "column" ? stackColumnCSS : stackRowCSS,
        jssFromProps,
      ]}
      ref={ref}
      {...rest}
      style={{
        "--stack-display": display,
        "--stack-gap": gapInPx,
        "--stack-justify-content": justifyContent,
        "--stack-align-items": alignItems,
      }}
    />
  )
}
