import type { Theme } from '@/@types/theme'
import {
  errorColor,
  infoColor,
  primaryColor,
  radius,
  spacing,
  successColor,
  text,
  warningColor,
} from './theme'

export const themeDark: Theme = {
  title: 'dark',
  colors: {
    background: '#242424',
    foreground: '#e1e1e6',
    light: '#f1f2f1',
    dark: '#141414',
    primary: primaryColor,
    error: errorColor,
    info: infoColor,
    success: successColor,
    warning: warningColor,
    card: {
      background: '#383838',
      text: '#f1f2f1',
    },
  },
  radius,
  spacing,
  text,
}
