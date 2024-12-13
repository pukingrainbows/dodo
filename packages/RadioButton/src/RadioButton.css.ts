import { css } from "@emotion/react"

export const radioButtonCSS = css({
  width: "1em",
  height: "1em",
  border: "0.15em solid var(--borderColor, currentColor)",
  position: "relative",
  cursor: "pointer",
  backgroundColor: "transparent",
  ":after": {},
  ":checked::before": {
    content: '""',
    font: "inherit",
    width: "0.35em",
    height: "0.35em",
    border: "1px solid transparent",
    borderRadius: "50%",
    position: "absolute",
    backgroundColor: "var(--backgroundColor, currentColor)",
    left: "50%",
    transform: "translate(-50%, -50%)",
    top: "50%",
  },
})
