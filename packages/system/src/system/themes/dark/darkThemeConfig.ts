import { css } from "@emotion/react"
import type { ThemeConfig } from "../../../types/themeConfig"
import type { Definition } from "../../Definition"

export const theme: ThemeConfig<Definition> = {
  "theme-backgroundColor": (system) => {
    const { palette } = system
    return css({
      backgroundColor: palette["black800"],
    })
  },
  "theme-color": (system) => {
    const { palette } = system
    return css({
      color: palette["white300"],
    })
  },
  "theme-accentColor": (system) => {
    const { palette } = system
    return css({
      accentColor: palette["purple300"],
    })
  },
}
