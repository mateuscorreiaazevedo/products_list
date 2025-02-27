import type { CategoryContract } from '../../contracts/category.contract'
import type { Category } from '../../entities/category.entity'
import { CategoryMocksBuilder } from '../../utils/mocks/category-mock-builder'

export class MockCategoryService implements CategoryContract {
  async list(): Promise<Category[]> {
    await new Promise(res => setTimeout(res, 1200))

    return CategoryMocksBuilder.generate().build()
  }
}
