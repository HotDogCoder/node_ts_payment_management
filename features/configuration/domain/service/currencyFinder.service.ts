import { Currency } from "../entities/currency.entity";
import { CurrencyNotFoundException } from "../exceptions/currencyNotFound.exception";
import { CurrencyInterfaceRepository } from "../repositories/currency.interface.repository";

export class CurrencyFinder {
  private _currencyRepository: CurrencyInterfaceRepository

  constructor(currencyRepository: CurrencyInterfaceRepository) {
    this._currencyRepository = currencyRepository
  }

  async run(currencyId: string): Promise<Currency> {
    const currency: Currency = await this._currencyRepository.getById(currencyId)
    
    if (!currency)
      throw new CurrencyNotFoundException()

    return currency
  }
}
