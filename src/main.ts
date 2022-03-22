import { RecurrentPaymentSheetsRepository } from './infrastructure/payment/recurrent-payment/recurrent-payment-sheets-repository'
import { GenerateRecurrentPaymentsCmd } from './application/generate-recurrent-payments-cmd'
import { PaymentSheets } from './infrastructure/payment/payment-sheets-repository'
import { PaymentToPaymentDtoConverter } from './infrastructure/payment/payment-to-payment-dto-converter'
import { PaymentDtoToPaymentConverter } from './infrastructure/payment/payment-dto-to-payment-converter'

// @ts-ignore No need to generate exports
function main() {
  const recurrentPaymentSheetsRepository = new RecurrentPaymentSheetsRepository(
    new PaymentSheets(SpreadsheetApp, new PaymentDtoToPaymentConverter(), new PaymentToPaymentDtoConverter()),
  )
  const generateRecurrentPaymentsCmd = new GenerateRecurrentPaymentsCmd(recurrentPaymentSheetsRepository)
  generateRecurrentPaymentsCmd.execute()
}
