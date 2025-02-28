import type { ProductByIdDTO } from '@/core/product'
import { HStack, Text, VStack } from '@/shared/components'
import { useTheme } from '@/shared/contexts'
import { CardContainer } from './styles'

export function ProductInfoCard(props: ProductByIdDTO) {
  const { theme } = useTheme()

  return (
    <CardContainer>
      <HStack width={theme.spacing.full} justifyContent="space-between">
        <Text as="h2" font={theme.text.heading} data-testid="product-info-card-model">
          {props.model}
        </Text>
        <Text
          as="span"
          font={theme.text.subHeader}
          color={
            theme.title === 'light' ? theme.colors.primary.default : theme.colors.info.light
          }
          data-testid="product-info-card-price"
        >
          {props.price}
        </Text>
      </HStack>
      <HStack width={theme.spacing.full} justifyContent="space-between">
        <Text as="span" font={theme.text.subHeader}>
          Category
        </Text>
        <Text
          as="span"
          font={theme.text.body}
          capitalize
          data-testid="product-info-card-category"
        >
          {props.category}
        </Text>
      </HStack>
      <HStack width={theme.spacing.full} justifyContent="space-between">
        <Text as="span" font={theme.text.subHeader}>
          Brand
        </Text>
        <Text as="span" font={theme.text.body} capitalize>
          {props.brand}
        </Text>
      </HStack>
      <HStack width={theme.spacing.full} justifyContent="space-between">
        <Text as="span" font={theme.text.subHeader}>
          Color
        </Text>
        <Text as="span" font={theme.text.body} capitalize>
          {props.color}
        </Text>
      </HStack>
      <hr />
      <VStack
        justifyContent="flex-start"
        gap={theme.spacing[4]}
        alignItems="flex-start"
        width={theme.spacing.full}
      >
        <Text as="span" font={theme.text.subHeader}>
          Description
        </Text>
        <Text as="span" font={theme.text.body}>
          {props.description}
        </Text>
      </VStack>
    </CardContainer>
  )
}
