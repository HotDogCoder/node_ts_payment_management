export class CurrencyNotFoundException extends Error {
  constructor(message?: string) {
    super(message || 'Currency not found')

    Object.setPrototypeOf(this, CurrencyNotFoundException.prototype)
  }
}