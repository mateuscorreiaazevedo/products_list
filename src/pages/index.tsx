import { type ListProductsResponseDTO, productFactory } from '@/core/product'
import { ProductItemCard, useListProductsReducer } from '@/modules/product'
import { Grid, HStack, MapList, PrimaryButton, VStack } from '@/shared/components'
import { useTheme } from '@/shared/contexts'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useCallback } from 'react'

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await productFactory.listProducts()

  return {
    props: {
      ...products,
    },
  }
}

export default function Home({ data, limit, page }: ListProductsResponseDTO) {
  const { theme } = useTheme()

  const { dispatch, loading, newPage, products } = useListProductsReducer({
    data,
    loading: false,
    page,
  })

  const handleListNewsProducts = useCallback(async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true })
      const offsetPage = newPage + 1

      const { data: newListProducts } = await productFactory.listProducts({
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

  return (
    <>
      <Head>
        <title>Products List</title>
      </Head>

      <VStack>
        <Grid>
          <MapList
            data={products}
            renderItem={({ item }) => <ProductItemCard {...item} key={item.id} />}
          />
        </Grid>
        <HStack padding={theme.spacing[4]} alignItems="center" justifyContent="center">
          <PrimaryButton disabled={loading} onClick={handleListNewsProducts} type="button">
            Mais...
          </PrimaryButton>
        </HStack>
      </VStack>
    </>
  )
}
