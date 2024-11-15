export const z = [
  "z-below",
  "z-base",
  "z-docked",
  "z-dropdown",
  "z-sticky",
  "z-banner",
  "z-overlay",
  "z-modal",
  "z-popover",
  "z-tooltip",
] as const

export const zMap = {
  "z-below": -1,
  "z-base": 0,
  "z-docked": 10,
  "z-dropdown": 1000,
  "z-sticky": 1100,
  "z-banner": 1200,
  "z-overlay": 1300,
  "z-modal": 1400,
  "z-popover": 1500,
  "z-tooltip": 1600,
} as const
