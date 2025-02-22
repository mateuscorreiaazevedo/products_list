import type { HttpClientContract } from '@/shared/contracts'
import type { ItemProduct, ListProducts, ProductsContract } from '../../contracts'
import { Product } from '../../domain'

export class HttpClientProductService implements ProductsContract {
  constructor(private readonly service: HttpClientContract) {}
  async listAll(filters?: any): Promise<ListProducts> {
    const response = await this.service.request<any>({
      url: '/products',
      method: 'get',
      params: filters,
    })

    return response.data
  }
  async getById(_id: string): Promise<ItemProduct> {
    await new Promise(resolve => resolve)
    return {
      message: 'string',
      status: 'SUCCESS',
      product: new Product({
        id: 1,
        title: 'Sample Product',
        image: 'https://example.com/image.jpg',
        price: 19.99,
        description: 'This is a sample product.',
        brand: 'Example Brand',
        model: 'Example Model',
        color: 'Example Color',
        category: 'Example Category',
        discount: 10,
      }),
    }
  }
}
