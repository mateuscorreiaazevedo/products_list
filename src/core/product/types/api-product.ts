export interface ApiProduct {
  id: number
  title: string
  image: string
  price: number
  description: string
  brand: string
  model: string
  color: string
  category?: string
  discount: number
}

export interface ApiListProducts extends ApiResponse {
  products: ApiProduct[]
}

export interface ApiItemProduct extends ApiResponse {
  product?: ApiProduct
}
