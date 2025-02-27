import { CategoryFactory, type CategoryItemDTO } from '@/core/category'
import { renderWithTheme } from '@/shared/tests'
import { CategorySelectFilter } from '.'

const mockCategories = async () => await CategoryFactory.mock().listCategories()

const renderComponent = (data: CategoryItemDTO[]) => {
  return renderWithTheme(<CategorySelectFilter categories={data} />)
}

describe('CategorySelectFilter', () => {
  test('Should return if the component is being rendered', async () => {
    const categories = await mockCategories()
    const result = renderComponent(categories.data)

    expect(result).toMatchSnapshot()
    expect(result.getByTestId('select-value')).toBeTruthy()
  })
})
