import { css } from "@emotion/react"
import type { DynamicSize } from "../../types/dynamicTypes"
import type { Definition } from "../Definition"

const sizeLarge = () => {
  return css({
    "--borderRadius": "initial",
    "--borderWidth": "initial",
    "--font-size": "initial",
    "--line-height": "initial",
    "--paddingX": "initial",
    "--paddingY": "initial",
    "--gap": "initial",
    boxSizing: "border-box",
    borderWidth: "var(--borderWidth, 1px)",
    fontSize: "var(--font-size, 1.25rem)",
    lineHeight: "var(--line-height, 1.25rem)",
    padding: `var(--paddingY, 8px) var(--paddingX, 8px)`,
    borderRadius: "var(--borderRadius, 4px)",
    gap: "var(--gap, 6px)",
  })
}

const sizeMedium = () => {
  return css({
    "--borderRadius": "initial",
    "--borderWidth": "initial",
    "--font-size": "initial",
    "--line-height": "initial",
    "--paddingX": "initial",
    "--paddingY": "initial",
    "--gap": "initial",
    boxSizing: "border-box",
    borderWidth: "var(--borderWidth, 1px)",
    fontSize: "var(--font-size, 1.125rem)",
    lineHeight: "var(--line-height, 1.125rem)",
    padding: `var(--paddingY, 6px) var(--paddingX, 6px)`,
    borderRadius: "var(--borderRadius, 4px)",
    gap: "var(--gap, 4px)",
  })
}

const sizeSmall = () => {
  return css({
    "--borderRadius": "initial",
    "--borderWidth": "initial",
    "--font-size": "initial",
    "--line-height": "initial",
    "--paddingX": "initial",
    "--paddingY": "initial",
    "--gap": "initial",
    boxSizing: "border-box",
    borderWidth: "var(--borderWidth, 1px)",
    fontSize: "var(--font-size, 0.925rem)",
    lineHeight: "var(--line-height, 0.925rem)",
    padding: `var(--paddingY, 4px) var(--paddingX, 4px)`,
    borderRadius: "var(--borderRadius, 4px)",
    gap: "var(--gap, 2px)",
  })
}

const sizeCircleLarge = () => {
  return css({
    "--borderWidth": "initial",
    "--font-size": "initial",
    "--paddingY": "initial",
    boxSizing: "border-box",
    borderWidth: "var(--borderWidth, 1px)",
    fontSize: "var(--font-size, 1.25rem)",
    lineHeight: "var(--font-size, 1.25rem)",
    padding: `var(--paddingY, 4px)`,
    borderRadius: "50%",
    aspectRatio: "1/1",
  })
}

const sizeCircleMedium = () => {
  return css({
    "--borderWidth": "initial",
    "--font-size": "initial",
    "--paddingY": "initial",
    boxSizing: "border-box",
    borderWidth: "var(--borderWidth, 1px)",
    fontSize: "var(--font-size, 1.125rem)",
    lineHeight: "var(--line-height, 1.125rem)",
    padding: `var(--paddingY, 3px)`,
    borderRadius: "50%",
    aspectRatio: "1/1",
  })
}

const sizeCircleSmall = () => {
  return css({
    boxSizing: "border-box",
    borderWidth: "var(--borderWidth, 1px)",
    fontSize: "var(--font-size, 0.925rem)",
    lineHeight: "var(--line-height, 0.925rem)",
    padding: `var(--paddingY, 2px)`,
    borderRadius: "50%",
    aspectRatio: "1/1",
  })
}
export const sizes: DynamicSize<Definition> = {
  "size-large": sizeLarge,
  "size-medium": sizeMedium,
  "size-small": sizeSmall,
  "size-circleSmall": sizeCircleSmall,
  "size-circleMedium": sizeCircleMedium,
  "size-circleLarge": sizeCircleLarge,
}
