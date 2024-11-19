import type { PukingRainbowsDefinitions } from "./config.ts"
import type {
  DynamicAppearance,
  DynamicContainer,
  DynamicInteractive,
  DynamicLevels,
  DynamicSize,
  DynamicTypography,
} from "./dynamicTypes.ts"
import type { ThemeConfig } from "./themeConfig.ts"

export type ThemeClasses<Definitions extends PukingRainbowsDefinitions> =
  DynamicSize<Definitions> &
    DynamicContainer<Definitions> &
    DynamicAppearance<Definitions> &
    DynamicInteractive<Definitions> &
    DynamicLevels<Definitions> &
    DynamicTypography<Definitions> &
    ThemeConfig<Definitions>
