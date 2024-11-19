import { css, SerializedStyles } from "@emotion/react"

export const layoutCSS: Record<string, SerializedStyles> = {
  "|---|-|": css({
    "& > :first-child": {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: "0%",
    },
    "& > :not(:first-child)": {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: "auto",
    },
  }),
  "|-|---|": css({
    "& > :last-child": {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: "0%",
    },
    "& > :not(:last-child)": {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: "auto",
    },
  }),
  "|-|-|-|": css({
    "& > *": {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: "0%",
    },
  }),
  "|<--->|": css({
    justifyContent: "space-between",
    "& > *": {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: "auto",
    },
  }),
  "|<->|<->|": css({
    justifyContent: "space-around",
    "& > *": {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: "auto",
    },
  }),
  default: css({
    "& > *": {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: "auto",
    },
  }),
}
