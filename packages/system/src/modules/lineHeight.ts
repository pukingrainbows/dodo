export const lineHeight = {
  tight: 1,
  normal: 1.25,
  relaxed: 1.5,
  loose: 1.75,
} as const

export type LineHeighValue = keyof typeof lineHeight
