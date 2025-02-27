import { CategoryFactory } from '@/core/category'
import { ProductFactory } from '@/core/product'
import { ProductItemCard } from '@/modules/home'
import type { ComponentType } from 'react'
import { MapList } from '.'

const categoriesMock = async () => await CategoryFactory.mock().listCategories()
const productsMock = async () => await ProductFactory.mock().listProducts()

function renderComponent<T = any>(
  data: T[],
  item: ComponentType<{
    item: T
    index: number
  }>,
) {
  return <MapList data={data} renderItem={item} />
}

describe('MapList', () => {
  test('Should render a list of text', async () => {
    const { data } = await categoriesMock()
    const result = renderComponent(data, ({ item }) => (
      <span key={item.value}>{item.label}</span>
    ))

    expect(result).toMatchSnapshot()
    expect(result.props.data).toEqual(data)
  })

  test('Should render a list of custom components', async () => {
    const { data } = await productsMock()
    const response = renderComponent(data, ({ item }) => (
      <ProductItemCard {...item} key={item.id} />
    ))

    expect(response).toMatchSnapshot()
    expect(response.props.data).toEqual(data)
    expect(response.props.renderItem).toBeInstanceOf(Function)
  })
})
