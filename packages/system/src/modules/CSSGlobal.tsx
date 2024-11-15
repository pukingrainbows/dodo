import { css, Global } from "@emotion/react"
import { Helmet } from "react-helmet"
import { system } from "../system"

export const styles = css`
  html {
    vertical-align: baseline;
    cursor: default;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  input,
  select,
  button,
  textarea {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: inherit;
    outline: none;
    letter-spacing: inherit;
    -webkit-text-decoration: none;
    text-decoration: none;
    cursor: inherit;
  }

  html,
  body {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    background: ${system.palette.grey900};
    color: ${system.palette.grey100};
    height: 100dvh;
  }

  #root {
    height: 100%;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  svg {
    display: block;
  }

  .svg-wrap path:not([fill="none"]) {
    fill: inherit;
  }

  .svg-wrap path:not([stroke="none"]) {
    stroke: inherit;
  }

  .svg-wrap stop:not([stop-color="none"]) {
    stop-color: var(--color-icon);
  }

  span.svg {
    display: block;
    text-transform: none !important;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  .material-symbols-rounded {
    font-family: "Material Symbols Rounded";
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
  }

  .noto-color-emoji-regular {
    font-family: "Noto Color Emoji", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`

export interface CSSGlobalProps {
  reset?: string
  vars: {
    "--pk-font-family": string
  }
}

export const CSSGlobal = () => {
  return (
    <>
      <Global styles={styles} />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* @ts-expect-error crossorigin is not typescript supported */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&family=Poppins:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </>
  )
}
