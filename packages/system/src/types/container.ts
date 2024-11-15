export type ContainerIdentifier = "container"

export type ContainerDefinition<S extends Array<string>> = {
  container: S
}
