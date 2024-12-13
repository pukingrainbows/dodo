import { Divider } from "@pukingrainbows-ui/divider"
import { Glyph } from "@pukingrainbows-ui/glyph"
import {
  CSSGlobal,
  For,
  Stack,
  system,
  systemDefinition,
} from "@pukingrainbows-ui/system"
import { ReactNode } from "react"
import { Button } from "./Button"
import { Group } from "./Group"
const __TEXT_BUTTON__ = "Baby orca"
export default {
  title: "Components/Button",
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

export const _Button = () => {
  return (
    <Story>
      <Divider space={3} title="Button sizes" />
      <Stack>
        <Stack direction="row">
          <For
            items={systemDefinition.appearance}
            render={(appearance) => {
              return (
                <Button key={appearance} size="large" appearance={appearance}>
                  {__TEXT_BUTTON__}
                </Button>
              )
            }}
          />
        </Stack>
        <Stack direction="row">
          <For
            items={systemDefinition.appearance}
            render={(appearance) => {
              return (
                <Button key={appearance} appearance={appearance}>
                  {__TEXT_BUTTON__}
                </Button>
              )
            }}
          />
        </Stack>
        <Stack direction="row">
          <For
            items={systemDefinition.appearance}
            render={(appearance) => {
              return (
                <Button key={appearance} size="small" appearance={appearance}>
                  {__TEXT_BUTTON__}
                </Button>
              )
            }}
          />
        </Stack>
      </Stack>
      <Divider title="Button with icons" space={3} />
      <Stack>
        <Stack direction="row">
          <For
            items={systemDefinition.appearance}
            render={(appearance) => {
              return (
                <Button size="large" key={appearance} appearance={appearance}>
                  <Glyph icon="thumb_up" a11yText="thumb up" />
                  {__TEXT_BUTTON__}
                </Button>
              )
            }}
          />
        </Stack>
        <Stack direction="row">
          <For
            items={systemDefinition.appearance}
            render={(appearance) => {
              return (
                <Button key={appearance} appearance={appearance}>
                  <Glyph icon="thumb_up" a11yText="thumb up" />
                  {__TEXT_BUTTON__}
                </Button>
              )
            }}
          />
        </Stack>
        <Stack direction="row">
          <For
            items={systemDefinition.appearance}
            render={(appearance) => {
              return (
                <Button size="small" key={appearance} appearance={appearance}>
                  <Glyph icon="thumb_up" a11yText="thumb up" />
                  {__TEXT_BUTTON__}
                </Button>
              )
            }}
          />
        </Stack>
      </Stack>
      <Divider title="Button pill" space={3} />
      <Stack>
        <Stack direction="row">
          <For
            items={systemDefinition.appearance}
            render={(appearance) => {
              return (
                <Button
                  size="large"
                  container="pill"
                  key={appearance}
                  appearance={appearance}
                >
                  {__TEXT_BUTTON__}
                </Button>
              )
            }}
          />
        </Stack>
        <Stack direction="row">
          <For
            items={systemDefinition.appearance}
            render={(appearance) => {
              return (
                <Button
                  container="pill"
                  key={appearance}
                  appearance={appearance}
                >
                  {__TEXT_BUTTON__}
                </Button>
              )
            }}
          />
        </Stack>
        <Stack direction="row">
          <For
            items={systemDefinition.appearance}
            render={(appearance) => {
              return (
                <Button
                  size="small"
                  container="pill"
                  key={appearance}
                  appearance={appearance}
                >
                  {__TEXT_BUTTON__}
                </Button>
              )
            }}
          />
        </Stack>
      </Stack>
      <Divider title="Buttons circle" space={3} />
      <Stack gap={1}>
        <Stack direction="row" alignItems="center">
          <Button size="circleLarge">
            <Glyph icon="close" a11yText="close"></Glyph>
          </Button>
          <Button size="circleMedium">
            <Glyph icon="close" a11yText="close"></Glyph>
          </Button>
          <Button size="circleSmall">
            <Glyph icon="close" a11yText="close"></Glyph>
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Button size="circleLarge">
            <Glyph icon="more_horiz" a11yText="more"></Glyph>
          </Button>
          <Button size="circleMedium">
            <Glyph icon="more_horiz" a11yText="more"></Glyph>
          </Button>
          <Button size="circleSmall">
            <Glyph icon="more_horiz" a11yText="more"></Glyph>
          </Button>
        </Stack>
      </Stack>
      <Divider title="Buttons Group" space={3} />
      <Stack>
        <Group>
          <Button size="large">Baby orca 1</Button>
          <Button size="large">Baby orca 2</Button>
          <Button size="large">Baby orca 3</Button>
        </Group>
        <Group>
          <Button>Baby orca 1</Button>
          <Button>Baby orca 2</Button>
          <Button>Baby orca 3</Button>
        </Group>
        <Group>
          <Button size="small">Baby orca 1</Button>
          <Button size="small">Baby orca 2</Button>
          <Button size="small">Baby orca 3</Button>
        </Group>
        <Group>
          <Button size="large">
            <Glyph icon="mail" a11yText="email" />
          </Button>
          <Button size="large">
            <Glyph icon="bookmark" a11yText="bookmarks" />
          </Button>
          <Button size="large">
            <Glyph icon="history" a11yText="history" />
          </Button>
        </Group>
        <Group>
          <Button size="large">
            <Glyph emoji="🥶" a11yText="cold" />
          </Button>
          <Button size="large">
            <Glyph emoji="🥵" a11yText="hot" />
          </Button>
        </Group>
        <Group>
          <Button size="large">baby orca</Button>
          <Button
            size="large"
            jss={{
              "--backgroundColor": system.color("grey300"),
              "--color": system.color("grey900"),
              "&:hover": {
                "--backgroundColor": system.color("grey500"),
                "--borderColor": system.color("grey300"),
                "--color": system.color("grey200"),
              },
              "&:active": {
                "--backgroundColor": system.color("grey700"),
                "--borderColor": system.color("grey400"),
                "--color": system.color("grey300"),
              },
            }}
          >
            <Glyph icon="send_money" a11yText="send" />
          </Button>
        </Group>
        <Stack direction="row">
          <Group>
            <Button appearance="primary">
              <Glyph icon="pause" a11yText="pause" />
            </Button>
            <Button>Pause</Button>
          </Group>
          <Group>
            <Button>Next</Button>
            <Button appearance="primary">
              <Glyph icon="arrow_right_alt" a11yText="next" />
            </Button>
          </Group>
        </Stack>
      </Stack>
      <Divider title="Button Group Vertical" space={3} />
      <Stack>
        <Group direction="column">
          <Button size="large">Baby orca 1</Button>
          <Button size="large">Baby orca 2</Button>
          <Button size="large">Baby orca 3</Button>
        </Group>
        <Group direction="column">
          <Button>Baby orca 1</Button>
          <Button>Baby orca 2</Button>
          <Button>Baby orca 3</Button>
        </Group>
        <Group direction="column">
          <Button size="small">Baby orca 1</Button>
          <Button size="small">Baby orca 2</Button>
          <Button size="small">Baby orca 3</Button>
        </Group>
        <Group direction="column">
          <Button size="large">
            <Glyph icon="mail" a11yText="email" />
          </Button>
          <Button size="large">
            <Glyph icon="bookmark" a11yText="bookmarks" />
          </Button>
          <Button size="large">
            <Glyph icon="history" a11yText="history" />
          </Button>
        </Group>
        <Group direction="column">
          <Button size="large">
            <Glyph emoji="🥶" a11yText="cold" />
          </Button>
          <Button size="large">
            <Glyph emoji="🥵" a11yText="hot" />
          </Button>
        </Group>
      </Stack>
    </Story>
  )
}
