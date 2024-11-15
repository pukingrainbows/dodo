import type { PukingRainbowPaletteValue } from "./palette.ts"

type AngleUnit = "deg" | "grad" | "rad" | "turn"
type Angle = `${number}${AngleUnit}`

type SideOrCorner =
  | "to top"
  | "to bottom"
  | "to left"
  | "to right"
  | "to top left"
  | "to top right"
  | "to bottom left"
  | "to bottom right"

// Gradient line can be either an angle or a side-or-corner
type GradientLine = Angle | SideOrCorner

// Define types for length and percentage units
type LengthUnit = "px" | "em" | "rem" | "vw" | "vh"
type PercentageUnit = "%"

type Length = `${number}${LengthUnit}`
type Percentage = `${number}${PercentageUnit}`
type LengthPercentage = Length | Percentage

// Define a type for color stops
type ColorStop<P extends Record<string, string>> =
  `${PukingRainbowPaletteValue<P>}${"" | ` ${LengthPercentage}`}`

// The linearGradientSyntax can be an array starting with an optional GradientLine,
// followed by at least two ColorStops
type LinearGradientSyntax<P extends Record<string, string>> =
  | [GradientLine, ColorStop<P>, ColorStop<P>, ...ColorStop<P>[]]
  | [ColorStop<P>, ColorStop<P>, ...ColorStop<P>[]]

// Update your interface with the new type
export interface LinearGradient<P extends Record<string, string>> {
  type: "linear-gradient" | "repeating-linear-gradient"
  linearGradientSyntax: LinearGradientSyntax<P>
}
