import { RecurrentPaymentSheetsRepository } from './infrastructure/payment/recurrent-payment/recurrent-payment-sheets-repository'
import { GenerateRecurrentPaymentsCmd } from './application/generate-recurrent-payments-cmd'
import { PaymentSheets } from './infrastructure/payment/payment-sheets-repository'
import { PaymentToPaymentDtoConverter } from './infrastructure/payment/payment-to-payment-dto-converter'
import { CalculateBalanceCmd } from './application/calculate-balance-cmd'
import { OneOffPaymentSheetsRepository } from './infrastructure/payment/one-off-payment/one-off-payment-sheets-repository'
import { SummarySheetRepository } from './infrastructure/summary/summary-sheet-repository'
import { BalanceToBalanceDtoConverter } from './infrastructure/summary/balance-to-balance-dto-converter'
import { PaymentDtoToPaymentConverter } from './infrastructure/payment/payment-dto-to-payment-converter'

function main() {
  const recurrentPaymentSheetsRepository = new RecurrentPaymentSheetsRepository(
    new PaymentSheets(SpreadsheetApp, new PaymentDtoToPaymentConverter(), new PaymentToPaymentDtoConverter()),
  )
  const generateRecurrentPaymentsCmd = new GenerateRecurrentPaymentsCmd(recurrentPaymentSheetsRepository)
  generateRecurrentPaymentsCmd.execute()
}

function calculateBalances() {
  const recurrentPaymentSheetsRepository = new RecurrentPaymentSheetsRepository(
    new PaymentSheets(SpreadsheetApp, new PaymentDtoToPaymentConverter(), new PaymentToPaymentDtoConverter()),
  )
  const oneOffPaymentSheetsRepository = new OneOffPaymentSheetsRepository(
    new PaymentSheets(SpreadsheetApp, new PaymentDtoToPaymentConverter(), new PaymentToPaymentDtoConverter()),
  )

  const summarySheetRepository = new SummarySheetRepository(SpreadsheetApp, new BalanceToBalanceDtoConverter())
  const generateRecurrentPaymentsCmd = new CalculateBalanceCmd(
    oneOffPaymentSheetsRepository,
    recurrentPaymentSheetsRepository,
    summarySheetRepository,
  )
  generateRecurrentPaymentsCmd.execute()
}
