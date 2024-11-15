export type PaletteIdentifier = "palette"
export type PukingRainbowsPalette = Record<string, string>
export type PaletteDefinition<P extends PukingRainbowsPalette> = {
  palette: P
}

export type PukingRainbowPaletteValue<P extends PukingRainbowsPalette> =
  PaletteDefinition<P>["palette"][keyof PaletteDefinition<P>["palette"]]
