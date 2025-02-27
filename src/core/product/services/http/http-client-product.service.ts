import type { HttpClientContract } from '@/shared/contracts'
import type { ProductsContract } from '../../contracts/products.contract'
import { Product } from '../../entities/product.entity'
import { ProductMapper } from '../../mappers/product.mapper'
import type { ApiListProducts } from '../../types/api-product'

export class HttpClientProductService implements ProductsContract {
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
  async getById(id: number): Promise<Product> {
    await new Promise(resolve => resolve)
    return new Product({
      id: id,
      title: 'Sample Product',
      image: 'https://example.com/image.jpg',
      price: 19.99,
      description: 'This is a sample product.',
      brand: 'Example Brand',
      model: 'Example Model',
      color: 'Example Color',
      category: 'Example Category',
      discount: 10,
    })
  }
}
