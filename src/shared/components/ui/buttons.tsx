import { darken, lighten } from 'polished'
import styled from 'styled-components'

export const PrimaryButton = styled.button`
  background: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[8]}`};
  border-radius: ${({ theme }) => theme.radius.lg};
  width: fit-content;
  height: fit-content;
  font-size: ${({ theme }) => theme.text.body.fontSize};
  font-weight: 500;
  line-height: ${({ theme }) => theme.text.body.lineHeight};
  letter-spacing: ${({ theme }) => theme.text.body.letterSpacing};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }
  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
  opacity: 0.5;

  }
`

export const IconButton = styled.button`
  background: transparent;
  padding: ${({ theme }) => `${theme.spacing[2]}`};
  border-radius: ${({ theme }) => theme.radius.lg};
  width: fit-content;
  height: fit-content;
  font-size: ${({ theme }) => theme.text.body.fontSize};
  font-weight: 500;
  line-height: ${({ theme }) => theme.text.body.lineHeight};
  letter-spacing: ${({ theme }) => theme.text.body.letterSpacing};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
  background: ${({ theme }) => (theme.title === 'light' ? theme.colors.light : theme.colors.dark)};

  }
  &:active {
    background: ${({ theme }) => (theme.title === 'light' ? darken(0.03, theme.colors.light) : lighten(0.05, theme.colors.dark))};
  }

  &:disabled {
  opacity: 0.5;
  }
`
