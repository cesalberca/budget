import { RecurrentPaymentDto } from './domain/recurrent-payment-dto'
import { StringUtils } from './domain/string-utils'

export function main() {
  const recurrent = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Recurrent')!
  const recurrentPayments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('RecurrentPayments')!
  const data = recurrent.getDataRange().getValues() as RecurrentPaymentDto[]

  data.forEach(row => {
    Logger.log(recurrentPayments.getLastRow())
    Logger.log(recurrentPayments.getLastColumn())
    recurrentPayments.getRange(`A2:${StringUtils.getLetterPosition(row.length)}`).setValue(row)
  })
}
