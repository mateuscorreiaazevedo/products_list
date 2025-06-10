import type {
  FindProductByIdRequestDTO,
  FindProductByIdResponseDTO,
} from '../../dtos/find-product-by-id.dto'
import type { ProductsService } from '../../services/product.service'

export class FindProductByIdUseCase {
  constructor(private readonly service: ProductsService) {}

  async execute(dto: FindProductByIdRequestDTO): Promise<FindProductByIdResponseDTO> {
    const { id } = dto

    const product = await this.service.findById(id)

    if (!product) {
      throw new Error('Product not found')
    }

    return {
      data: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.formattedPrice,
        description: product.description,
        brand: product.brand,
        model: product.model,
        color: product.color,
        category: product.category ?? '',
      },
    }
  }
}
