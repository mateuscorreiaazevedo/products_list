export interface ListProductsRequestDTO {
  page?: number
  limit?: number
  search?: string
}

export interface ListProductsByCategoryRequestDTO extends ListProductsRequestDTO {
  category?: string
}

export interface ProductItemDTO {
  id: number
  title: string
  model: string
  image: string
  price: string
  brand: string
  description: string
}

export interface ListProductsResponseDTO {
  page: number
  limit: number
  data: ProductItemDTO[]
}
