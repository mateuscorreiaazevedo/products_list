import type { ComponentType, JSX, PropsWithChildren } from 'react'

type ShowProps<T> = {
  fallback?: ComponentType<T>
  fallbackProps?: T
  condition: boolean
}

export function Show<T, K extends JSX.IntrinsicAttributes & T>({
  children,
  condition,
  fallback: Fallback,
  fallbackProps,
}: PropsWithChildren<ShowProps<T>>) {
  if (condition) {
    return children
  }

  return Fallback ? <Fallback {...(fallbackProps as K)} /> : null
}
