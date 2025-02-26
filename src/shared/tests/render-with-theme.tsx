import { render } from '@testing-library/react'
import type { PropsWithChildren, ReactElement } from 'react'
import { ThemeProvider } from '../contexts'

function RenderWithTheme({ children }: PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>
}

export function renderWithTheme(children: ReactElement<any, any>) {
  return render(<RenderWithTheme>{children}</RenderWithTheme>)
}
