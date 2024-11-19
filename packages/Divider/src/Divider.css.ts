import { css } from "@emotion/react"

export const dividerCSS = css({
  width: "var(--dividerWidth)",
  height: "var(--dividerHeight)",
  background: "transparent",
  display: "block",
  border: "1px solid transparent",
  backgroundColor: "transparent",
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: "var(--padding)",
  paddingBottom: "var(--padding)",
  position: "relative",
  left: "-1px",
  "&:after": {
    content: "''",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "var(--borderColor)",
  },
  "&:before": {
    content: "attr(data-title)",
    position: "absolute",
    left: "var(--left)",
    top: "50%",
    transform: "translate(var(--transformX), -50%)",
    width: "fit-content",
    padding: ".05em 0.5em",
    backdropFilter: "blur(var(--blur-filter))",
    textWrap: "nowrap",
  },
})
