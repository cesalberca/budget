import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { RecurrentPaymentSheetsRepository } from './infraestructure/recurrent-payment-sheets-repository'
import { RecurrentPaymentDtoConverter } from './domain/recurrent-payment/recurrent-payment-dto-converter'
import { RecurrentPaymentConverter } from './domain/recurrent-payment/recurrent-payment-converter'

export function main() {
  const recurrentPaymentSheetsRepository = new RecurrentPaymentSheetsRepository(
    SpreadsheetApp,
    new RecurrentPaymentDtoConverter(),
    new RecurrentPaymentConverter()
  )

  recurrentPaymentSheetsRepository.create({ type: 'foo', quantity: 1, detail: 'bar', debtor: 'baz' })
}
