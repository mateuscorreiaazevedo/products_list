import Link from 'next/link'
import { darken, lighten } from 'polished'
import styled from 'styled-components'

export const CardProductItem = styled(Link)`
  border-radius: ${({ theme }) => theme.radius.base};
  width: 100%;
  height: 320px;
  text-decoration: none;
  background: ${({ theme }) => (theme.title === 'light' ? darken(0.02, theme.colors.background) : lighten(0.05, theme.colors.background))};
  color: ${({ theme }) => theme.colors.card.text};
  padding: ${({ theme }) => theme.spacing[4]};
  box-shadow: 0 1px 3px ${({ theme }) => darken(0.2, theme.colors.background)};
  transition: all 0.2s ease-in;
  
  &:hover {
    background: ${({ theme }) => (theme.title === 'light' ? darken(0.03, theme.colors.background) : lighten(0.06, theme.colors.background))};
  }
`

export const CardProductModel = styled.strong`
  font-size: ${({ theme }) => theme.text.label.fontSize};
  font-weight: ${({ theme }) => theme.text.label.fontWeight};
  line-height: ${({ theme }) => theme.text.label.lineHeight};
  letter-spacing: ${({ theme }) => theme.text.label.letterSpacing};
  color: ${({ theme }) => theme.colors.foreground};
  max-width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const CardProductDescription = styled.span`
  font-size: ${({ theme }) => theme.text.small.fontSize};
  font-weight: ${({ theme }) => theme.text.small.fontWeight};
  line-height: ${({ theme }) => theme.text.small.lineHeight};
  letter-spacing: ${({ theme }) => theme.text.small.letterSpacing};
  color: ${({ theme }) => (theme.title === 'light' ? lighten(0.5, theme.colors.foreground) : darken(0.3, theme.colors.foreground))};
  max-width: 240px;
`

export const CardProductPrice = styled.span`
  font-size: ${({ theme }) => theme.text.label.fontSize};
  font-weight: ${({ theme }) => theme.text.label.fontWeight};
  line-height: ${({ theme }) => theme.text.label.lineHeight};
  letter-spacing: ${({ theme }) => theme.text.label.letterSpacing};
  color: ${({ theme }) => theme.colors.info.default};
`
