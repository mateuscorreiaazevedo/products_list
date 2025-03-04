import styled from 'styled-components'

type StackProps = {
  reverse?: boolean
  gap?: string
  alignItems?: 'baseline' | 'center' | 'flex-start' | 'flex-end'
  padding?: string
  justifyContent?:
    | 'space-between'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-evenly'
  width?: string
  height?: string
}

export const VStack = styled.div<StackProps>`
  display: flex;
  width: ${({ theme, width }) => (width ? width : theme.spacing.fit)};
  height: ${({ theme, height }) => (height ? height : theme.spacing.fit)};
  flex-direction: ${({ reverse = false }) => (reverse ? 'column-reverse' : 'column')};
  align-items: ${({ alignItems = 'center' }) => alignItems};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  gap: ${({ gap, theme }) => gap ?? theme.spacing[1]};
  padding: ${({ padding }) => padding};
`

export const HStack = styled.div<StackProps>`
  display: flex;
  flex-direction: row;
  width: ${({ theme, width }) => (width ? width : theme.spacing.fit)};
  height: ${({ theme, height }) => (height ? height : theme.spacing.fit)};
  flex-direction: ${({ reverse = false }) => (reverse ? 'row-reverse' : 'row')};
  align-items: ${({ alignItems = 'center' }) => alignItems};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  gap: ${({ theme, gap }) => gap ?? theme.spacing[1]};
  padding: ${({ padding }) => padding};

  &.header-stack {
  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
  }
`
