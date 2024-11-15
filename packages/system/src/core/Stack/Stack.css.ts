import { css } from "@emotion/react"

const variableCSS = {
  display: "var(--stack-display)",
  gap: "var(--stack-gap)",
  alignItems: "var(--stack-align-items)",
  justifyContent: "var(--stack-justify-content)",
}
export const stackColumnCSS = css({
  flexDirection: "column",
  ...variableCSS,
})

export const stackRowCSS = css({
  flexDirection: "row",
  ...variableCSS,
})
