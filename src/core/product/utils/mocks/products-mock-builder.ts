import type { ListProductsResponseDTO, ProductItemDTO } from '../../dtos/list-products.dto'
import { Product } from '../../entities/product.entity'

export class ProductsMockBuilder {
  private mock: Product[] = []
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
          image: `https://example.com/image-${id}.jpg`,
          price: 19.99,
          description: `Descrição do produto ${id}.`,
          brand: 'Marca Exemplo',
          model: 'Modelo Exemplo',
          color: 'Cor Exemplo',
          category: 'Categoria Exemplo',
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

  findById(id: number): Product | null {
    return this.mock.find(product => product.id === id) ?? null
  }

  build(): Product[] {
    return this.mock
  }
}
