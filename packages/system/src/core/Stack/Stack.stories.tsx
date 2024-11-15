import { Stack } from "./Stack"

export default {
  title: "Core/Stack",
}

export function _Stack_Column() {
  return (
    <Stack>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Stack>
  )
}

export function _Stack_Row() {
  return (
    <Stack direction="row">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Stack>
  )
}
