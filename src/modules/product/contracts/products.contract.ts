import type { Product } from '../domain'

export interface ListProducts extends HttpResponse {
  products: Product[]
}

export interface ItemProduct extends HttpResponse {
  product: Product
}

export abstract class ProductsContract {
  abstract listAll(filters?: any): Promise<ListProducts>
  abstract getById(id: string): Promise<ItemProduct>
}
