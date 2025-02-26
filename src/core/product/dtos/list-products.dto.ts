export interface ListProductsRequestDTO {
  page?: number
  limit?: number
}

export interface ProductItemDTO {
  id: number
  title: string
  model: string
  image: string
  price: string
  description: string
}

export interface ListProductsResponseDTO {
  page: number
  limit: number
  data: ProductItemDTO[]
}
