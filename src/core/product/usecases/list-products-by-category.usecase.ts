import type { ProductsContract } from '../contracts/products.contract'
import type {
  ListProductsByCategoryRequestDTO,
  ListProductsResponseDTO,
  ProductItemDTO,
} from '../dtos/list-products.dto'

export class ListProductsByCategoryUseCase {
  constructor(private readonly service: ProductsContract) {}

  async execute(dto: ListProductsByCategoryRequestDTO = {}): Promise<ListProductsResponseDTO> {
    const { page = 1, limit = 20, search, category } = dto

    const data: ProductItemDTO[] = []

    const response = await this.service.listByCategory(page, limit, category ?? '')

    response.forEach(product => {
      data.push({
        id: product.id,
        title: product.title,
        model: product.model,
        image: product.image,
        price: product.formattedPrice,
        brand: product.brand,
        description: product.slug,
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
