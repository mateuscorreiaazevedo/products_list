import { productFactory } from '@/core/product'
import type { ProductItemDTO } from '@/core/product/dtos/list-products.dto'
import { ProductItemCard } from '@/modules/product'
import { Grid } from '@/shared/components'
import { useTheme } from '@/shared/contexts'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await productFactory.listProducts()

  return {
    props: {
      products: products.data,
    },
  }
}

export default function Home({ products }: { products: ProductItemDTO[] }) {
  const { toggleTheme } = useTheme()

  return (
    <>
      <Head>
        <title>Products List</title>
      </Head>
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h1 aria-roledescription="heading">Olá</h1>
        <button type="button" onClick={toggleTheme}>
          Trocar tema
        </button>
        <Grid>
          {products.map(item => (
            <ProductItemCard key={item.id} {...item} />
          ))}
        </Grid>
      </div>
    </>
  )
}
