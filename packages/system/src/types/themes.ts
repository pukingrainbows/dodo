export type ThemeIdentifier = "themes"

export type ThemeDefinition<Theme extends Array<string>> = {
  themes: Theme
}
