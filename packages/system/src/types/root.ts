import type { ScaleFactor, Unit } from "./property.ts"
import type { CamelCase } from "./stringBuilder.ts"
import type { ScaleFactorValue, UnitValue } from "./unit.ts"

// {
//   [K in CamelCase<"root", Width>]:
//     | "100%"
//     | "100dvw"
//     | "100vw"
//     | "100lvw"
//     | "100svw"
// } & {
//   [K in CamelCase<"root", Height>]:
//     | "100%"
//     | "100dvh"
//     | "100vh"
//     | "100lvh"
//     | "100svh"
// } & {
//   [K in CamelCase<"root", BackgroundColor>]:
//     | PukingRainbowPaletteValue
//     | LinearGradient
// } & { [K in CamelCase<"root", Color>]: PukingRainbowPaletteValue } & {
//   [K in CamelCase<"root", FontFamily>]: string
// } & { [K in CamelCase<"root", FontSize>]: number } & {
//   [K in CamelCase<"root", LineHeight>]: LineHeighValue
// } & { [K in CamelCase<"root", LetterSpacing>]: LetterSpacingValue } & {
//   [K in CamelCase<"root", FocusRingColor>]: PukingRainbowPaletteValue
// } & {
//   [K in CamelCase<"root", Padding | Margin>]: [
//     top: number,
//     right: number,
//     bottom: number,
//     left: number,
//   ]
// } &

export type RootDefinition = {
  [K in CamelCase<"root", ScaleFactor>]: ScaleFactorValue
} & { [K in CamelCase<"root", Unit>]: UnitValue }
