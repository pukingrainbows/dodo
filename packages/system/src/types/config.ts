import type {
  AppearanceDefinition,
  AppearanceIdentifier,
} from "./appearance.ts"
import type { ContainerDefinition, ContainerIdentifier } from "./container"
import type { LevelDefinition, LevelIdentifier } from "./levels"
import type { PaletteDefinition, PaletteIdentifier } from "./palette"
import type { RootDefinition } from "./root"
import type { SizeDefinition, SizeIdentifier } from "./size"
import type { ThemeDefinition, ThemeIdentifier } from "./themes"
import type { ZDefinition, ZIdentifier } from "./z"

type PukingRainbowsRootConfig = RootDefinition
type PukingRainbowsSizeConfig<S extends Array<string>> = SizeDefinition<S>
type PukingRainbowsContainerConfig<C extends Array<string>> =
  ContainerDefinition<C>
type PukingRainbowsAppearanceConfig<A extends Array<string>> =
  AppearanceDefinition<A>

type PukingRainbowsZConfig<Z extends ReadonlyArray<string>> = ZDefinition<Z>

type PukingRainbowsThemeConfig<Theme extends Array<string>> =
  ThemeDefinition<Theme>

type PukingRainbowsPaletteConfig<P extends Record<string, string>> =
  PaletteDefinition<P>

type PukingRainbowsLevelConfig<L extends ReadonlyArray<string>> =
  LevelDefinition<L>

export type PukingRainbowsDefinitions = {
  [K in SizeIdentifier]: Array<string>
} & { [K in ContainerIdentifier]: Array<string> } & {
  [K in AppearanceIdentifier]: Array<string>
} & { [K in ZIdentifier]: ReadonlyArray<string> } & {
  [K in ThemeIdentifier]: Array<string>
} & {
  [K in PaletteIdentifier]: Record<string, string>
} & {
  [K in LevelIdentifier]: ReadonlyArray<string>
}

export type PukingRainbowsSystemDefinition<
  Definition extends PukingRainbowsDefinitions,
> = PukingRainbowsAppearanceConfig<Definition[AppearanceIdentifier]> &
  PukingRainbowsRootConfig &
  PukingRainbowsSizeConfig<Definition[SizeIdentifier]> &
  PukingRainbowsContainerConfig<Definition[ContainerIdentifier]> &
  PukingRainbowsZConfig<Definition[ZIdentifier]> &
  PukingRainbowsThemeConfig<Definition[ThemeIdentifier]> &
  PukingRainbowsPaletteConfig<Definition[PaletteIdentifier]> &
  PukingRainbowsLevelConfig<Definition[LevelIdentifier]>
