import { Category } from '../entities/category.entity'

export class CategoryMapper {
  static toEntity(payload: string): Category {
    return new Category({ value: payload })
  }
}
