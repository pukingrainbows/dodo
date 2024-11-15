export type ZIdentifier = "z"

export type ZDefinition<Z extends ReadonlyArray<string>> = {
  z: Z
}

export type ZDefinitionMap<Z extends ReadonlyArray<string>> = {
  [K in Z[number]]: number
}
