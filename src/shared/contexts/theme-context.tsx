import themes from '@/styles/theme'
import dayjs from 'dayjs'
import { type PropsWithChildren, createContext, useCallback, useContext } from 'react'
import { type DefaultTheme, ThemeProvider as StyledComponentsProvider } from 'styled-components'
import { useCookieStorage } from '../hooks'

type ContextParams = {
  theme: DefaultTheme
  toggleTheme: VoidFunction
}

const ThemeContext = createContext<ContextParams | null>(null)

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useCookieStorage<DefaultTheme>('theme', themes.dark, {
    encrypted: true,
  })

  const toggleTheme = useCallback(() => {
    const newTheme = theme.title === 'light' ? themes.dark : themes.light
    setTheme(newTheme, {
      expires: dayjs().add(1, 'year').toDate(),
    })
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledComponentsProvider theme={theme}>{children}</StyledComponentsProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return { ...context }
}
