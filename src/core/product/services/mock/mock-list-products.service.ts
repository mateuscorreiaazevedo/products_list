import type { ProductsContract } from '../../contracts/products.contract'
import type { Product } from '../../entities/product.entity'
import { ProductsMockBuilder } from '../../utils/mocks/products-mock-builder'

export class MockListProductsService implements ProductsContract {
  async listAll(page: number, limit: number): Promise<Product[]> {
    await new Promise(resolve => setTimeout(resolve, 2130))

    return ProductsMockBuilder.generate(page, limit).build()
  }
  async getById(id: number): Promise<Product | null> {
    await new Promise(resolve => setTimeout(resolve, 1130))

    return ProductsMockBuilder.generate(1, 1).findById(id) ?? null
  }
}
