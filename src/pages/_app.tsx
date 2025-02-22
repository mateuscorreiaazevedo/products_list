import { ThemeProvider } from '@/shared/contexts'
import { GlobalStyle } from '@/styles/global'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
