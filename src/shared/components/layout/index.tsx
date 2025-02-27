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
import { HeaderContainer, HeaderContent, LinkStyled } from './styles'

export function AppLayout({ children }: PropsWithChildren) {
  const { theme, toggleTheme } = useTheme()
  const router = useRouter()
  const [searchValue, setSearchValue] = useState<string>()
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchValue(value)
  }

  const handleClearSearch = () => {
    setSearchValue('')
    window.location.replace('/') // router.replace() e router.push() não estão funcionando para re-renderizar o getServerSideProps
  }

  const handleSearch = () => {
    const queryString = {
      ...(searchValue && { search: searchValue }),
    }

    const searchParams = new URLSearchParams(Object.entries(queryString)).toString()

    window.location.replace(searchValue ? `/?${searchParams}` : '/') // router.replace() e router.push() não estão funcionando para re-renderizar o getServerSideProps
  }

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Show condition={router.pathname === '/'}>
            <HStack>
              <SearchBarContainer>
                <Search className="icon" />
                <SearchBarInput
                  defaultValue={router.query.search as string}
                  value={searchValue}
                  placeholder="Buscar produto"
                  data-testid="search-input"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onChange={handleChangeSearch}
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
              <Show condition={!!searchValue}>
                <IconButton onClick={handleSearch}>Buscar</IconButton>
              </Show>
              <Show condition={!!router.query.search && !isFocused}>
                <IconButton onClick={handleClearSearch} data-testid="clear-search">
                  <HStack alignItems="center" gap={theme.spacing[2]}>
                    Limpar filtros
                    <X color={darken(0, theme.colors.foreground)} size={theme.spacing[5]} />
                  </HStack>
                </IconButton>
              </Show>
            </HStack>
          </Show>

          <HStack gap={theme.spacing[4]} className="header-stack">
            <LinkStyled href={'/'}>
              <Text as="h1">Products List</Text>
            </LinkStyled>
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
