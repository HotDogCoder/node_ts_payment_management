export class CurrencyNameLengthException extends Error {
    constructor(message?: string) {
        super(message || 'The name is too short')

        Object.setPrototypeOf(this, CurrencyNameLengthException.prototype)
    }
}