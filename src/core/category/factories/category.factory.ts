import { AxiosHttpClientService } from '@/shared/services/http'
import type { CategoryContract } from '../contracts/category.contract'
import type { ListCategoriesResponseDTO } from '../dtos/list-categories.dto'
import { HttpClientCategoryService } from '../services/http/http-client-category.service'
import { MockCategoryService } from '../services/mock/mock-category.service'
import { ListCategoriesUseCase } from '../usecases/list-categories.usecase'

export class CategoryFactory {
  private categoryService: CategoryContract
  private listCategoriesUseCase: ListCategoriesUseCase

  constructor() {
    const httpClient = new AxiosHttpClientService()
    this.categoryService = new HttpClientCategoryService(httpClient)

    this.listCategoriesUseCase = new ListCategoriesUseCase(this.categoryService)
  }

  static http(): CategoryFactory {
    const categoryFactory = new CategoryFactory()
    const httpClient = new AxiosHttpClientService()
    categoryFactory.categoryService = new HttpClientCategoryService(httpClient)
    categoryFactory.listCategoriesUseCase = new ListCategoriesUseCase(
      categoryFactory.categoryService,
    )

    return categoryFactory
  }

  static mock(): CategoryFactory {
    const categoryFactory = new CategoryFactory()
    categoryFactory.categoryService = new MockCategoryService()
    categoryFactory.listCategoriesUseCase = new ListCategoriesUseCase(
      categoryFactory.categoryService,
    )

    return categoryFactory
  }

  async listCategories(): Promise<ListCategoriesResponseDTO> {
    return await this.listCategoriesUseCase.execute()
  }
}
