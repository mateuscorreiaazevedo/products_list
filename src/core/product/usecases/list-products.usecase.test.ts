import { MockListProductsService } from '../services/mock/mock-list-products.service'
import { ProductsMockBuilder } from '../utils/mocks/products-mock-builder'
import { ListProductsUseCase } from './list-products.usecase'

const mockProducts = ProductsMockBuilder.generate(1, 20).listDTO()

describe('ListProductsUseCase', () => {
  test('Should return a list of products', async () => {
    const productServiceMock = new MockListProductsService()
    const listProductsUseCase = new ListProductsUseCase(productServiceMock)

    const response = await listProductsUseCase.execute()
    expect(response).toEqual(mockProducts)
  })

  test('Should return a list of products with pagination', async () => {
    const productServiceMock = new MockListProductsService()
    const listProductsUseCase = new ListProductsUseCase(productServiceMock)
    const response = await listProductsUseCase.execute({ page: 2, limit: 5 })
    expect(response.data).toHaveLength(5)
    expect(response.page).toBe(2)
    expect(response.limit).toBe(5)
    expect(response.data[0].id).toBe(6)
    expect(response.data[4].id).toBe(10)
    expect(response.data[0].title).toBe('Produto 6')
    expect(response.data[4].title).toBe('Produto 10')
  })
})
