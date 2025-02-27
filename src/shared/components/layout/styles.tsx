import Link from 'next/link'
import { darken, lighten, transparentize } from 'polished'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: ${({ theme }) => theme.spacing.full};
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[10]}`};
  background-color: ${({ theme }) => (theme.title === 'light' ? transparentize(0.2, darken(0.05, theme.colors.light)) : transparentize(0.2, lighten(0.1, theme.colors.dark)))};
  backdrop-filter: blur(4px);

`

export const HeaderContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
`
