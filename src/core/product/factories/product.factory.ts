import { AxiosHttpClientService } from '@/shared/services/http'
import type { ProductsContract } from '../contracts/products.contract'
import type {
  ListProductsByCategoryRequestDTO,
  ListProductsRequestDTO,
  ListProductsResponseDTO,
} from '../dtos/list-products.dto'
import { HttpClientProductService } from '../services/http/http-client-product.service'
import { MockProductsService } from '../services/mock/mock-products.service'
import { ListProductsByCategoryUseCase } from '../usecases/list-products-by-category.usecase'
import { ListProductsUseCase } from '../usecases/list-products.usecase'

export class ProductFactory {
  private productService: ProductsContract
  private listProductsUseCase: ListProductsUseCase
  private listProductsByCategoryUseCase: ListProductsByCategoryUseCase

  constructor() {
    const httpClient = new AxiosHttpClientService()
    this.productService = new HttpClientProductService(httpClient)

    this.listProductsUseCase = new ListProductsUseCase(this.productService)
    this.listProductsByCategoryUseCase = new ListProductsByCategoryUseCase(this.productService)
  }

  static http(): ProductFactory {
    const productFactory = new ProductFactory()
    const httpClient = new AxiosHttpClientService()
    productFactory.productService = new HttpClientProductService(httpClient)
    productFactory.listProductsUseCase = new ListProductsUseCase(productFactory.productService)
    productFactory.listProductsByCategoryUseCase = new ListProductsByCategoryUseCase(
      productFactory.productService,
    )

    return productFactory
  }

  static mock(): ProductFactory {
    const productFactory = new ProductFactory()
    productFactory.productService = new MockProductsService()
    productFactory.listProductsUseCase = new ListProductsUseCase(productFactory.productService)
    productFactory.listProductsByCategoryUseCase = new ListProductsByCategoryUseCase(
      productFactory.productService,
    )

    return productFactory
  }

  /**
   * Método para listar todos os produtos.
   * @returns {Promise<Product[]>} - Uma promessa que resolve para uma lista de produtos.
   */
  async listProducts(args: ListProductsRequestDTO = {}): Promise<ListProductsResponseDTO> {
    return await this.listProductsUseCase.execute(args)
  }

  async listProductsByCategory(
    args: ListProductsByCategoryRequestDTO = {},
  ): Promise<ListProductsResponseDTO> {
    return await this.listProductsByCategoryUseCase.execute(args)
  }
}
