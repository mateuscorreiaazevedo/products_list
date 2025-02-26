import type { Product } from '../entities/product.entity'

export abstract class ProductsContract {
  abstract listAll(page: number, limit: number): Promise<Product[]>
  abstract getById(id: number): Promise<Product | null>
}
