import { Button } from "@pukingrainbows-ui/button"
import { Divider } from "@pukingrainbows-ui/divider"
import { Glyph } from "@pukingrainbows-ui/glyph"
import { CSSGlobal, For, Stack } from "@pukingrainbows-ui/system"
import { ReactNode } from "react"
import { Container, ContainerProps } from "./Container"

export default {
  title: "Components/Container",
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

const levels: Array<ContainerProps["level"]> = [
  "level-0",
  "level-1",
  "level-2",
  "level-3",
  "level-4",
  "level-5",
]

export const _Container = () => {
  return (
    <Story>
      <Stack gap={3} jss={{ width: "100%" }}>
        <For
          items={levels}
          render={(level) => {
            return (
              <Container level={level} padding={[2, 2]}>
                Baby orca
              </Container>
            )
          }}
        />
      </Stack>
    </Story>
  )
}

export const _Container_with_appearance = () => {
  return (
    <Story>
      <Stack gap={3} jss={{ width: "100%" }}>
        <Container appearance="info">Baby orca</Container>
        <Container appearance="success">Baby orca</Container>
      </Stack>
    </Story>
  )
}

export const _Container_with_custom_colors = () => {
  return (
    <Story>
      <Container
        borderColor="persimmon300"
        backgroundColor="persimmon700"
        color="persimmon900"
        padding={[1, 1]}
      >
        <Glyph emoji="🐳" a11yText="orca emoji" /> Baby orca
      </Container>
    </Story>
  )
}

export const _Container_with_no_border = () => {
  return (
    <Story>
      <Container borderColor={null} padding={[1, 1]}>
        Baby orca
      </Container>
    </Story>
  )
}

export const _Container_with_no_background = () => {
  return (
    <Story>
      <Container backgroundColor={null} padding={[1, 1]}>
        Baby orca
      </Container>
    </Story>
  )
}

export const _Container_with_item_action = () => {
  return (
    <Story>
      <Divider space={3} title="Layout |---|-|" />
      <Container padding={[1, 1]}>
        <Container.Item layout="|---|-|">
          <Stack jss={{ border: "1px dotted yellow" }}>Baby orca</Stack>
          <Stack direction="row" gap={1} jss={{ border: "1px dotted cyan" }}>
            <Button size="circleMedium">
              <Glyph icon="link" a11yText="link" />
            </Button>
            <Button size="circleMedium">
              <Glyph icon="more_vert" a11yText="more" />
            </Button>
          </Stack>
        </Container.Item>
      </Container>
      <Divider space={3} title="Layout |-|---|" />
      <Container padding={[1, 1]}>
        <Container.Item layout="|-|---|">
          <Stack jss={{ border: "1px dotted cyan" }}>Baby orca</Stack>
          <Stack
            direction="row"
            gap={1}
            jss={{ border: "1px dotted yellow" }}
            justifyContent="flex-end"
          >
            <Button size="circleMedium">
              <Glyph icon="link" a11yText="link" />
            </Button>
            <Button size="circleMedium">
              <Glyph icon="more_vert" a11yText="more" />
            </Button>
          </Stack>
        </Container.Item>
      </Container>
      <Divider space={3} title="Layout |-|-|-|" />
      <Container padding={[1, 1]}>
        <Container.Item layout="|-|-|-|">
          <Stack direction="row" gap={1} jss={{ border: "1px dotted lime" }}>
            <Button>
              <Glyph icon="sunny" a11yText="link" />
              sunny
            </Button>
          </Stack>
          <Stack
            direction="row"
            gap={1}
            justifyContent="center"
            jss={{ border: "1px dotted lime" }}
          >
            <Button>
              <Glyph icon="cloudy_snowing" a11yText="link" />
              cloudy snowing
            </Button>
          </Stack>
          <Stack
            direction="row"
            gap={1}
            justifyContent="flex-end"
            jss={{ border: "1px dotted lime" }}
          >
            <Button>
              <Glyph icon="rainy_light" a11yText="link" />
              rainy light
            </Button>
          </Stack>
        </Container.Item>
      </Container>
      <Divider space={3} title="Layout |<--->|" />
      <Container padding={[1, 1]}>
        <Container.Item layout="|<--->|">
          <Button jss={{ border: "1px dotted lime" }}>
            <Glyph icon="cloudy_snowing" a11yText="link" />
            cloudy snowing
          </Button>
          <Button jss={{ border: "1px dotted lime" }}>
            <Glyph icon="rainy_light" a11yText="link" />
            rainy light
          </Button>
        </Container.Item>
      </Container>
      <Divider space={3} title="Layout |<->|<->|" />
      <Container padding={[1, 1]}>
        <Container.Item layout="|<->|<->|">
          <Button jss={{ border: "1px dotted lime" }}>
            <Glyph icon="cloudy_snowing" a11yText="link" />
            cloudy snowing
          </Button>
          <Button jss={{ border: "1px dotted lime" }}>
            <Glyph icon="snowing_heavy" a11yText="link" />
            snowing heavy
          </Button>
          <Button jss={{ border: "1px dotted lime" }}>
            <Glyph icon="rainy_light" a11yText="link" />
            rainy light
          </Button>
        </Container.Item>
      </Container>
    </Story>
  )
}
