import type { CategoryItemDTO } from '@/core/category'
import {
  HStack,
  IconButton,
  MapList,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectPortal,
  SelectRoot,
  SelectScrollDown,
  SelectScrollUp,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  Show,
  Text,
} from '@/shared/components'
import { useTheme } from '@/shared/contexts'
import { ChevronDown, ChevronUp } from 'lucide-react'

type Props = {
  categories: CategoryItemDTO[]
  onFilter?: (value: string) => void
  onClear?: () => void
  value?: string
}

export function CategorySelectFilter({ categories, onFilter, onClear, value }: Props) {
  const { theme } = useTheme()

  return (
    <HStack gap={theme.spacing[4]}>
      <SelectRoot value={value} onValueChange={onFilter}>
        <SelectTrigger aria-label="category" data-testid={'select-trigger'}>
          <SelectValue placeholder="Selecionar categoria" data-testid="select-value" />
          <SelectIcon>
            <ChevronDown />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectContent>
            <SelectScrollUp>
              <ChevronUp />
            </SelectScrollUp>
            <SelectViewport>
              <MapList
                data={categories}
                renderItem={({ item }) => (
                  <SelectItem
                    value={item.value}
                    key={item.label}
                    data-testid={`select-item-${item.value}`}
                  >
                    {item.label}
                  </SelectItem>
                )}
              />
            </SelectViewport>
            <SelectScrollDown>
              <ChevronDown />
            </SelectScrollDown>
          </SelectContent>
        </SelectPortal>
      </SelectRoot>
      <Show condition={!!value}>
        <IconButton onClick={onClear}>
          <Text font={theme.text.small}>Limpar seleção</Text>
        </IconButton>
      </Show>
    </HStack>
  )
}
