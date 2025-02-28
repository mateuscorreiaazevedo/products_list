import { type CategoryItemDTO, CategoryMocksBuilder } from '@/core/category'
import { renderWithTheme } from '@/shared/tests'
import { CategorySelectFilter } from '.'

const mockCategories = CategoryMocksBuilder.generate().listDTO()

const renderComponent = (data: CategoryItemDTO[]) => {
  return renderWithTheme(<CategorySelectFilter categories={data} />)
}

describe('CategorySelectFilter', () => {
  test('Should return if the component is being rendered', () => {
    const result = renderComponent(mockCategories)

    expect(result).toBeTruthy()
  })
})
