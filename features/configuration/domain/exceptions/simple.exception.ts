export class SimpleException extends Error {
    constructor(message?: string) {
        super(message || 'The currencys is minor age')
        Object.setPrototypeOf(this, SimpleException.prototype)
    }
}