import { RecurrentDto } from './recurrent-dto'
import { StringUtils } from './string-utils'

export function main() {
  const recurrent = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Recurrent')!
  const recurrentPayments = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('RecurrentPayments')!
  const data = recurrent.getDataRange().getValues() as RecurrentDto[]

  data.forEach(row => {
    Logger.log(recurrentPayments.getLastRow())
    Logger.log(recurrentPayments.getLastColumn())
    recurrentPayments.getRange(`A2:${StringUtils.getLetterPosition(row.length)}`).setValue(row)
  })
}
