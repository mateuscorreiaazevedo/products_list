import type { ProductsContract } from '../../contracts/products.contract'
import type {
  FindProductByIdRequestDTO,
  FindProductByIdResponseDTO,
} from '../../dtos/find-product-by-id.dto'

export class FindProductByIdUseCase {
  constructor(private readonly service: ProductsContract) {}

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
