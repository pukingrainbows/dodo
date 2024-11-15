import { css } from "@emotion/react"
import type { DynamicLevels } from "../../../types/dynamicTypes"
import type { Definition } from "../../Definition"

export const level: DynamicLevels<Definition> = {
  "level-level-1": (system) => {
    const { palette } = system
    return css({
      boxShadow: `0px 4px 8px ${palette["black800"]}`,
    })
  },
  "level-level-2": (system) => {
    const { palette } = system
    return css({
      boxShadow: `0px 8px 16px ${palette["black800"]}`,
    })
  },
  "level-level-3": (system) => {
    const { palette } = system
    return css({
      boxShadow: `0px 12px 24px ${palette["black800"]}`,
    })
  },
  "level-level-4": (system) => {
    const { palette } = system
    return css({
      boxShadow: `0px 16px 32px ${palette["black800"]}`,
    })
  },
  "level-level-5": (system) => {
    const { palette } = system
    return css({
      boxShadow: `0px 20px 40px ${palette["black800"]}`,
    })
  },
}
