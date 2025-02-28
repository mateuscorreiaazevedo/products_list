import type { ProductByIdDTO } from '@/core/product'
import { useTheme } from '@/shared/contexts'
import { ImageProduct } from '../image-product'
import { ProductInfoCard } from '../product-info-card'
import { BannerRow } from './styles'

export function ProductBanner(props: ProductByIdDTO) {
  const { theme } = useTheme()
  return (
    <BannerRow gap={theme.spacing[8]} alignItems="flex-start" justifyContent="flex-start">
      <ImageProduct
        alt={props.title}
        src={props.image}
        width={800}
        height={800}
        data-testid={'image-cover'}
        loading="lazy"
      />
      <ProductInfoCard {...props} />
    </BannerRow>
  )
}
