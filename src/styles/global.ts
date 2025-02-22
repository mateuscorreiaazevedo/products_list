import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    padding: ${({ theme }) => theme.spacing[0]};
    margin: ${({ theme }) => theme.spacing[0]};
    border: none;
    box-sizing: border-box;
    background: none;
    color: ${({ theme }) => theme.colors.foreground};
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    font-family: 'Inter', sans-serif;
    font-size: ${({ theme }) => theme.text.body.fontSize};
    font-weight: ${({ theme }) => theme.text.body.fontWeight};
    line-height: ${({ theme }) => theme.text.body.lineHeight};
    letter-spacing: ${({ theme }) => theme.text.body.letterSpacing};
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
