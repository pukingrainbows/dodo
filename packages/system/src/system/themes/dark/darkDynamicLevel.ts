import { css } from "@emotion/react"
import type { DynamicLevels } from "../../../types/dynamicTypes"
import type { Definition } from "../../Definition"

export const level: DynamicLevels<Definition> = {
  "level-level-0": (system) => {
    const { palette } = system
    return css({
      borderWidth: "var(--borderWidth, 1px)",
      borderStyle: "solid",
      borderColor: `var(--borderColor, ${palette["grey600"]})`,
      background: `var(--backgroundColor, ${palette["grey900"]})`,
    })
  },
  "level-level-1": (system) => {
    const { palette } = system
    return css({
      borderWidth: "var(--borderWidth, 1px)",
      borderStyle: "solid",
      borderColor: `var(--borderColor, ${palette["grey600"]})`,
      background: `var(--backgroundColor, ${palette["grey800"]})`,
    })
  },
  "level-level-2": (system) => {
    const { palette } = system
    return css({
      borderWidth: "var(--borderWidth, 1px)",
      borderStyle: "solid",
      borderColor: `var(--borderColor, ${palette["grey600"]})`,
      background: `var(--backgroundColor, ${palette["grey700"]})`,
    })
  },
  "level-level-3": (system) => {
    const { palette } = system
    return css({
      borderWidth: "var(--borderWidth, 1px)",
      borderStyle: "solid",
      borderColor: `var(--borderColor, ${palette["grey600"]})`,
      background: `var(--backgroundColor, ${palette["grey600"]})`,
    })
  },
  "level-level-4": (system) => {
    const { palette } = system
    return css({
      borderWidth: "var(--borderWidth, 1px)",
      borderStyle: "solid",
      borderColor: `var(--borderColor, ${palette["grey600"]})`,
      background: `var(--backgroundColor, ${palette["grey500"]})`,
    })
  },
  "level-level-5": (system) => {
    const { palette } = system
    return css({
      borderWidth: "var(--borderWidth, 1px)",
      borderStyle: "solid",
      borderColor: `var(--borderColor, ${palette["grey600"]})`,
      background: `var(--backgroundColor, ${palette["grey400"]})`,
    })
  },
}
