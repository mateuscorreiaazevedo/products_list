import type { FindProductByIdResponseDTO } from '../../dtos/find-product-by-id.dto'
import type { ListProductsResponseDTO, ProductItemDTO } from '../../dtos/list-products.dto'
import { Product } from '../../entities/product.entity'

export class ProductsMockBuilder {
  private mock: Product[] = []
  private mockItem: Product | null = null
  private pageNumber = 1
  private limitNumber = 10

  static generate(page: number, limit: number): ProductsMockBuilder {
    const productsMock = new ProductsMockBuilder()

    productsMock.pageNumber = page
    productsMock.limitNumber = limit

    for (let i = 0; i < limit; i++) {
      const id = page > 1 ? (page - 1) * limit + i + 1 : i + 1
      productsMock.mock.push(
        new Product({
          id,
          title: `Produto ${id}`,
          image: '',
          price: 19.99,
          description: `Descrição do produto ${id}.`,
          brand: 'Marca Exemplo',
          model: 'Modelo Exemplo',
          color: 'Cor Exemplo',
          category: `Categoria Exemplo ${id}`,
          discount: 10,
        }),
      )
    }
    return productsMock
  }

  listDTO(): ListProductsResponseDTO {
    const listProducts: ProductItemDTO[] = []

    this.mock.forEach(product => {
      listProducts.push({
        id: product.id,
        title: product.title,
        model: product.model,
        image: product.image,
        price: product.formattedPrice,
        description: product.slug,
        brand: product.brand,
      })
    })

    return {
      page: this.pageNumber,
      limit: this.limitNumber,
      data: listProducts,
    }
  }

  findById(id: number): ProductsMockBuilder {
    this.mockItem = this.mock.find(product => product.id === id) ?? null

    return this
  }

  filterByCategory(category: string): ProductsMockBuilder {
    this.mock = this.mock.filter(product => product.category === category)

    return this
  }

  itemDTO(): FindProductByIdResponseDTO {
    return {
      data: {
        id: this.mockItem?.id ?? 0,
        title: this.mockItem?.title ?? '',
        model: this.mockItem?.model ?? '',
        image: this.mockItem?.image ?? '',
        price: this.mockItem?.formattedPrice ?? '',
        description: this.mockItem?.slug ?? '',
        brand: this.mockItem?.brand ?? '',
        category: this.mockItem?.category ?? '',
        color: this.mockItem?.color ?? '',
      },
    }
  }

  listBuild(): Product[] {
    return this.mock
  }
  itemBuild(): Product | null {
    return this.mockItem
  }
}
