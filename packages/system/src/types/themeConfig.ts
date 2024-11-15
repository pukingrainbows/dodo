import { SerializedStyles } from "@emotion/react"
import { PukingRainbowsSystem } from "../modules/System.js"
import type { PukingRainbowsDefinitions } from "./config.ts"
import type {
  AccentColor,
  BackgroundColor,
  Color,
  FontFamily,
  ScaleFactor,
  Unit,
} from "./property.ts"
import type { KebabCase } from "./stringBuilder.ts"
export type ThemeIdentifier = "theme"
export type ThemeConfig<Definitions extends PukingRainbowsDefinitions> = {
  [K in KebabCase<ThemeIdentifier, BackgroundColor>]: (
    system: PukingRainbowsSystem<Definitions>,
  ) => SerializedStyles
} & {
  [K in KebabCase<ThemeIdentifier, Color>]: (
    system: PukingRainbowsSystem<Definitions>,
  ) => SerializedStyles
} & {
  [K in KebabCase<ThemeIdentifier, AccentColor>]: (
    system: PukingRainbowsSystem<Definitions>,
  ) => SerializedStyles
} & {
  [K in KebabCase<ThemeIdentifier, ScaleFactor>]?: (
    system: PukingRainbowsSystem<Definitions>,
  ) => SerializedStyles
} & {
  [K in KebabCase<ThemeIdentifier, Unit>]?: (
    system: PukingRainbowsSystem<Definitions>,
  ) => SerializedStyles
} & {
  [K in KebabCase<ThemeIdentifier, FontFamily>]?: (
    system: PukingRainbowsSystem<Definitions>,
  ) => SerializedStyles
}
