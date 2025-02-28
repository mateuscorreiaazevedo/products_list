import { AxiosHttpClientService } from '@/shared/services/http'
import type { ProductsContract } from '../contracts/products.contract'
import type {
  FindProductByIdRequestDTO,
  FindProductByIdResponseDTO,
} from '../dtos/find-product-by-id.dto'
import type {
  ListProductsByCategoryRequestDTO,
  ListProductsRequestDTO,
  ListProductsResponseDTO,
} from '../dtos/list-products.dto'
import { HttpClientProductService } from '../services/http/http-client-product.service'
import { MockProductsService } from '../services/mock/mock-products.service'
import { FindProductByIdUseCase } from '../usecases/find-product-by-id/find-product-by-id.usecase'
import { ListProductsByCategoryUseCase } from '../usecases/list-products-by-category/list-products-by-category.usecase'
import { ListProductsUseCase } from '../usecases/list-products/list-products.usecase'

export class ProductFactory {
  private productService: ProductsContract
  private listProductsUseCase: ListProductsUseCase
  private listProductsByCategoryUseCase: ListProductsByCategoryUseCase
  private findProductByIdUseCase: FindProductByIdUseCase

  constructor() {
    const httpClient = new AxiosHttpClientService()
    this.productService = new HttpClientProductService(httpClient)

    this.listProductsUseCase = new ListProductsUseCase(this.productService)
    this.listProductsByCategoryUseCase = new ListProductsByCategoryUseCase(this.productService)
    this.findProductByIdUseCase = new FindProductByIdUseCase(this.productService)
  }

  static http(): ProductFactory {
    const productFactory = new ProductFactory()
    const httpClient = new AxiosHttpClientService()
    productFactory.productService = new HttpClientProductService(httpClient)
    productFactory.listProductsUseCase = new ListProductsUseCase(productFactory.productService)
    productFactory.listProductsByCategoryUseCase = new ListProductsByCategoryUseCase(
      productFactory.productService,
    )
    productFactory.findProductByIdUseCase = new FindProductByIdUseCase(
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
    productFactory.findProductByIdUseCase = new FindProductByIdUseCase(
      productFactory.productService,
    )

    return productFactory
  }

  /**
   * Método para listar produtos.
   * @param {ListProductsRequestDTO} args - Argumentos para a solicitação.
   * @returns {Promise<ListProductsResponseDTO>} - Uma promessa que resolve para uma lista de produtos.
   */
  async listProducts(args: ListProductsRequestDTO = {}): Promise<ListProductsResponseDTO> {
    return await this.listProductsUseCase.execute(args)
  }

  /**
   * Método para listar produtos por categoria.
   * @param {ListProductsByCategoryRequestDTO} args - Argumentos para a solicitação.
   * @returns {Promise<ListProductsResponseDTO>} - Uma promessa que resolve para uma lista de produtos.
   */
  async listProductsByCategory(
    args: ListProductsByCategoryRequestDTO = {},
  ): Promise<ListProductsResponseDTO> {
    return await this.listProductsByCategoryUseCase.execute(args)
  }

  /**
   * Método para encontrar um produto por seu ID.
   * @param {FindProductByIdRequestDTO} args - Argumentos para a solicitação.
   * @returns {Promise<FindProductByIdResponseDTO>} - Uma promessa que resolve para o produto encontrado.
   */
  async findProductById(args: FindProductByIdRequestDTO): Promise<FindProductByIdResponseDTO> {
    return await this.findProductByIdUseCase.execute(args)
  }
}
