import { CategoryFactory, type ListCategoriesResponseDTO } from '@/core/category'
import { type ListProductsResponseDTO, ProductFactory } from '@/core/product'
import { ProductItemCard, useListProducts } from '@/modules/product'
import {
  EmptyData,
  Grid,
  HStack,
  Loading,
  MapList,
  PrimaryButton,
  Show,
  VStack,
} from '@/shared/components'
import { useTheme } from '@/shared/contexts'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'

type QueryProps = {
  search?: string
}

export const getServerSideProps: GetServerSideProps = async ({ query, res }) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  const { search } = query as QueryProps

  let responseProducts = {} as ListProductsResponseDTO
  let responseCategories = {} as ListCategoriesResponseDTO

  const [productsResult, categoriesResult] = await Promise.allSettled([
    ProductFactory.http().listProducts({ search }),
    CategoryFactory.http().listCategories(),
  ])

  if (productsResult.status === 'fulfilled') {
    responseProducts = productsResult.value
  }
  if (categoriesResult.status === 'fulfilled') {
    responseCategories = categoriesResult.value
  }

  return {
    props: {
      products: responseProducts,
      categories: responseCategories,
    },
  }
}

type HomeProps = {
  products: ListProductsResponseDTO
  categories: ListCategoriesResponseDTO
}

export default function Home({ products: responseProducts }: HomeProps) {
  const { handleListNewsProducts, loading, products } = useListProducts(responseProducts)
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>Products List</title>
      </Head>

      <VStack alignItems="center" width={theme.spacing.full}>
        <Show condition={!!products.length} fallback={EmptyData}>
          <Grid>
            <MapList
              data={products}
              renderItem={({ item }) => <ProductItemCard {...item} key={item.id} />}
            />
          </Grid>
        </Show>
        <Show condition={!!products.length}>
          <HStack padding={theme.spacing[4]} alignItems="center" justifyContent="center">
            <Show condition={!loading} fallback={Loading}>
              <PrimaryButton disabled={loading} onClick={handleListNewsProducts} type="button">
                Mais...
              </PrimaryButton>
            </Show>
          </HStack>
        </Show>
      </VStack>
    </>
  )
}
