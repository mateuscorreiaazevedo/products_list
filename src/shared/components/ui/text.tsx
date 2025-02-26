import type { Font } from '@/@types/theme'
import type { PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'

type TagHTML = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export type TextProps = {
  as?: TagHTML
  color?: string
  font?: Font
  truncate?: boolean
  capitalize?: boolean
  width?: string
}

const TextStyled = ({ as = 'h1', color, font, truncate, width }: TextProps) => styled(as)`
  font-size: ${({ theme }) => (font ? font.fontSize : theme.text.heading.fontSize)};
  font-weight: ${({ theme }) => (font ? font.fontWeight : theme.text.heading.fontWeight)};
  line-height: ${({ theme }) => (font ? font.lineHeight : theme.text.heading.lineHeight)};
  letter-spacing: ${({ theme }) => (font ? font.letterSpacing : theme.text.heading.letterSpacing)};
  color: ${({ theme }) => (color ? color : theme.colors.foreground)};
  width: ${({ theme }) => (width ? width : theme.spacing.fit)};
  ${() =>
    truncate &&
    css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}

`

export function Text({ children, ...props }: PropsWithChildren<TextProps>) {
  const StyledText = TextStyled(props)

  return <StyledText>{children}</StyledText>
}
