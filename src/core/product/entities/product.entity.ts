import { CurrencyBuilder, StringBuilder } from '@/shared/utils'

export interface IProduct {
  id: number
  title: string
  image: string
  price: number
  description: string
  brand: string
  model: string
  color: string
  category?: string
  discount: number
}

export class Product {
  constructor(private product: IProduct) {}

  get id() {
    return this.product.id
  }
  get title() {
    return this.product.title
  }
  get image() {
    return this.product.image
  }
  get price() {
    return this.product.price
  }
  get description() {
    return this.product.description
  }
  get brand() {
    return this.product.brand
  }
  get model() {
    return this.product.model
  }
  get color() {
    return this.product.color
  }
  get category() {
    return this.product.category
  }
  get discount() {
    return this.product.discount
  }

  get discountedPrice() {
    return this.price * (1 - this.discount / 100)
  }

  get formattedPrice() {
    return CurrencyBuilder.format(this.price).toUSD()
  }

  get slug() {
    return StringBuilder.parse(this.description).sliced(30).build()
  }
}
