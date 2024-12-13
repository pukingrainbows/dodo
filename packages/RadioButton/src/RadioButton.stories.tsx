import { Container } from "@pukingrainbows-ui/container"
import { CSSGlobal, For, systemDefinition } from "@pukingrainbows-ui/system"
import { ReactNode } from "react"
import { RadioButton } from "./RadioButton"

export default {
  title: "Form/Input/RadioButton",
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

export const _RadioButton = () => {
  return (
    <Story>
      <Container gap={0} padding={[0, 0]}>
        <For
          items={systemDefinition.appearance}
          render={(appearance) => {
            return (
              <RadioButton
                key={appearance}
                appearance={appearance}
                size="medium"
              >
                hello
              </RadioButton>
            )
          }}
        />
      </Container>
    </Story>
  )
}

export const _RadioButtonGroup = () => {
  const animals = ["orca", "dolphin", "whale", "shark"]
  return (
    <Story>
      <Container gap={0} padding={[0, 0]} jss={[{ overflow: "hidden" }]}>
        <For
          items={animals}
          render={(ocean) => {
            return (
              <>
                <RadioButton key={ocean} appearance="default" size="medium">
                  {ocean}
                </RadioButton>
              </>
            )
          }}
        />
      </Container>
    </Story>
  )
}
