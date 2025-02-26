import { StringBuilder } from './string-builder'

describe('StringBuilder', () => {
  test('Deve sanitizar a string', () => {
    const input = '  Teste 123 '
    const expected = 'Teste 123'
    const result = StringBuilder.parse(input).build()
    expect(result).toBe(expected)
  })

  test('Deve retornar o primeiro nome do texto', () => {
    const input = 'John Silva Doe'
    const expected = 'John'
    const result = StringBuilder.parse(input).firstName().build()
    expect(result).toBe(expected)
  })

  test('Deve retornar o último nome do texto', () => {
    const input = 'John Silva Doe'
    const expected = 'Doe'
    const result = StringBuilder.parse(input).lastName().build()
    expect(result).toBe(expected)
  })
  test('Deve remover os acentos do texto', () => {
    const input = 'Acréscimo'
    const expected = 'Acrescimo'
    const result = StringBuilder.parse(input).removeAccents().build()
    expect(result).toBe(expected)
  })
  test('Deve retornar o texto em maiúsculo', () => {
    const input = 'john doe'
    const expected = 'JOHN DOE'
    const result = StringBuilder.parse(input).upper().build()
    expect(result).toBe(expected)
  })
  test('Deve retornar o texto em minúsculo', () => {
    const input = 'JOHN doe'
    const expected = 'john doe'
    const result = StringBuilder.parse(input).lower().build()
    expect(result).toBe(expected)
  })
  test('Deve retornar uma composição de letras minúsculas, texto sanitizado, texto sem acento', () => {
    const input = '   A raposa marrom ataca o Cão preguiçoso '
    const expected = 'a raposa marrom ataca o cao preguicoso'
    const result = StringBuilder.parse(input).lower().removeAccents().build()
    expect(result).toBe(expected)
  })
})
