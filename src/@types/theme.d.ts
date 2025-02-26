import 'styled-components'

type Colors = {
  background: string
  foreground: string
  light: string
  dark: string
  primary: {
    light: string
    default: string
    dark: string
  }
  info: {
    light: string
    default: string
    dark: string
  }
  warning: {
    light: string
    default: string
    dark: string
  }
  success: {
    light: string
    default: string
    dark: string
  }
  error: {
    light: string
    default: string
    dark: string
  }
  card: {
    background: string
    text: string
  }
}

type Font = {
  fontSize: string
  fontWeight: string
  lineHeight: string
  letterSpacing: string
}

type Text = {
  heading: Font
  subHeader: Font
  body: Font
  label: Font
  small: Font
}

type BorderRadius = {
  sm: string
  lg: string
  base: string
  xl: string
  full: string
  none: string
}

type Spacing = {
  '0': string
  '0.5': string
  '1': string
  '1.5': string
  '2': string
  '3': string
  '4': string
  '5': string
  '6': string
  '7': string
  '8': string
  '9': string
  '10': string
  '12': string
  '14': string
  '16': string
  '18': string
  '20': string
  '24': string
  '28': string
  '32': string
  '36': string
  '40': string
  full: '100%'
  fit: 'fit-content'
}

interface Theme {
  title: 'dark' | 'light'
  colors: Colors
  text: Text
  radius: BorderRadius
  spacing: Spacing
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
