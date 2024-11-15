export type CamelCase<A extends string, B extends string> = `${A}${Capitalize<B>}`
export type SnakeCase<A extends string, B extends string> = `${Lowercase<A>}_${Lowercase<B>}`
export type KebabCase<A extends string, B extends string> = `${Lowercase<A>}-${B}`
export type PascalCase<A extends string, B extends string> = `${Capitalize<A>}${Capitalize<B>}`
