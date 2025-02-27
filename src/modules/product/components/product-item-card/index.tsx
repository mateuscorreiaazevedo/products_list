import type { ProductItemDTO } from '@/core/product/dtos/list-products.dto'
import { HStack, Img, VStack } from '@/shared/components'
import { useTheme } from '@/shared/contexts'
import { StringBuilder } from '@/shared/utils'
import {
  CardProductDescription,
  CardProductItem,
  CardProductModel,
  CardProductPrice,
} from './styles'

export function ProductItemCard(props: ProductItemDTO) {
  const { theme } = useTheme()

  return (
    <CardProductItem href={''}>
      <VStack
        justifyContent="flex-start"
        alignItems="flex-start"
        gap={theme.spacing[2]}
        width={theme.spacing.full}
      >
        <Img
          alt={props.title}
          src={props.image}
          data-testid={`image-cover-${props.id}`}
          width={280}
          height={280}
          loading="lazy"
        />
        <VStack
          padding={`${theme.spacing[4]} 0 0 0`}
          alignItems="flex-start"
          width={theme.spacing.full}
        >
          <HStack width={theme.spacing.full} justifyContent="space-between" alignItems="center">
            <CardProductModel>
              {StringBuilder.parse(props.model).sliced(20).build()}
            </CardProductModel>
            <CardProductPrice>{props.price}</CardProductPrice>
          </HStack>
          <CardProductDescription>{props.brand}</CardProductDescription>
          <CardProductDescription>{props.description}</CardProductDescription>
        </VStack>
      </VStack>
    </CardProductItem>
  )
}
