import { ThemeProvider } from '@/shared/contexts'
import { GlobalStyle } from '@/styles/global'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true)
    }
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
