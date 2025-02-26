import type { ApiResponse } from './api-response'

export interface ApiProduct {
  id: number
  title: string
  image: string
  price: number
  description: string
  brand: string
  model: string
  color: string
  onSale: boolean
  discount: number
}

export interface ApiListProducts extends ApiResponse {
  products: ApiProduct[]
}

export interface ApiItemProduct extends ApiResponse {
  product: ApiProduct
}
