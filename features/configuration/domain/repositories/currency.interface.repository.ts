import { Currency } from '../entities/currency.entity'

export interface CurrencyInterfaceRepository {
  save(currency: Currency): void
  getAll(): Currency[]
  getById(id: string): Currency
  delete(id: string): Currency
  update(currency: Currency): Currency
}