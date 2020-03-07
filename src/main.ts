import { RecurrentPaymentSheetsRepository } from './infraestructure/payment/recurrent-payment/recurrent-payment-sheets-repository'
import { GenerateRecurrentPaymentsCmd } from './application/generate-recurrent-payments-cmd'
import { PaymentSheets } from './infraestructure/payment/payment-sheets-repository'
import { PaymentDtoConverter } from './infraestructure/payment/payment-dto-converter'
import { PaymentConverter } from './infraestructure/payment/payment-converter'

export function main() {
  const recurrentPaymentSheetsRepository = new RecurrentPaymentSheetsRepository(
    new PaymentSheets(SpreadsheetApp, new PaymentDtoConverter(), new PaymentConverter())
  )
  const generateRecurrentPaymentsCmd = new GenerateRecurrentPaymentsCmd(recurrentPaymentSheetsRepository)
  generateRecurrentPaymentsCmd.execute()
}
