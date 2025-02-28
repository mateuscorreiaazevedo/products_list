import type { ProductsContract } from '../../contracts/products.contract'
import type { Product } from '../../entities/product.entity'
import { ProductsMockBuilder } from '../../utils/mocks/products-mock-builder'

export class MockProductsService implements ProductsContract {
  async listAll(page: number, limit: number): Promise<Product[]> {
    await new Promise(resolve => setTimeout(resolve, 2130))

    return ProductsMockBuilder.generate(page, limit).listBuild()
  }

  async listByCategory(page: number, limit: number, category: string): Promise<Product[]> {
    await new Promise(resolve => setTimeout(resolve, 1930))

    return ProductsMockBuilder.generate(page, limit).filterByCategory(category).listBuild()
  }
  async findById(id: number): Promise<Product | null> {
    await new Promise(resolve => setTimeout(resolve, 1130))

    return ProductsMockBuilder.generate(1, 10).findById(id).itemBuild()
  }
}
