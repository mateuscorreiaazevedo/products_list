import { useTheme } from '@/shared/contexts'
import { Moon, Search, Sun, X } from 'lucide-react'
import { useRouter } from 'next/router'
import { darken } from 'polished'
import { type ChangeEvent, type PropsWithChildren, useState } from 'react'
import { Show } from '../show'
import { IconButton } from '../ui/buttons'
import { HStack } from '../ui/stack'
import { Text } from '../ui/text'
import { SearchBarContainer, SearchBarInput } from './search-bar'
import { HeaderContainer, HeaderContent } from './styles'

export function AppLayout({ children }: PropsWithChildren) {
  const { theme, toggleTheme } = useTheme()
  const router = useRouter()
  const [searchValue, setSearchValue] = useState(router.query.search ?? '')

  const handleSearchData = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchValue(value)
    const searchParams = new URLSearchParams({ ...(value && { search: value }) }).toString()

    window.location.replace(value ? `/?${searchParams}` : '/') // router.replace() e router.push() não estão funcionando para re-renderizar o getServerSideProps
  }

  const handleClearSearch = () => {
    setSearchValue('')
    window.location.replace('/') // router.replace() e router.push() não estão funcionando para re-renderizar o getServerSideProps
  }

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <SearchBarContainer>
            <Search className="icon" />
            <SearchBarInput
              value={searchValue}
              placeholder="Buscar produto"
              data-testid="search-input"
              onChange={handleSearchData}
            />
            <Show condition={!!searchValue}>
              <X
                className="cross-icon"
                onClick={handleClearSearch}
                color={darken(0.5, theme.colors.foreground)}
                data-testid="clear-search"
              />
            </Show>
          </SearchBarContainer>
          <HStack gap={theme.spacing[4]} className="header-stack">
            <Text as="h1">Products List</Text>
            <IconButton onClick={toggleTheme} title="Toggle theme" data-testid="toggle-theme">
              <Show
                condition={theme.title === 'light'}
                fallback={Moon}
                fallbackProps={{
                  color: theme.colors.foreground,
                  size: theme.spacing[4],
                  'data-testid': 'icon-moon',
                }}
              >
                <Sun data-testid="icon-sun" color={theme.colors.dark} size={theme.spacing[4]} />
              </Show>
            </IconButton>
          </HStack>
        </HeaderContent>
      </HeaderContainer>
      {children}
    </>
  )
}
