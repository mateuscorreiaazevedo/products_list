import { AxiosHttpClientService } from '@/shared/services/http'
import type { ProductsContract } from '../contracts/products.contract'
import type { ListProductsResponseDTO } from '../dtos/list-products.dto'
import { HttpClientProductService } from '../services/http/http-client-product.service'
import { ListProductsUseCase } from '../usecases/list-products.usecase'

class ProductFactory {
  private productService: ProductsContract
  private listProductsUseCase: ListProductsUseCase

  constructor() {
    const httpClient = new AxiosHttpClientService()
    this.productService = new HttpClientProductService(httpClient)

    this.listProductsUseCase = new ListProductsUseCase(this.productService)
  }

  /**
   * Método para listar todos os produtos.
   * @returns {Promise<Product[]>} - Uma promessa que resolve para uma lista de produtos.
   */
  async listProducts(): Promise<ListProductsResponseDTO> {
    return await this.listProductsUseCase.execute()
  }
}

export const productFactory = new ProductFactory()
