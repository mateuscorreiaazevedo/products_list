import type { Category } from '../entities/category.entity'

export abstract class CategoryContract {
  abstract list(): Promise<Category[]>
}
