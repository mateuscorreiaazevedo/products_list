import { useTheme } from '@/shared/contexts'
import Head from 'next/head'

export default function Home() {
  const { toggleTheme } = useTheme()

  return (
    <>
      <Head>
        <title>Products List</title>
      </Head>
      <div>
        <h1 aria-roledescription="heading">Olá</h1>
        <button type="button" onClick={toggleTheme}>
          Trocar tema
        </button>
      </div>
    </>
  )
}
