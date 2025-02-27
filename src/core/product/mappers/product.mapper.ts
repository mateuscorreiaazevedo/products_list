import { Product } from '../entities/product.entity'
import type { ApiProduct } from '../types/api-product'

export class ProductMapper {
  static toEntity(payload: ApiProduct): Product {
    return new Product({
      id: payload.id,
      title: payload.title,
      image: payload.image,
      price: payload.price,
      description: payload.description,
      brand: payload.brand,
      model: payload.model,
      color: payload.color,
      discount: payload.discount,
    })
  }
}
