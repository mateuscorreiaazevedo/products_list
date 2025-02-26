import { StringBuilder } from './string-builder'

describe('StringBuilder', () => {
  test('Should sanitize the string', () => {
    const input = '  Teste 123 '
    const expected = 'Teste 123'
    const result = StringBuilder.parse(input).build()
    expect(result).toBe(expected)
  })

  test('Should return the first name from the text', () => {
    const input = 'John Silva Doe'
    const expected = 'John'
    const result = StringBuilder.parse(input).firstName().build()
    expect(result).toBe(expected)
  })

  test('Should return the last name from the text', () => {
    const input = 'John Silva Doe'
    const expected = 'Doe'
    const result = StringBuilder.parse(input).lastName().build()
    expect(result).toBe(expected)
  })
  test('Should remove accents from the text', () => {
    const input = 'Acréscimo'
    const expected = 'Acrescimo'
    const result = StringBuilder.parse(input).removeAccents().build()
    expect(result).toBe(expected)
  })
  test('Should return the text in uppercase', () => {
    const input = 'john doe'
    const expected = 'JOHN DOE'
    const result = StringBuilder.parse(input).upper().build()
    expect(result).toBe(expected)
  })
  test('Should return the text in lowercase', () => {
    const input = 'JOHN doe'
    const expected = 'john doe'
    const result = StringBuilder.parse(input).lower().build()
    expect(result).toBe(expected)
  })

  test('Should return the text capitalized', () => {
    const input = 'john doe'
    const expected = 'John Doe'
    const result = StringBuilder.parse(input).capitalize().build()
    expect(result).toBe(expected)
  })

  test('Should return a sliced text', () => {
    const input = 'Lorem'
    const expected = 'Lor...'
    const result = StringBuilder.parse(input).sliced(3).build()
    expect(result).toBe(expected)
  })

  test('Should return a composition of lowercase letters, sanitized text, and text without accents', () => {
    const input = '   A raposa marrom ataca o Cão preguiçoso '
    const expected = 'a raposa marrom ataca o cao preguicoso'
    const result = StringBuilder.parse(input).lower().removeAccents().build()
    expect(result).toBe(expected)
  })
})
