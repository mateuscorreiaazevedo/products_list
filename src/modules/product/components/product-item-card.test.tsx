import type { ProductItemDTO } from '@/core/product/dtos/list-products.dto'
import { renderWithTheme } from '@/shared/tests/render-with-theme'
import { ProductItemCard } from './product-item-card'

const mockProduct: ProductItemDTO = {
  brand: 'Apple',
  id: 1,
  image: 'https://example.com/image.jpg',
  model: 'iPhone 13 Pro Max',
  price: 1000,
  title: 'Apple iPhone 13 Pro Max',
}

const renderComponent = () => {
  return renderWithTheme(<ProductItemCard {...mockProduct} />)
}

describe('ProductItemCard', () => {
  test('Should render the product item', () => {
    const { getByText, getByAltText } = renderComponent()
    expect(getByText(mockProduct.model)).toBeTruthy()
    expect(getByAltText(mockProduct.title)).toBeInTheDocument()
    expect(getByText(mockProduct.brand)).toBeInTheDocument()
  })

  test('If image exists', () => {
    const { getByAltText, getByTestId } = renderComponent()
    expect(getByAltText(mockProduct.title)).toBeInTheDocument()
    expect(getByAltText(mockProduct.title)).toBeVisible()
    expect(getByTestId(`image-cover-${mockProduct.id}`)).toBeTruthy()
  })
})
