import type { BorderRadius, Spacing, Text } from '@/@types/theme'

/**
 * Define as propriedades de texto para o tema.
 *
 * @property {Font} heading - Estilos para títulos.
 * @property {Font} subHeader - Estilos para subtítulos.
 * @property {Font} label - Estilos para labels.
 * @property {Font} body - Estilos para o corpo do texto.
 * @property {Font} small - Estilos para textos menores.
 */
export const text: Text = {
  heading: {
    fontSize: '2.4rem',
    fontWeight: '600',
    lineHeight: '3.2rem',
    letterSpacing: '-0.015em',
  },
  subHeader: {
    fontSize: '2rem',
    fontWeight: '500',
    lineHeight: '2.4rem',
    letterSpacing: '-0.01em',
  },
  label: {
    fontSize: '1.4rem',
    fontWeight: '600',
    lineHeight: '1.8rem',
    letterSpacing: '-0.01em',
  },
  body: {
    fontSize: '1.6rem',
    fontWeight: '400',
    lineHeight: '2.4rem',
    letterSpacing: '-0.01em',
  },
  small: {
    fontSize: '1.2rem',
    fontWeight: '400',
    lineHeight: '1.6rem',
    letterSpacing: '-0.01em',
  },
}

/**
 * Define as propriedades de border-radius para o tema.
 *
 * @property {string} base - Valor base para border-radius.
 * @property {string} none - Valor para remoção de border-radius.
 * @property {string} full - Valor para aplicação de border-radius total.
 * @property {string} sm - Valor para border-radius pequeno.
 * @property {string} lg - Valor para border-radius grande.
 * @property {string} xl - Valor para border-radius extra grande.
 */
export const radius: BorderRadius = {
  base: '0.8rem',
  none: '0',
  full: '100%',
  sm: '0.6rem',
  lg: '1rem',
  xl: '1.6rem',
}

/**
 * Define as propriedades de espaçamento para o tema.
 *
 * @property {'0'} 0 - Valor de espaçamento para 0.
 * @property {'0.5'} 0.5 - Valor de espaçamento para 0.5.
 * @property {'1'} 1 - Valor de espaçamento para 1.
 * @property {'1.5'} 1.5 - Valor de espaçamento para 1.5.
 * @property {'2'} 2 - Valor de espaçamento para 2.
 * @property {'3'} 3 - Valor de espaçamento para 3.
 * @property {'4'} 4 - Valor de espaçamento para 4.
 * @property {'5'} 5 - Valor de espaçamento para 5.
 * @property {'6'} 6 - Valor de espaçamento para 6.
 * @property {'7'} 7 - Valor de espaçamento para 7.
 * @property {'8'} 8 - Valor de espaçamento para 8.
 * @property {'9'} 9 - Valor de espaçamento para 9.
 * @property {'10'} 10 - Valor de espaçamento para 10.
 * @property {'12'} 12 - Valor de espaçamento para 12.
 * @property {'14'} 14 - Valor de espaçamento para 14.
 * @property {'16'} 16 - Valor de espaçamento para 16.
 * @property {'18'} 18 - Valor de espaçamento para 18.
 * @property {'20'} 20 - Valor de espaçamento para 20.
 * @property {'24'} 24 - Valor de espaçamento para 24.
 * @property {'28'} 28 - Valor de espaçamento para 28.
 * @property {'32'} 32 - Valor de espaçamento para 32.
 * @property {'36'} 36 - Valor de espaçamento para 36.
 */
export const spacing: Spacing = {
  '0': '0rem',
  '0.5': '0.2rem',
  '1': '0.4rem',
  '1.5': '0.6rem',
  '2': '0.8rem',
  '3': '1.2rem',
  '4': '1.6rem',
  '5': '2rem',
  '6': '2.4rem',
  '7': '2.8rem',
  '8': '3.2rem',
  '9': '3.6rem',
  '10': '4rem',
  '12': '4.8rem',
  '14': '5.6rem',
  '16': '6.4rem',
  '18': '7.2rem',
  '20': '8rem',
  '24': '9.6rem',
  '28': '11.2rem',
  '32': '12.8rem',
  '36': '14.4rem',
}

export const primaryColor = {
  default: '#7c3aed',
  light: '#8b5cf6',
  dark: '#6d28d9',
}
export const infoColor = {
  dark: '#2563eb',
  default: '#3b82f6',
  light: '#60a5fa',
}
export const successColor = {
  dark: '#15803d',
  default: '#16a34a',
  light: '#4ade80',
}
export const warningColor = {
  dark: '#d97706',
  default: '#f59e0b',
  light: '#fb923c',
}
export const errorColor = {
  dark: '#b91c1c',
  default: '#dc2626',
  light: '#f87171',
}
