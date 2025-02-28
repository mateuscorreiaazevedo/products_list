import { MockProductsService } from '../../services/mock/mock-products.service'
import { ProductsMockBuilder } from '../../utils/mocks/products-mock-builder'
import { ListProductsByCategoryUseCase } from './list-products-by-category.usecase'

const mockProducts = (limit = 20, category = 'Categoria Exemplo 1') =>
  ProductsMockBuilder.generate(1, limit).filterByCategory(category).listDTO()

const mockService = new MockProductsService()
const listProductsByCategoryUseCase = new ListProductsByCategoryUseCase(mockService)

describe('ListProductsByCategoryUseCase', () => {
  test('Should list how many items with the filtered category have', async () => {
    const response = await listProductsByCategoryUseCase.execute({
      category: 'Categoria Exemplo 1',
    })
    expect(response.data.length).toEqual(1)
  })

  test('Should list all items if no category is passed', async () => {
    const response = await listProductsByCategoryUseCase.execute()
    expect(response.data.length).toEqual(mockProducts(10, '').data.length)
  })

  test('Should return the list of products listed by category', async () => {
    const response = await listProductsByCategoryUseCase.execute({
      category: 'Categoria Exemplo 1',
    })
    expect(response).toEqual(mockProducts())
    expect(response.page).toBe(1)
    expect(response.limit).toBe(20)
    expect(response.data[0].id).toBe(1)
    expect(response.data[0].title).toBe('Produto 1')
  })
})
