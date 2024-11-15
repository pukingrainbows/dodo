import { css } from "@emotion/react"

export const buttonGroupHorizontalCSS = css({
  "& [data-pukingrainbows-ui=button]:first-of-type": {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  "& [data-pukingrainbows-ui=button]:last-of-type": {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeftWidth: 0,
  },
  "& [data-pukingrainbows-ui=button]:not(:first-of-type):not(:last-of-type)": {
    borderRadius: 0,
    borderLeftWidth: 0,
  },
})

export const buttonGroupVerticalCSS = css({
  "& [data-pukingrainbows-ui=button]": {
    width: "100%",
  },
  "& [data-pukingrainbows-ui=button]:first-of-type": {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  "& [data-pukingrainbows-ui=button]:last-of-type": {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTopWidth: 0,
  },
  "& [data-pukingrainbows-ui=button]:not(:first-of-type):not(:last-of-type)": {
    borderRadius: 0,
    borderTopWidth: 0,
  },
})
