import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

export function useSetFilterProductsByCategory() {
  const router = useRouter()
  const queries = router.query as Record<string, string | undefined>

  const [filterValue, setFilterValue] = useState(queries.category ?? '')

  const onFilter = useCallback(
    (value: string) => {
      setFilterValue(value)
      const queryStrings = {
        category: value,
        ...queries,
      }
      const searchParams = new URLSearchParams(Object.entries(queryStrings)).toString()

      window.location.replace(`/?${searchParams}`)
    },
    [filterValue],
  )

  const onClear = useCallback(() => {
    setFilterValue('')
    window.location.replace('/')
  }, [filterValue])

  return {
    onFilter,
    onClear,
    filterValue,
  }
}
