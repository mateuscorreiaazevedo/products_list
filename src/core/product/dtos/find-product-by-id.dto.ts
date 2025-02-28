export interface FindProductByIdRequestDTO {
  id: number
}

export interface ProductByIdDTO {
  id: number
  title: string
  image: string
  price: string
  description: string
  brand: string
  model: string
  color: string
  category: string
}

export interface FindProductByIdResponseDTO {
  data: ProductByIdDTO
}
