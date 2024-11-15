import { ReactNode } from "react"

export interface ForProps<T> {
  render: (item: T, index: number) => ReactNode
  items: Array<T>
}

export const For = <T extends any>(props: ForProps<T>) => {
  const { render, items } = props
  return items.map((item, index) => {
    return render(item, index)
  })
}
