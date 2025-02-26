export class StringBuilder {
  private str = ''

  static parse(str: string): StringBuilder {
    const stringBuilder = new StringBuilder()

    stringBuilder.str = str.trim()
    return stringBuilder
  }

  firstName(): StringBuilder {
    const parts = this.str.split(' ')
    if (parts.length >= 2) {
      this.str = parts[0]
    }
    return this
  }

  lastName(): StringBuilder {
    const parts = this.str.split(' ')
    if (parts.length >= 1) {
      this.str = parts[parts.length - 1]
    }
    return this
  }

  removeAccents(): StringBuilder {
    // biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
    this.str = this.str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    return this
  }

  upper(): StringBuilder {
    this.str = this.str.toUpperCase()

    return this
  }

  capitalize(): StringBuilder {
    const parts = this.str.split(' ')
    parts.forEach((part, index) => {
      parts[index] = part.charAt(0).toUpperCase() + part.slice(1)
    })
    this.str = parts.join(' ')
    return this
  }

  sliced(length: number): StringBuilder {
    const slicedStr = `${this.str.slice(0, length)}...`
    this.str = this.str.length > length ? slicedStr : this.str

    return this
  }

  lower(): StringBuilder {
    this.str = this.str.toLowerCase()

    return this
  }

  build(): string {
    return this.str
  }
}
