import { CSSInterpolation } from "@emotion/css/create-instance"
import { DetailedHTMLProps, ElementType, ReactNode } from "react"
import { PukingRainbowDefinition, system } from "../../"
import { atomCSS } from "./Atom.css"

export interface AtomProps<T = HTMLElement>
  extends DetailedHTMLProps<React.HTMLAttributes<T>, T>,
    Record<string, any> {
  as?: ElementType
  jss?: CSSInterpolation | CSSInterpolation[]
  size?: PukingRainbowDefinition["size"][number]
  appearance?: PukingRainbowDefinition["appearance"][number]
  container?: PukingRainbowDefinition["container"][number]
}

export function Atom(props: AtomProps): ReactNode {
  const {
    size,
    appearance = "default",
    container = "contained",
    jss,
    as: Component = "div",
    color,
    ref,
    ...rest
  } = props

  const sizeCSS = size ? system.size(size)(system) : undefined
  const appearanceCSS = system.appearance(appearance)(system)
  const containerCSS = system.container(container)(system)
  const jssFromProps = Array.isArray(jss) ? jss : [jss]

  return (
    <Component
      css={[atomCSS, sizeCSS, appearanceCSS, containerCSS, jssFromProps]}
      ref={ref}
      {...rest}
    />
  )
}
