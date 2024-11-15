import { Stack } from "@pukingrainbows-ui/system"
import { ReactNode } from "react"
import { buttonGroupHorizontalCSS, buttonGroupVerticalCSS } from "./Group.css"
interface GroupProps {
  children: ReactNode
  direction?: "row" | "column"
}
export function Group(props: GroupProps) {
  const { children, direction = "row" } = props

  return (
    <Stack
      jss={[
        direction === "row" ? buttonGroupHorizontalCSS : buttonGroupVerticalCSS,
      ]}
      gap={0}
      direction={direction}
    >
      {children}
    </Stack>
  )
}
