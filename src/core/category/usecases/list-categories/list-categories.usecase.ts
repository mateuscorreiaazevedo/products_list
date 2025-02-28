import type { CategoryContract } from '../../contracts/category.contract'
import type { CategoryItemDTO, ListCategoriesResponseDTO } from '../../dtos/list-categories.dto'

export class ListCategoriesUseCase {
  constructor(private readonly service: CategoryContract) {}

  async execute(): Promise<ListCategoriesResponseDTO> {
    const categories = await this.service.list()
    const data: CategoryItemDTO[] = []

    categories.forEach(category => {
      data.push({
        label: category.label,
        value: category.value,
      })
    })

    return {
      data,
    }
  }
}
