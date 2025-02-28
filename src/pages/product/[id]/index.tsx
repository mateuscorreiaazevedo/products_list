import { type FindProductByIdResponseDTO, ProductFactory } from '@/core/product'
import { ProductBanner } from '@/modules/product'
import { HStack, Text, VStack } from '@/shared/components'
import { useTheme } from '@/shared/contexts'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { darken, lighten } from 'polished'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id

  const productById = await ProductFactory.http().findProductById({ id: Number(id) })

  return {
    props: {
      ...productById,
    },
  }
}

export default function ProductItem({ data }: FindProductByIdResponseDTO) {
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>
          Product {data.id} - {data.model}
        </title>
      </Head>
      <VStack width={theme.spacing.full} gap={theme.spacing[5]}>
        <HStack width={theme.spacing.full}>
          <Text
            as="h1"
            font={theme.text.heading}
            color={
              theme.title === 'light'
                ? lighten(0.2, theme.colors.foreground)
                : darken(0.2, theme.colors.foreground)
            }
          >
            {data.title}
          </Text>
        </HStack>
        <ProductBanner {...data} />
      </VStack>
    </>
  )
}
