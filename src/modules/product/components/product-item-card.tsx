import type { ProductItemDTO } from '@/core/product/dtos/list-products.dto'
import { Card, Img, Text, VStack } from '@/shared/components'
import { useTheme } from '@/shared/contexts'
import { darken } from 'polished'

export function ProductItemCard(props: ProductItemDTO) {
  const { theme } = useTheme()

  return (
    <Card>
      <VStack justifyContent="flex-start" width={theme.spacing.full}>
        <Img
          alt={props.title}
          src={props.image}
          data-testid={`image-cover-${props.id}`}
          width={280}
          height={280}
          loading="lazy"
        />
        <VStack alignItems="flex-start">
          <Text>{props.brand}</Text>
          <Text
            truncate
            width={'210px'}
            font={theme.text.label}
            color={darken(0.2, theme.colors.foreground)}
          >
            {props.model}
          </Text>
        </VStack>
      </VStack>
    </Card>
  )
}
