import type { CategoryItemDTO } from '../../dtos/list-categories.dto'
import { Category } from '../../entities/category.entity'

export class CategoryMocksBuilder {
  private categories: Category[] = []

  static generate(): CategoryMocksBuilder {
    const categoryMocks = new CategoryMocksBuilder()

    const mockList = ['tv', 'audio', 'laptop', 'mobile', 'gaming', 'appliances']

    mockList.forEach(category => {
      categoryMocks.categories.push(new Category({ value: category }))
    })

    return categoryMocks
  }

  listDTO(): CategoryItemDTO[] {
    return this.categories.map(category => ({
      label: category.label,
      value: category.value,
    }))
  }

  build(): Category[] {
    return this.categories
  }
}
