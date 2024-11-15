export type LevelIdentifier = "level"

export type LevelDefinition<L extends ReadonlyArray<string>> = {
  level: L
}
