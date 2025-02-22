import Cookies from 'js-cookie'
import { useCallback, useState } from 'react'

type CookieStorageResponse<K> = [K, (value: K, options?: Cookies.CookieAttributes) => void]

type OptionsParameters = {
  encrypted: boolean
}

export function useCookieStorage<K>(
  key: string,
  initialState: K,
  params?: OptionsParameters,
): CookieStorageResponse<K> {
  const [state, setState] = useState(() => {
    const storageState = Cookies.get(key)
    const encryptedState = atob(storageState ?? '')
    const stringfiedState = params?.encrypted ? encryptedState : storageState

    return stringfiedState ? (JSON.parse(stringfiedState) as K) : initialState
  })

  const setValue = useCallback(
    (value: K, options?: Cookies.CookieAttributes) => {
      try {
        setState(value)

        const valueEncrypted = params?.encrypted
          ? btoa(JSON.stringify(value))
          : JSON.stringify(value)
        Cookies.set(key, valueEncrypted, options)
      } catch (error) {
        throw new Error((error as Error).message)
      }
    },
    [key],
  )

  return [state, setValue]
}
