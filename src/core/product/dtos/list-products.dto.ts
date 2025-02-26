export interface ListProductsRequestDTO {
  page?: number
  limit?: number
}

export interface ProductItemDTO {
  id: number
  title: string
  model: string
  brand: string
  image: string
  price: number
}

export interface ListProductsResponseDTO {
  page: number
  limit: number
  data: ProductItemDTO[]
}
