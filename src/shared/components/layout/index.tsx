import { useTheme } from '@/shared/contexts'
import { Search, X } from 'lucide-react'
import { useRouter } from 'next/router'
import { darken } from 'polished'
import { type ChangeEvent, type PropsWithChildren, useState } from 'react'
import { Show } from '../show'
import { SearchBarContainer, SearchBarInput } from './search-bar'
import { HeaderContainer, HeaderContent } from './styles'

export function AppLayout({ children }: PropsWithChildren) {
  const { theme } = useTheme()
  const router = useRouter()
  const [searchValue, setSearchValue] = useState(router.query.search ?? '')

  const handleSearchData = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchValue(value)
    router
      .replace('/', {
        query: {
          ...(value && { search: value }),
        },
      })
      .then(() => router.reload()) // necessário forçar o reload para que o getServerSideProps seja re-renderizado
  }

  const handleClearSearch = () => {
    setSearchValue('')
    router.replace('/', { query: {} }).then(() => router.reload()) // necessário forçar o reload para que o getServerSideProps seja re-renderizado
  }

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <SearchBarContainer>
            <Search className="icon" />
            <SearchBarInput
              value={searchValue}
              placeholder="Pesquisar produto pelo modelo"
              onChange={handleSearchData}
            />
            <Show condition={!!searchValue}>
              <X
                className="cross-icon"
                onClick={handleClearSearch}
                color={darken(0.5, theme.colors.foreground)}
              />
            </Show>
          </SearchBarContainer>
        </HeaderContent>
      </HeaderContainer>
      {children}
    </>
  )
}
