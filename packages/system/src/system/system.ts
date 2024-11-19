import { PukingRainbowsSystem } from "../modules/System"
import { palette } from "./color"
import type { Definition } from "./Definition"
import { systemDefinition } from "./systemDefinition"
import { appearances } from "./themes/dark/darkDynamicAppearances"
import { interactive } from "./themes/dark/darkDynamicInteractive"
import { level } from "./themes/dark/darkDynamicLevel"
import { typography } from "./themes/dark/darkDynamicTypography"
import { theme } from "./themes/dark/darkThemeConfig"
import { containers } from "./themes/dynamicContainer"
import { sizes } from "./themes/dynamicSize"
import { zMap } from "./themes/dynamicZ"

const system = new PukingRainbowsSystem<Definition>(
  systemDefinition,
  palette,
  zMap,
)

system.registerTheme("dark", {
  ...sizes,
  ...appearances,
  ...containers,
  ...interactive,
  ...zMap,
  ...theme,
  ...level,
  ...typography,
})

export type { Definition } from "./Definition"
export { systemDefinition } from "./systemDefinition"
export { system }
