import { injectGlobal } from "@emotion/css"
import type { SerializedStyles } from "@emotion/react"
import type { PukingRainbowsSystem } from "../modules/System.ts"
import type { PukingRainbowsDefinitions } from "./config.ts"

export { injectGlobal }
export type PukingRainbowsCSSInterpolationFn<
  Definitions extends PukingRainbowsDefinitions,
> = (system: PukingRainbowsSystem<Definitions>) => SerializedStyles
