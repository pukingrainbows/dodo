import { CSSInterpolation } from "@emotion/css/create-instance"
import { CSSProperties, DetailedHTMLProps, ElementType, ReactNode } from "react"
import { system } from "../../system"
import { layoutCSS, stackColumnCSS, stackRowCSS } from "./Stack.css"

export interface StackProps<T = HTMLElement>
  extends DetailedHTMLProps<React.HTMLAttributes<T>, T>,
    Record<string, any> {
  as?: ElementType
  jss?: CSSInterpolation | CSSInterpolation[]
  direction?: CSSProperties["flexDirection"]
  display?: "flex" | "inline-flex"
  justifyContent?: CSSProperties["justifyContent"]
  alignItems?: CSSProperties["alignItems"]
  gap?: number
  /**
   * Layout is a shorthand for setting flex properties on children.
   * "|---|-|" - First child expands, others shrink
   * "|-|---|" - Last child expands, others shrink
   * "|-|-|-|" - All children expand equally
   * "|<--->|" - Justify content: space-between
   * "|<->|<->|" - Justify content: space-around
   */
  layout?: "|---|-|" | "|-|---|" | "|-|-|-|" | "|<--->|" | "|<->|<->|"
  /**
   * Padding is a shorthand for setting padding on the x and y axis.
   * [x, y]
   */
  padding?: [x: number | undefined, y: number | undefined]
}

export function Stack(props: StackProps): ReactNode {
  const {
    jss,
    as: Component = "div",
    ref,
    style,
    gap = 1,
    direction = "column",
    justifyContent = "flex-start",
    alignItems = "flex-start",
    display = "flex",
    layout,
    ...rest
  } = props

  const gapInPx = system.unit.px(gap)
  const jssFromProps = Array.isArray(jss) ? jss : [jss]
  const styleProps = { ...style }
  const layoutProps = (layout && layoutCSS?.[layout]) ?? undefined
  const [paddingX, paddingY] = props.padding ?? [0, 0]

  const cssProperties = {
    "--stackDisplay": display,
    "--stackGap": gapInPx,
    "--stackJustifyContent": justifyContent,
    "--stackAlignItems": alignItems,
    "--paddingX": paddingX ? system.unit.px(paddingX) : undefined,
    "--paddingY": paddingY ? system.unit.px(paddingY) : undefined,
  } as CSSProperties

  return (
    <Component
      css={[
        direction === "column" ? stackColumnCSS : stackRowCSS,
        layoutProps,
        jssFromProps,
      ]}
      ref={ref}
      {...rest}
      style={{
        ...cssProperties,
        ...styleProps,
      }}
    />
  )
}
