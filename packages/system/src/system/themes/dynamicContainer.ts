import { css } from "@emotion/react"
import type { DynamicContainer } from "../../types/dynamicTypes"
import type { Definition } from "../Definition"

export const containers: DynamicContainer<Definition> = {
  "container-outlined": () => {
    return css({
      backgroundColor: "transparent",
      borderColor: "var(--borderColor)",
      borderStyle: "solid",
      borderWidth: "var(--borderWidth, 1px)",
      color: "var(--color)",
      display: "inline-flex",
      "&:hover": {
        textDecoration: "underline",
      },
    })
  },
  "container-contained": () => {
    return css({
      backgroundColor: "var(--backgroundColor)",
      borderColor: "var(--borderColor)",
      borderStyle: "solid",
      borderWidth: "var(--borderWidth, 1px)",
      color: "var(--color)",
      display: "inline-flex",
    })
  },
  "container-ghost": () => {
    return css({
      backgroundColor: "transparent",
      borderColor: "transparent",
      borderStyle: "solid",
      borderWidth: "var(--borderWidth, 1px)",
      color: "var(--color)",
      display: "inline-flex",
      "&:hover": {
        textDecoration: "underline",
      },
    })
  },
  "container-icon": () => {
    return css({
      display: "inline-flex",
      position: "relative",
      aspectRatio: 1 / 1,
      padding: 0,
      width: "0.825em",
      height: "0.825em",
      backgroundColor: "transparent",
      borderColor: "transparent",
      borderStyle: "solid",
      borderWidth: "var(--borderWidth, 1px)",
      "& .glyph": {
        left: 0,
        top: 0,
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "var(--font-size)",
        letterSpacing: "0",
        fontWeight: 700,
      },
    })
  },
  "container-pill": () => {
    return css({
      backgroundColor: "var(--backgroundColor)",
      borderColor: "var(--borderColor)",
      borderStyle: "solid",
      borderWidth: "var(--borderWidth, 1px)",
      color: "var(--color)",
      display: "inline-flex",
      borderRadius: "9999px",
    })
  },
}
