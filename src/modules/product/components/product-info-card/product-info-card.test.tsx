import { type ProductByIdDTO, ProductsMockBuilder } from '@/core/product'
import { renderWithTheme } from '@/shared/tests'
import { CurrencyBuilder } from '@/shared/utils'
import { ProductInfoCard } from '.'

const renderComponent = (props: ProductByIdDTO) => {
  return renderWithTheme(<ProductInfoCard {...props} />)
}

const mockProductById = ProductsMockBuilder.generate(1, 10).findById(1).itemDTO().data

describe('ProductInfoCard', () => {
  test('Should return the selected product information', () => {
    const { getByText } = renderComponent(mockProductById)

    expect(getByText(mockProductById.model)).toBeInTheDocument()
    expect(getByText(mockProductById.description)).toBeInTheDocument()
    expect(getByText(mockProductById.price.toString())).toBeInTheDocument()
    expect(getByText(mockProductById.category)).toBeInTheDocument()
  })

  test('Should verify if the price is formatted', () => {
    const { getByText } = renderComponent(mockProductById)
    const expectedValue = CurrencyBuilder.format(19.99).toUSD()

    expect(getByText(mockProductById.price).textContent).toBe(expectedValue)
  })
})
