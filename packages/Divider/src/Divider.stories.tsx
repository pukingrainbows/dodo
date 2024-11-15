import {
  CSSGlobal,
  For,
  Stack,
  systemDefinition,
} from "@pukingrainbows-ui/system"
import { ReactNode } from "react"
import { Divider } from "./Divider"

export default {
  title: "Components/Divider",
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

export const _Horizontal = () => {
  return (
    <Story>
      <Stack gap={2} jss={{ width: "100%" }}>
        <For
          items={systemDefinition.appearance}
          render={(appearance) => {
            return <Divider key={appearance} appearance={appearance} />
          }}
        />
      </Stack>
    </Story>
  )
}

export const _Horizontal_left = () => {
  return (
    <Story>
      <Stack gap={2} jss={{ width: "100%" }}>
        <For
          items={systemDefinition.appearance}
          render={(appearance) => {
            return (
              <Divider
                title="Baby orca"
                titleAlignment="left"
                key={appearance}
                appearance={appearance}
              />
            )
          }}
        />
      </Stack>
    </Story>
  )
}

export const _Horizontal_center = () => {
  return (
    <Story>
      <Stack gap={2} jss={{ width: "100%" }}>
        <For
          items={systemDefinition.appearance}
          render={(appearance) => {
            return (
              <Divider
                title="Baby orca"
                titleAlignment="center"
                key={appearance}
                appearance={appearance}
              />
            )
          }}
        />
      </Stack>
    </Story>
  )
}

export const _Horizontal_right = () => {
  return (
    <Story>
      <Stack gap={2} jss={{ width: "100%" }}>
        <For
          items={systemDefinition.appearance}
          render={(appearance) => {
            return (
              <Divider
                title="Baby orca"
                titleAlignment="right"
                key={appearance}
                appearance={appearance}
              />
            )
          }}
        />
      </Stack>
    </Story>
  )
}

export const _Vertical = () => {
  return (
    <Story>
      <Stack gap={2}>
        <For
          items={systemDefinition.appearance}
          render={(appearance) => {
            return (
              <Stack key={appearance} jss={{ height: "40px" }}>
                <Divider appearance={appearance} direction="vertical" />
              </Stack>
            )
          }}
        />
      </Stack>
    </Story>
  )
}
