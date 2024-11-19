import { Atom, AtomProps } from "@pukingrainbows-ui/system"
import { glyphCSS } from "./Glyph.css"
import { Icon } from "./Icon"

interface GlyphBase extends AtomProps<HTMLSpanElement> {
  a11yText: string
  appearance?: AtomProps["appearance"]
}

interface EmojiProps {
  emoji: string
  icon?: never
}

interface IconProps {
  icon: Icon
  emoji?: never
}

export type GlyphProps = GlyphBase & (EmojiProps | IconProps)
export function Glyph(props: GlyphProps) {
  const { icon, emoji, a11yText, jss, container = "icon", ...moreProps } = props

  if (!a11yText) {
    throw new Error("You must provide an `a11yText` prop for accessibility.")
  }

  const glyphClassName = icon
    ? "glyph material-symbols-rounded"
    : "glyph noto-color-emoji-regular"

  const child = icon ? icon : emoji

  return (
    <Atom
      as="span"
      container={container}
      className={glyphClassName}
      jss={[glyphCSS, jss]}
      {...moreProps}
      style={{ fontSize: "var(--font-size)", lineHeight: 1 }}
      role="img"
      aria-hidden="true"
      aria-label={a11yText}
    >
      <span className="glyph">{child}</span>
    </Atom>
  )
}
