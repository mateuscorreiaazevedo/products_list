export class CurrencyBuilder {
  private currency = ''

  static format(currency: number): CurrencyBuilder {
    const currencyBuilder = new CurrencyBuilder()
    currencyBuilder.currency = currency.toString()
    return currencyBuilder
  }

  toBRL(): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(Number.parseFloat(this.currency))
  }

  toUSD(): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(Number.parseFloat(this.currency))
  }
}
