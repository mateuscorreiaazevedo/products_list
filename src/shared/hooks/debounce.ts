import { useEffect, useRef } from 'react'

export function useDebounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  const debouncedFunction = (...args: any[]) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      fn(...args)
    }, delay)
  }

  return debouncedFunction
}
