import { CSSGlobal, Stack } from "@pukingrainbows-ui/system"
import { ReactNode } from "react"
import { Glyph } from "./Glyph"
export default {
  title: "components/Glyph",
}

interface StoryProps {
  children: ReactNode
}
const Story = (props: StoryProps) => {
  return (
    <>
      <CSSGlobal />
      {props.children}
    </>
  )
}

export const _Icon = () => {
  return (
    <Story>
      <Stack direction="row">
        <Glyph a11yText="expand" icon="arrow_right" size="large" />
        <Glyph a11yText="collapse" icon="arrow_downward" size="large" />
      </Stack>
    </Story>
  )
}

export const _Emoji = () => {
  return (
    <Story>
      <Stack direction="row">
        <Glyph a11yText="an ice cream" emoji="🍦" size="large" />
        <Glyph a11yText="an face in love" emoji="🥰" size="large" />
      </Stack>
    </Story>
  )
}
