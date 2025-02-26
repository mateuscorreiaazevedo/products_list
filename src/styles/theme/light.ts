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

export const themeLight: Theme = {
  title: 'light',
  colors: {
    background: '#e1e1e6',
    foreground: '#141414',
    light: '#f1f2f1',
    dark: '#242424',
    primary: primaryColor,
    success: successColor,
    info: infoColor,
    warning: warningColor,
    error: errorColor,
    card: {
      background: '#d1d1d6',
      text: '#383838',
    },
  },
  text,
  radius,
  spacing,
}
