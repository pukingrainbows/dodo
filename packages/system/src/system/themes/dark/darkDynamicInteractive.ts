import { css } from "@emotion/react"
import type { DynamicInteractive } from "../../../types/dynamicTypes"
import type { Definition } from "../../Definition"

export const interactive: DynamicInteractive<Definition> = {
  "interactive-default": (system) => {
    const { palette } = system
    return css([
      {
        "&:hover": {
          "--backgroundColor": palette["grey100"],
          "--borderColor": palette["grey500"],
          "--color": palette["grey800"],
        },
        "&:active": {
          "--backgroundColor": palette["grey200"],
          "--borderColor": palette["grey400"],
          "--color": palette["grey900"],
        },
        "&:focus-visible": {
          zIndex: 1,
          position: "relative",
          boxShadow: `0 0 0 4px var(--focus-ring, ${palette["blue400"]})`,
        },
      },
    ])
  },
  "interactive-error": (system) => {
    const { palette } = system
    return css([
      {
        "&:hover": {
          "--backgroundColor": palette["red200"],
          "--borderColor": palette["red500"],
          "--color": palette["red700"],
        },
        "&:active": {
          "--backgroundColor": palette["red300"],
          "--borderColor": palette["red600"],
          "--color": palette["red800"],
        },
        "&:focus-visible": {
          zIndex: 1,
          position: "relative",
          boxShadow: `0 0 0 4px var(--focus-ring, ${palette["blue400"]})`,
        },
      },
    ])
  },
  "interactive-info": (system) => {
    const { palette } = system
    return css([
      {
        "&:hover": {
          "--backgroundColor": palette["blue200"],
          "--borderColor": palette["blue500"],
          "--color": palette["blue700"],
        },
        "&:active": {
          "--backgroundColor": palette["blue300"],
          "--borderColor": palette["blue600"],
          "--color": palette["blue800"],
        },
        "&:focus-visible": {
          zIndex: 1,
          position: "relative",
          boxShadow: `0 0 0 4px var(--focus-ring, ${palette["blue400"]})`,
        },
      },
    ])
  },
  "interactive-primary": (system) => {
    const { palette } = system
    return css([
      {
        "&:hover": {
          "--backgroundColor": palette["purple200"],
          "--borderColor": palette["purple500"],
          "--color": palette["purple700"],
        },
        "&:active": {
          "--backgroundColor": palette["purple300"],
          "--borderColor": palette["purple600"],
          "--color": palette["purple800"],
        },
        "&:focus-visible": {
          zIndex: 1,
          position: "relative",
          boxShadow: `0 0 0 4px var(--focus-ring, ${palette["blue400"]})`,
        },
      },
    ])
  },
  "interactive-success": (system) => {
    const { palette } = system
    return css([
      {
        "&:hover": {
          "--backgroundColor": palette["green200"],
          "--borderColor": palette["green500"],
          "--color": palette["green700"],
        },
        "&:active": {
          "--backgroundColor": palette["green300"],
          "--borderColor": palette["green600"],
          "--color": palette["green800"],
        },
        "&:focus-visible": {
          zIndex: 1,
          position: "relative",
          boxShadow: `0 0 0 4px var(--focus-ring, ${palette["blue400"]})`,
        },
      },
    ])
  },
  "interactive-warning": (system) => {
    const { palette } = system
    return css([
      {
        "&:hover": {
          "--backgroundColor": palette["yellow100"],
          "--borderColor": palette["yellow700"],
          "--color": palette["yellow900"],
        },
        "&:active": {
          "--backgroundColor": palette["yellow300"],
          "--borderColor": palette["yellow600"],
          "--color": palette["yellow800"],
        },
        "&:focus-visible": {
          zIndex: 1,
          position: "relative",
          boxShadow: `0 0 0 4px var(--focus-ring, ${palette["blue400"]})`,
        },
      },
    ])
  },
}
