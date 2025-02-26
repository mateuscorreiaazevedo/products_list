import { darken } from 'polished'
import styled from 'styled-components'

export const Card = styled.div`
  border-radius: ${({ theme }) => theme.radius.base};
  width: 100%;
  aspect-ratio: 1 / 1;
  background: ${({ theme }) => theme.colors.card.background};
  color: ${({ theme }) => theme.colors.card.text};
  padding: ${({ theme }) => theme.spacing[4]};
  box-shadow: 0 1px 3px ${({ theme }) => darken(0.2, theme.colors.background)};
`
