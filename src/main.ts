import { RecurrentPaymentSheetsRepository } from './infraestructure/recurrent-payment-sheets-repository'
import { RecurrentPaymentDtoConverter } from './domain/recurrent-payment/recurrent-payment-dto-converter'
import { RecurrentPaymentConverter } from './domain/recurrent-payment/recurrent-payment-converter'
import { GenerateRecurrentPaymentsCmd } from './application/generate-recurrent-payments-cmd'

export function main() {
  const recurrentPaymentSheetsRepository = new RecurrentPaymentSheetsRepository(
    SpreadsheetApp,
    new RecurrentPaymentDtoConverter(),
    new RecurrentPaymentConverter()
  )
  const generateRecurrentPaymentsCmd = new GenerateRecurrentPaymentsCmd(recurrentPaymentSheetsRepository)
  generateRecurrentPaymentsCmd.execute()
}
