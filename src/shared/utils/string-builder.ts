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

  lower(): StringBuilder {
    this.str = this.str.toLowerCase()

    return this
  }

  build(): string {
    return this.str
  }
}
