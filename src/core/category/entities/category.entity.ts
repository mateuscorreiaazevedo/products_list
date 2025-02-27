import { StringBuilder } from '@/shared/utils'

export interface ICategory {
  value: string
}

export class Category {
  constructor(private readonly category: ICategory) {}

  get value(): string {
    return this.category.value
  }

  get label(): string {
    return StringBuilder.parse(this.category.value).capitalize().build()
  }
}
