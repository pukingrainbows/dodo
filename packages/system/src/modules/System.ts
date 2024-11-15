import type { Definition } from "../system/Definition.ts"
import type {
  PukingRainbowsDefinitions,
  PukingRainbowsSystemDefinition,
} from "../types/config"
import type { ThemeClasses } from "../types/themeClasses"
import type { ZDefinitionMap } from "../types/z"

/**
 * @description A Fully typed and Agnostic UI System. It Allows you to create a cohesive visual narrative for your application
 *
 * @example
 * const system = new PukingRainbowsSystem(config, palette)
 * system.registerTheme("dark", {
 *  "size-small": (system) => css`font-size: ${system.unit(12)};`,
 *  "size-medium": (system) => css`font-size: ${system.unit(16)};`,
 *  "size-large": (system) => css`font-size: ${system.unit(20)};`,
 *  ...
 * })
 *
 * system.theme = "dark"
 * system.getColor("black300")
 */

export class PukingRainbowsSystem<
  Definitions extends PukingRainbowsDefinitions,
> {
  private themes: { [key: string]: ThemeClasses<Definitions> } = {}
  #system: PukingRainbowsSystemDefinition<Definitions>
  #theme: string
  #palette: Definition["palette"]
  #z: ZDefinitionMap<Definition["z"]>
  #rootScaleFactor: number

  constructor(
    config: PukingRainbowsSystemDefinition<Definitions>,
    palette: Definition["palette"],
    z: ZDefinitionMap<Definitions["z"]>,
  ) {
    this.#system = config
    this.#palette = palette
    this.#z = z
    this.#theme = config.themes[0]
    this.#rootScaleFactor = config.rootScaleFactor
  }

  get unit() {
    return {
      px: (value: number) => {
        return `${value * this.#rootScaleFactor}px`
      },
      rem: (value: number) => {
        return `${value * 16}rem`
      },
    }
  }

  get palette(): Definition["palette"] {
    return this.#palette
  }

  color = (value: keyof Definition["palette"]) => {
    return this.palette[value]
  }

  z = (z: Definitions["z"][number]): number => {
    const zValue = z

    if (!zValue || typeof zValue !== "string" || !(zValue in this.#z)) {
      throw new Error(`Z value must be a string`)
    }

    // @ts-expect-error zValue is a string and exists in the z map some, I'm missing an incorrect type here
    return this.#z[zValue]
  }

  get config(): PukingRainbowsSystemDefinition<Definitions> {
    return this.#system
  }

  registerTheme(
    name: Definitions["themes"][number],
    classes: ThemeClasses<Definitions>,
  ) {
    this.themes[name] = classes
  }

  get theme() {
    return this.#theme
  }

  set theme(theme: keyof typeof this.themes) {
    if (!this.themes[theme]) {
      throw new Error(`Theme ${theme} not found`)
    }

    if (typeof theme !== "string") {
      throw new Error(`Theme name must be a string`)
    }

    this.#theme = theme
  }

  getTheme = (name: keyof typeof this.themes): ThemeClasses<Definitions> => {
    return this.themes[name]
  }

  appearance = (value: Definitions["appearance"][number]) => {
    return this.getTheme(this.theme)[`appearance-${value}`]
  }

  size = (value: Definitions["size"][number]) => {
    return this.getTheme(this.theme)[`size-${value}`]
  }

  container = (value: Definitions["container"][number]) => {
    return this.getTheme(this.theme)[`container-${value}`]
  }

  interactive = (value: Definitions["appearance"][number]) => {
    return this.getTheme(this.theme)[`interactive-${value}`]
  }
}
