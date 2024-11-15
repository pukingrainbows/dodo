import { css } from "@emotion/react"
import type { DynamicAppearance } from "../../../types/dynamicTypes"
import type { Definition } from "../../Definition"

export const appearances: DynamicAppearance<Definition> = {
  "appearance-default": (system) => {
    const { palette } = system
    return css({
      "--backgroundColor": palette["grey700"],
      "--borderColor": palette["grey400"],
      "--color": palette["grey100"],
    })
  },
  "appearance-primary": (system) => {
    const { palette } = system

    return css({
      "--backgroundColor": palette["purple600"],
      "--borderColor": palette["purple800"],
      "--color": palette["purple100"],
    })
  },
  "appearance-success": (system) => {
    const { palette } = system
    return css({
      "--backgroundColor": palette["green600"],
      "--borderColor": palette["green500"],
      "--color": palette["green200"],
    })
  },
  "appearance-error": (system) => {
    const { palette } = system
    return css({
      "--backgroundColor": palette["red400"],
      "--borderColor": palette["red900"],
      "--color": palette["red100"],
    })
  },
  "appearance-info": (system) => {
    const { palette } = system
    return css({
      "--backgroundColor": palette["blue400"],
      "--borderColor": palette["blue900"],
      "--color": palette["blue100"],
    })
  },
  "appearance-warning": (system) => {
    const { palette } = system
    return css({
      "--backgroundColor": palette["yellow800"],
      "--borderColor": palette["yellow500"],
      "--color": palette["yellow100"],
    })
  },
}
