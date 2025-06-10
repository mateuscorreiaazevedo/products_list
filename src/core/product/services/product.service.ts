import type { Product } from '../entities/product.entity'

export abstract class ProductsService {
  abstract listAll(page: number, limit: number): Promise<Product[]>

  abstract listByCategory(page: number, limit: number, category: string): Promise<Product[]>
  abstract findById(id: number): Promise<Product | null>
}
