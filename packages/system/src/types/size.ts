import type {
  BorderWidth,
  FontSize,
  Gap,
  LineHeight,
  Padding,
} from "./property.ts"

export type SizeIdentifier = "size"
export type Size = {
  [K in Padding]: [top: number, right: number, bottom: number, left: number]
} & { [K in FontSize]: number } & { [K in LineHeight]: number } & {
  [K in BorderWidth]: number
} & { [key in Gap]: number }

export type SizeDefinition<S extends Array<string>> = {
  size: S
}
