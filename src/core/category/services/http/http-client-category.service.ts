import type { HttpClientContract } from '@/shared/contracts'
import type { CategoryContract } from '../../contracts/category.contract'
import type { Category } from '../../entities/category.entity'
import { CategoryMapper } from '../../mappers/category.mapper'
import type { ApiListCategories } from '../../types/api-category'

export class HttpClientCategoryService implements CategoryContract {
  constructor(private readonly httpClient: HttpClientContract) {}

  async list(): Promise<Category[]> {
    const categories: Category[] = []

    const response = await this.httpClient.request<ApiListCategories>({
      method: 'get',
      url: '/products/category',
    })

    response.data.categories.forEach(category => {
      const mappedCategory = CategoryMapper.toEntity(category)
      categories.push(mappedCategory)
    })

    return categories
  }
}
