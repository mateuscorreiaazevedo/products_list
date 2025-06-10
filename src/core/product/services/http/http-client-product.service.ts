import type { HttpClientContract } from '@/shared/contracts'
import { HttpStatusHelper } from '@/shared/utils'
import type { Product } from '../../entities/product.entity'
import { ProductMapper } from '../../mappers/product.mapper'
import type { ApiItemProduct, ApiListProducts } from '../../types/api-product'
import type { ProductsService } from '../product.service'

export class HttpClientProductService implements ProductsService {
  constructor(private readonly service: HttpClientContract) {}
  async listAll(page: number, limit: number): Promise<Product[]> {
    const products: Product[] = []
    const response = await this.service.request<ApiListProducts>({
      url: '/products',
      method: 'get',
      params: {
        limit,
        page,
      },
    })

    response.data.products.forEach(product => {
      const mappedProduct = ProductMapper.toEntity(product)

      products.push(mappedProduct)
    })

    return products
  }

  async listByCategory(page: number, limit: number, category: string): Promise<Product[]> {
    const products: Product[] = []
    const response = await this.service.request<ApiListProducts>({
      method: 'get',
      url: '/products/category',
      params: {
        limit,
        page,
        type: category,
      },
    })

    response.data.products.forEach(product => {
      const mappedProduct = ProductMapper.toEntity(product)

      products.push(mappedProduct)
    })

    return products
  }

  async findById(id: number): Promise<Product | null> {
    const response = await this.service.request<ApiItemProduct>({
      method: 'get',
      url: `/products/${id}`,
    })

    const { product } = HttpStatusHelper.validate(response)

    return product ? ProductMapper.toEntity(product) : null
  }
}
