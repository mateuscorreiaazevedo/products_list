import { StringBuilder } from '@/shared/utils'
import type {
  ListProductsRequestDTO,
  ListProductsResponseDTO,
  ProductItemDTO,
} from '../../dtos/list-products.dto'
import type { ProductsService } from '../../services/product.service'

export class ListProductsUseCase {
  constructor(private service: ProductsService) {}

  async execute(queries: ListProductsRequestDTO = {}): Promise<ListProductsResponseDTO> {
    const { limit = 20, page = 1, search } = queries

    const data: ProductItemDTO[] = []

    const response = await this.service.listAll(page, limit)

    response.forEach(product => {
      data.push({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.formattedPrice,
        description: product.slug,
        brand: StringBuilder.parse(product.brand).capitalize().build(),
        model: StringBuilder.parse(product.model).sliced(20).build(),
      })
    })

    return {
      page,
      limit,
      data: search ? this.searchProduct(search, data) : data,
    }
  }

  private searchProduct(search: string, data: ProductItemDTO[]): ProductItemDTO[] {
    return data.filter(product => {
      return (
        product.title.toLowerCase().includes(search?.toLowerCase()) ||
        product.model.toLowerCase().includes(search?.toLowerCase()) ||
        product.brand.toLowerCase().includes(search?.toLowerCase())
      )
    })
  }
}
