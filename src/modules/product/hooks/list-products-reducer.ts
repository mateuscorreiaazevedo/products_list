import type { ProductItemDTO } from '@/core/product'
import { useReducer } from 'react'

type UseListProductsReducerState = {
  loading: boolean
  page: number
  data: ProductItemDTO[]
}

type ActionListProductsReducer =
  | {
      type: 'SET_LOADING'
      payload: boolean
    }
  | {
      type: 'SET_PAGE'
      payload: number
    }
  | {
      type: 'SET_DATA'
      payload: ProductItemDTO[]
    }

const reducer = (
  state: UseListProductsReducerState,
  action: ActionListProductsReducer,
): UseListProductsReducerState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'SET_PAGE':
      return { ...state, page: action.payload }
    case 'SET_DATA':
      return { loading: false, page: state.page, data: [...state.data, ...action.payload] }
    default:
      return state
  }
}

export function useListProductsReducer(initialState: UseListProductsReducerState) {
  const [data, dispatch] = useReducer(reducer, initialState)

  return {
    loading: data.loading,
    newPage: data.page,
    products: data.data,
    dispatch,
  }
}
