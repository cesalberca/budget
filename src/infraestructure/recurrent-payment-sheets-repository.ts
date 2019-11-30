import { RecurrentPaymentRepository } from '../domain/recurrent-payment-repository'
import { RecurrentPayment } from '../domain/recurrent-payment'
import { RecurrentPaymentDto } from '../domain/recurrent-payment-dto'
import { Converter } from '../domain/converter'
import SpreadsheetApp = GoogleAppsScript.Spreadsheet.SpreadsheetApp

export class RecurrentPaymentSheetsRepository implements RecurrentPaymentRepository {
  constructor(
    private readonly spreadsheetApp: SpreadsheetApp,
    private readonly converter: Converter<RecurrentPaymentDto, RecurrentPayment>
  ) {}

  async findAll(): Promise<RecurrentPayment[]> {
    const recurrent = this.spreadsheetApp.getActiveSpreadsheet().getSheetByName('Recurrent')!
    const data = recurrent.getDataRange().getValues() as RecurrentPaymentDto[]
    return data.map(this.converter.convert)
  }
}
