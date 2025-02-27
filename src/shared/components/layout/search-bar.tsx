import { darken } from 'polished'
import styled from 'styled-components'

export const SearchBarInput = styled.input`
  transition: all 200ms linear;
  width: 0;
  background: none;
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.text.body.fontSize};
  font-weight: ${({ theme }) => theme.text.body.fontWeight};
  line-height: ${({ theme }) => theme.text.body.lineHeight};
  letter-spacing: ${({ theme }) => theme.text.body.letterSpacing};
  outline: none;
  
  &::placeholder {
    color: ${({ theme }) => darken(0.5, theme.colors.foreground)};
  }
  &:focus {
    width: 380px;
  }

  @media (max-width: 768px) {
    &:focus {
      width: 140px;
    }
  }
  `

export const SearchBarContainer = styled.label`
  transition: all 200ms linear;

  display: flex;
  width: fit-content;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[6]}`};
  padding-left: 0;
  gap: 8px;
  width: fit-content;
  height: fit-content;
  border-bottom: 1px solid transparent;
  
  &:focus-within {
    border-bottom-color: ${({ theme }) => theme.colors.primary.default};

    & > .cross-icon {
      opacity: 1;
    }
  }

  & > .icon {
    cursor: pointer;
    width: ${({ theme }) => theme.spacing[6]};
    height: ${({ theme }) => theme.spacing[6]};
  }

  & > .cross-icon {
    opacity: 0;
    cursor: pointer;
    width: ${({ theme }) => theme.spacing[6]};
    height: ${({ theme }) => theme.spacing[6]};
  }
`
