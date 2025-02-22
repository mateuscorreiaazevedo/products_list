import { ThemeProvider } from '@/shared/contexts'
import { render, screen } from '@testing-library/react'
import Home from '.'

describe('homepage', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    )
  })

  it('should hello on display', () => {
    const headingElement = screen.getByRole('heading')

    expect(headingElement).toBeInTheDocument()
  })

  it('should get text [olá] on Home page', () => {
    const headingText = screen.getByText('Olá')

    expect(headingText).toBeInTheDocument()
  })
})
