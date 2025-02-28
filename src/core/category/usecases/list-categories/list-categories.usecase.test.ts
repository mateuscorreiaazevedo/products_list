import { MockCategoryService } from '../../services/mock/mock-category.service'
import { CategoryMocksBuilder } from '../../utils/mocks/category-mock-builder'
import { ListCategoriesUseCase } from './list-categories.usecase'

const mockCategories = CategoryMocksBuilder.generate().listDTO()

const mockCategoryService = new MockCategoryService()
const listCategoriesUseCase = new ListCategoriesUseCase(mockCategoryService)

describe('ListCategoriesUseCase', () => {
  test('Should return a list of categories', async () => {
    const response = await listCategoriesUseCase.execute()

    expect(response.data).toEqual(mockCategories)
    expect(response.data[0].value).toBe('tv')
    expect(response.data[0].label).toBe('Tv')
    expect(response.data.length).toBe(6)
  })
})
