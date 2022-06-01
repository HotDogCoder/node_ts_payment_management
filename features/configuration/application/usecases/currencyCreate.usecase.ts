import { Currency } from "../../domain/entities/currency.entity"
import { CurrencyInterfaceRepository } from "../../domain/repositories/currency.interface.repository"
import { CurrencyNameLengthException } from "../../domain/exceptions/currencyNameLength.exception"
import { NotifierInterfaceRepository } from "../../../../core/domain/repositories/notifier.interface.repository"

export class CurrencyCreate {
  private _currencyRepository: CurrencyInterfaceRepository
  private _notifier: NotifierInterfaceRepository

  constructor(currencyRepository: CurrencyInterfaceRepository, notifier: NotifierInterfaceRepository) {
    this._currencyRepository = currencyRepository
    this._notifier = notifier
  }

  async run({ id, name, short_name }: { id: string, name: string, short_name: string }): Promise<Currency> {
    const currency = new Currency({ id, name, short_name })

    if (currency.short_name.length < 1)
      throw new CurrencyNameLengthException();
  
    await this._currencyRepository.save(currency);

    this._notifier.notify({
      name: currency.name,
      short_name: currency.short_name
    })

    return currency
  }
}
