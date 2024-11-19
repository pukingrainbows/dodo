import { css } from "@emotion/react"

export const typographyIsVisuallyHiddenCSS = css({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
})

export const typographyEllipsisCSS = css({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
})

// @ts-expect-error - CSSProperties for textAlignment and textTransform are incorrectly defined without supporting css variables
export const typographyCSS = css({
  textAlign: "var(--textAlign, start)",
  fontStyle: "var(--fontStyle, normal)",
  textDecoration: "var(--textDecoration, none)",
  display: "inline-block",
})
