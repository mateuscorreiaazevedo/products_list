import { type ListProductsResponseDTO, ProductFactory } from '@/core/product'
import { useCallback } from 'react'
import { useListProductsReducer } from './list-products-reducer'

export function useListProducts(initialValue: ListProductsResponseDTO) {
  const { data, limit, page } = initialValue
  const { dispatch, loading, newPage, products } = useListProductsReducer({
    data,
    loading: false,
    page,
  })

  const handleListNewsProducts = useCallback(async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true })
      const offsetPage = newPage + 1

      const { data: newListProducts } = await ProductFactory.http().listProducts({
        limit,
        page: offsetPage,
      })

      dispatch({ payload: newListProducts, type: 'SET_DATA' })
      dispatch({ payload: offsetPage, type: 'SET_PAGE' })
    } catch (_e) {
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }, [newPage, loading])

  return {
    products,
    loading,
    handleListNewsProducts,
  }
}
