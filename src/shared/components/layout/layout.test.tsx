import { renderWithTheme } from '@/shared/tests'
import { fireEvent } from '@testing-library/dom'
import { useRouter } from 'next/router'
import { AppLayout } from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

const renderComponent = () => {
  ;(useRouter as jest.Mock).mockReturnValue({
    query: {},
    pathname: '/',
    push: jest.fn(),
    replace: jest.fn,
  })

  return renderWithTheme(<AppLayout />)
}

describe('AppLayout', () => {
  test('Should verify if there is an input', () => {
    const { getByTestId } = renderComponent()
    expect(getByTestId('search-input')).toBeTruthy()
    expect(getByTestId('search-input')).toBeInTheDocument()
  })

  test('Should allow inserting text into the input and validate the value', () => {
    const screen = renderComponent()
    const input = screen.getByTestId('search-input') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Item' } })

    expect(input.value).toBe('Item')
  })

  test('Should clear the input when clicking the clear button', () => {
    const screen = renderComponent()
    const input = screen.getByTestId('search-input') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Item' } })
    const clearButton = screen.getByTestId('clear-search')
    fireEvent.click(clearButton)

    expect(input.value).toBe('')
  })

  test('Should verify if there is a theme change button', () => {
    const { getByTestId } = renderComponent()
    expect(getByTestId('toggle-theme')).toBeTruthy()
    expect(getByTestId('toggle-theme')).toBeInTheDocument()
  })

  test('Should toggle the theme when clicking the theme change button', () => {
    const { getByTestId } = renderComponent()
    const toggleButton = getByTestId('toggle-theme')
    fireEvent.click(toggleButton)
    expect(getByTestId('icon-sun')).toBeTruthy()
    fireEvent.click(toggleButton)
    expect(getByTestId('icon-moon')).toBeTruthy()
  })
})
