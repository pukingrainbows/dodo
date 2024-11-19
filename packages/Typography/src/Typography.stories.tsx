import { Container } from "@pukingrainbows-ui/container"
import { Divider } from "@pukingrainbows-ui/divider"
import { CSSGlobal, For, Stack } from "@pukingrainbows-ui/system"
import { Fragment, ReactNode } from "react"
import { Typography, TypographyProps } from "./Typography"
export default {
  title: "Components/Typography",
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

const sizes: TypographyProps["type"][] = [
  "size1",
  "size1:subtitle",
  "size2",
  "size2:subtitle",
  "size3",
  "size4",
  "size5",
  "size6",
  "large",
  "medium",
  "small",
  "caption",
]
export const _Typography = () => {
  return (
    <Story>
      <Stack gap={2} padding={[0, 2]}>
        <Container gap={0} padding={[0, 0]}>
          <For
            items={sizes}
            render={(type, index) => {
              return (
                <Fragment key={type}>
                  <Container.Item padding={[3, 3]}>
                    <Stack>
                      <Typography as="span" type="small" color="grey400">
                        {type}
                      </Typography>
                      <Typography type={type}>
                        Haec ego non multis (scribo), sed tibi: satis enim
                        magnum alter alteri theatrum sumus.
                      </Typography>
                    </Stack>
                  </Container.Item>
                  {index < sizes.length - 1 && <Divider />}
                </Fragment>
              )
            }}
          />
        </Container>
        <Container
          padding={[3, 3]}
          level="level-2"
          borderColor={null}
          alignItems="center"
          justifyContent="center"
        >
          <Stack
            gap={3}
            layout="|-|-|-|"
            jss={{ maxWidth: "1280px" }}
            direction="row"
          >
            <Stack gap={3}>
              <Stack>
                <Typography type="caption" color="grey400">
                  size1
                </Typography>
                <Typography type="size1">
                  Whereas a common understanding of these rights and freedoms is
                </Typography>
              </Stack>
              <Stack>
                <Typography type="caption" color="grey400">
                  size2
                </Typography>
                <Typography type="size2">
                  No one shall be held in slavery or servitude; slavery and the
                  slave trade shall be prohibited in all their forms.
                </Typography>
              </Stack>
              <Stack>
                <Typography type="caption" color="grey400">
                  size3
                </Typography>
                <Typography type="size3">
                  Everyone has the right to an effective remedy by the competent
                  national tribunals for acts violating the fundamental rights
                  granted him by the constitution or by law.
                </Typography>
              </Stack>
            </Stack>
            <Stack gap={3}>
              <Stack>
                <Typography type="caption" color="grey400">
                  medium
                </Typography>
                <Typography type="medium">
                  No one shall be subjected to arbitrary arrest, detention or
                  exile. Everyone is entitled in full equality to a fair and
                  public hearing by an independent and impartial tribunal, in
                  the determination of his rights and obligations and of any
                  criminal charge against him. No one shall be subjected to
                  arbitrary interference with his privacy, family, home or
                  correspondence, nor to attacks upon his honour and reputation.
                  Everyone has the right to the protection of the law against
                  such interference or attacks.
                </Typography>
              </Stack>
              <Stack>
                <Typography type="caption" color="grey400">
                  small
                </Typography>
                <Typography type="small">
                  Everyone has the right to freedom of thought, conscience and
                  religion; this right includes freedom to change his religion
                  or belief, and freedom, either alone or in community with
                  others and in public or private, to manifest his religion or
                  belief in teaching, practice, worship and observance. Everyone
                  has the right to freedom of opinion and expression; this right
                  includes freedom to hold opinions without interference and to
                  seek, receive and impart information and ideas through any
                  media and regardless of frontiers. Everyone has the right to
                  rest and leisure, including reasonable limitation of working
                  hours and periodic holidays with pay.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Story>
  )
}
