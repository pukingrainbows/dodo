import { SerializedStyles } from "@emotion/react"
import type { PukingRainbowsSystem } from "../modules/System.ts"
import type { AppearanceIdentifier } from "./appearance.ts"
import type { PukingRainbowsDefinitions } from "./config.ts"
import type { ContainerIdentifier } from "./container.ts"
import type { InteractiveIdentifier } from "./interactive.ts"
import type { SizeIdentifier } from "./size.ts"
import type { ZIdentifier } from "./z.ts"

/**
 * @description
 * Built by one static value appearance provided by the user
 * • {size}-{UserProvidedSizeValue}
 *
 * @example
 * "size-small"
 */
export type DynamicSize<Definitions extends PukingRainbowsDefinitions> = {
  [K in `size-${Definitions[SizeIdentifier][number]}`]: (
    system: PukingRainbowsSystem<Definitions>,
  ) => SerializedStyles
}

export type DynamicSizeCustomCSSProperties<
  Definitions extends PukingRainbowsDefinitions,
> = {
  [K in `--pk-font-size-${Definitions[SizeIdentifier][number]}`]: string
} & {
  [K in `--pk-border-radius-${Definitions[SizeIdentifier][number]}`]: string
}

export type DynamicContainer<Definitions extends PukingRainbowsDefinitions> = {
  /**
   * @description
   * Built by one static value appearance provided by the user
   * • {container}-{UserProvidedContainerValue}
   *
   * @example
   * "container-outlined"
   */
  [K in `container-${Definitions[ContainerIdentifier][number]}`]: (
    system: PukingRainbowsSystem<Definitions>,
  ) => SerializedStyles
}

export type DynamicAppearance<Definitions extends PukingRainbowsDefinitions> = {
  /**
   * @description
   * Built by one static value appearance and one dynamic value appearance provided by the user
   * • {appearance}-{UserProvidedAppearanceValue}
   *
   * @example
   * "appearance-success"
   */
  [K in `appearance-${Definitions[AppearanceIdentifier][number]}`]: (
    system: PukingRainbowsSystem<Definitions>,
  ) => SerializedStyles
}

export type DynamicInteractive<Definitions extends PukingRainbowsDefinitions> =
  {
    /**
     * @description
     * Built by one static value and two dynamic values which one is provide by the user and the other one by interactive file
     * • {InteractiveIdentifier}-{UserProvidedAppearanceValue}
     *
     * @example
     * "interactive-success"
     * "interactive-warning"
     */
    [K in `${InteractiveIdentifier}-${Definitions[AppearanceIdentifier][number]}`]: (
      system: PukingRainbowsSystem<Definitions>,
    ) => SerializedStyles
  }

export type DynamicZ<Definitions extends PukingRainbowsDefinitions> = {
  /**
   * @description
   * Built by one static value and two dynamic values which one is provide by the user and the other one by interactive file
   * • {ZIdentifier}-{UserProvidedZNumber}
   *
   * @example
   * "z-auto"
   * "z-below"
   * "z-base"
   */
  [K in `z-${Definitions[ZIdentifier][number]}`]: number | "auto"
}

export type DynamicLevels<Definitions extends PukingRainbowsDefinitions> = {
  /**
   * @description Allows the system to know how to render the container depending the level and their theme
   *
   * @example
   * "level-1"
   */

  [K in `level-${Definitions["level"][number]}`]: (
    system: PukingRainbowsSystem<Definitions>,
  ) => SerializedStyles
}
