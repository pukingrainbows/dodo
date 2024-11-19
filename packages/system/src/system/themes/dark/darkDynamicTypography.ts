import { css } from "@emotion/react"
import type { DynamicTypography } from "../../../types/dynamicTypes"
import type { Definition } from "../../Definition"

export const typography: DynamicTypography<Definition> = {
  "typography-caption": (system) => {
    const { palette } = system
    // @ts-expect-error text-transform incorrect type
    return css({
      fontSize: "var(--fontSize, 12px)",
      fontWeight: "var(--fontWeight, 400)",
      lineHeight: "var(--lineHeight, 1)",
      letterSpacing: "var(--letterSpacing, 0.4px)",
      textTransform: "var(--textTransform, none)",
      textDecoration: "var(--textDecoration, none)",
      color: `var(--color, ${palette["grey300"]})`,
    })
  },
  "typography-size1": (system) => {
    const { palette } = system
    // @ts-expect-error text-transform incorrect type
    return css({
      fontSize: "var(--fontSize, 32px)",
      fontWeight: "var(--fontWeight, 400)",
      lineHeight: "var(--lineHeight, 1.625)",
      letterSpacing: "var(--letterSpacing, 0.4px)",
      textTransform: "var(--textTransform, none)",
      textDecoration: "var(--textDecoration, none)",
      color: `var(--color, ${palette["grey300"]})`,
    })
  },
  "typography-size1:subtitle": (system) => {
    const { palette } = system
    // @ts-expect-error text-transform incorrect type
    return css({
      fontSize: "var(--fontSize, 24px)",
      fontWeight: "var(--fontWeight, 300)",
      lineHeight: "var(--lineHeight, 1.625)",
      letterSpacing: "var(--letterSpacing, 0.4px)",
      textTransform: "var(--textTransform, none)",
      textDecoration: "var(--textDecoration, none)",
      color: `var(--color, ${palette["grey300"]})`,
    })
  },
  "typography-size2": (system) => {
    const { palette } = system
    // @ts-expect-error text-transform incorrect type
    return css({
      fontSize: "var(--fontSize, 24px)",
      fontWeight: "var(--fontWeight, 500)",
      lineHeight: "var(--lineHeight, 1.425)",
      letterSpacing: "var(--letterSpacing, 0.4px)",
      textTransform: "var(--textTransform, none)",
      textDecoration: "var(--textDecoration, none)",
      color: `var(--color, ${palette["grey300"]})`,
    })
  },
  "typography-size2:subtitle": (system) => {
    const { palette } = system
    // @ts-expect-error text-transform incorrect type
    return css({
      fontSize: "var(--fontSize, 20px)",
      fontWeight: "var(--fontWeight, 300)",
      lineHeight: "var(--lineHeight, 1.425)",
      letterSpacing: "var(--letterSpacing, 0.4px)",
      textTransform: "var(--textTransform, none)",
      textDecoration: "var(--textDecoration, none)",
      color: `var(--color, ${palette["grey300"]})`,
    })
  },
  "typography-size3": (system) => {
    const { palette } = system
    // @ts-expect-error text-transform incorrect type
    return css({
      fontSize: "var(--fontSize, 20px)",
      fontWeight: "var(--fontWeight, 500)",
      lineHeight: "var(--lineHeight, 1.325)",
      letterSpacing: "var(--letterSpacing, 0.4px)",
      textTransform: "var(--textTransform, none)",
      textDecoration: "var(--textDecoration, none)",
      color: `var(--color, ${palette["grey300"]})`,
    })
  },
  "typography-size4": (system) => {
    const { palette } = system
    // @ts-expect-error text-transform incorrect type
    return css({
      fontSize: "var(--fontSize, 18px)",
      fontWeight: "var(--fontWeight, 400)",
      lineHeight: "var(--lineHeight, 1.225)",
      letterSpacing: "var(--letterSpacing, 0.4px)",
      textTransform: "var(--textTransform, none)",
      textDecoration: "var(--textDecoration, none)",
      color: `var(--color, ${palette["grey300"]})`,
    })
  },
  "typography-size5": (system) => {
    const { palette } = system
    // @ts-expect-error text-transform incorrect type
    return css({
      fontSize: "var(--fontSize, 15px)",
      fontWeight: "var(--fontWeight, 500)",
      lineHeight: "var(--lineHeight, 1.15)",
      letterSpacing: "var(--letterSpacing, 0.4px)",
      textTransform: "var(--textTransform, none)",
      textDecoration: "var(--textDecoration, none)",
      color: `var(--color, ${palette["grey300"]})`,
    })
  },
  "typography-size6": (system) => {
    const { palette } = system
    // @ts-expect-error text-transform incorrect type
    return css({
      fontSize: "var(--fontSize, 13px)",
      fontWeight: "var(--fontWeight, 300)",
      lineHeight: "var(--lineHeight, 1.15)",
      letterSpacing: "var(--letterSpacing, 2px)",
      textTransform: "var(--textTransform, uppercase)",
      textDecoration: "var(--textDecoration, none)",
      color: `var(--color, ${palette["grey300"]})`,
    })
  },
  "typography-small": (system) => {
    const { palette } = system
    // @ts-expect-error text-transform incorrect type
    return css({
      fontSize: "var(--fontSize, 14px)",
      fontWeight: "var(--fontWeight, 300)",
      lineHeight: "var(--lineHeight, 1.25)",
      letterSpacing: "var(--letterSpacing, 0.4px)",
      textTransform: "var(--textTransform, none)",
      textDecoration: "var(--textDecoration, none)",
      color: `var(--color, ${palette["grey300"]})`,
    })
  },
  "typography-medium": (system) => {
    const { palette } = system
    // @ts-expect-error text-transform incorrect type
    return css({
      fontSize: "var(--fontSize, 16px)",
      fontWeight: "var(--fontWeight, 300)",
      lineHeight: "var(--lineHeight, 1.25)",
      letterSpacing: "var(--letterSpacing, 0.4px)",
      textTransform: "var(--textTransform, none)",
      textDecoration: "var(--textDecoration, none)",
      color: `var(--color, ${palette["grey300"]})`,
    })
  },
  "typography-large": (system) => {
    const { palette } = system
    // @ts-expect-error text-transform incorrect type
    return css({
      fontSize: "var(--fontSize, 18px)",
      fontWeight: "var(--fontWeight, 300)",
      lineHeight: "var(--lineHeight, 1.25)",
      letterSpacing: "var(--letterSpacing, 0.4px)",
      textTransform: "var(--textTransform, none)",
      textDecoration: "var(--textDecoration, none)",
      color: `var(--color, ${palette["grey300"]})`,
    })
  },
}
