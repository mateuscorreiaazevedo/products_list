import { CurrencyBuilder } from './currency-builder'

describe('CurrencyBuilder', () => {
  test('Should format the price to BRL', () => {
    const currency = CurrencyBuilder.format(100).toBRL()
    expect(currency.replace(/\s/g, '')).toEqual('R$100,00')
  })
  test('Should format the price to USD', () => {
    const currency = CurrencyBuilder.format(100).toUSD()
    expect(currency.replace(/\s/g, '')).toEqual('$100.00')
  })
})
