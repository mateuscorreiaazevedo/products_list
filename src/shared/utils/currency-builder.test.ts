import { CurrencyBuilder } from './currency-builder'

describe('CurrencyBuilder', () => {
  test('Deve formatar o preço para BRL', () => {
    const currency = CurrencyBuilder.format(100).toBRL()
    expect(currency.replace(/\s/g, '')).toEqual('R$100,00')
  })
  test('Deve formatar o preço para USD', () => {
    const currency = CurrencyBuilder.format(100).toUSD()
    expect(currency.replace(/\s/g, '')).toEqual('$100.00')
  })
})
