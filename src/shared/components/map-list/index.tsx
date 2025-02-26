import type { ComponentType } from 'react'

type FlatListProps<T> = {
  data: T[]
  renderItem: ComponentType<{ item: T; index: number }>
}

export function MapList<T>({ data, renderItem: Item }: FlatListProps<T>) {
  // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
  return data.map((item, index) => <Item index={index} item={item} />)
}
