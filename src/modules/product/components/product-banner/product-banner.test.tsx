import { ProductsMockBuilder } from '@/core/product'
import { renderWithTheme } from '@/shared/tests'
import { ProductBanner } from '.'

const mockProductById = ProductsMockBuilder.generate(1, 10).findById(1).itemDTO().data
const renderComponent = () => {
  return renderWithTheme(<ProductBanner {...mockProductById} />)
}

describe('ProductBanner', () => {
  test('Deve retornar se os dados do produto estão sendo renderizados', () => {
    const { getByText, getByAltText } = renderComponent()

    expect(getByText(mockProductById.model)).toBeInTheDocument()
    expect(getByText(mockProductById.description)).toBeInTheDocument()
    expect(getByText(mockProductById.price)).toBeInTheDocument()
    expect(getByText(mockProductById.category)).toBeInTheDocument()
    expect(getByAltText(mockProductById.title)).toBeInTheDocument()
  })

  test('If image exists', () => {
    const { getByAltText, getByTestId } = renderComponent()
    expect(getByAltText(mockProductById.title)).toBeInTheDocument()
    expect(getByAltText(mockProductById.title)).toBeVisible()
    expect(getByTestId('image-cover')).toBeTruthy()
  })
})
