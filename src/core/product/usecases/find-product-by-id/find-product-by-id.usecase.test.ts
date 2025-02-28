import { MockProductsService } from '../../services/mock/mock-products.service'
import { ProductsMockBuilder } from '../../utils/mocks/products-mock-builder'
import { FindProductByIdUseCase } from './find-product-by-id.usecase'

const mockProduct = ProductsMockBuilder.generate(1, 10).findById(1).itemDTO()

const mockService = new MockProductsService()
const findProductByIdUseCase = new FindProductByIdUseCase(mockService)

describe('FindProductByIdUseCase', () => {
  test('Should return a product with the given ID', async () => {
    const response = await findProductByIdUseCase.execute({ id: 1 })
    expect(response.data).toEqual(mockProduct.data)
  })

  test('Should throw an error if the product is not found', async () => {
    await expect(findProductByIdUseCase.execute({ id: 99999 })).rejects.toThrow(
      'Product not found',
    )
  })

  test('Should return the formatted price of the product', async () => {
    const response = await findProductByIdUseCase.execute({ id: 1 })
    expect(response.data.price).toBe('$19.99')
  })
})
