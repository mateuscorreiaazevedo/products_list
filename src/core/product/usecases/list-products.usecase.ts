import type { ProductsContract } from '../contracts/products.contract'
import type {
  ListProductsRequestDTO,
  ListProductsResponseDTO,
  ProductItemDTO,
} from '../dtos/list-products.dto'

export class ListProductsUseCase {
  constructor(private service: ProductsContract) {}

  async execute(queries: ListProductsRequestDTO = {}): Promise<ListProductsResponseDTO> {
    const { limit = 12, page = 1 } = queries

    const data: ProductItemDTO[] = []

    const response = await this.service.listAll(page, limit)

    response.forEach(product => {
      data.push({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        brand: product.brand,
        model: product.model,
      })
    })

    return {
      page,
      limit,
      data,
    }
  }
}
