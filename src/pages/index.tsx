import type { ListProducts } from '@/modules/product/contracts'
import { HttpClientProductService } from '@/modules/product/services/http/http-client-product.service'
import { useTheme } from '@/shared/contexts'
import { AxiosHttpClientService } from '@/shared/services/http'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'

export const getServerSideProps: GetServerSideProps = async () => {
  const httpClient = new AxiosHttpClientService()
  const productsService = new HttpClientProductService(httpClient)

  const data = await productsService.listAll()

  return {
    props: {
      data,
    },
  }
}

export default function Home({ data }: { data: ListProducts }) {
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
        <ul>
          {data.products.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
