import { useTheme } from '../contexts'
import { VStack } from './ui/stack'
import { Text } from './ui/text'

export function EmptyData() {
  const { theme } = useTheme()

  return (
    <VStack padding={theme.spacing[10]}>
      <Text>Nenhum dado encontrado.</Text>
      <Text>Tente novamente mais tarde ou utilize a busca para encontrar produtos.</Text>
    </VStack>
  )
}
