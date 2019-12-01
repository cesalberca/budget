import { RecurrentPaymentRepository } from '../domain/recurrent-payment/recurrent-payment-repository'
import { RecurrentPayment } from '../domain/recurrent-payment/recurrent-payment'
import { RecurrentPaymentDto } from '../domain/recurrent-payment/recurrent-payment-dto'
import { RecurrentPaymentDtoConverter } from '../domain/recurrent-payment/recurrent-payment-dto-converter'
import { RecurrentPaymentConverter } from '../domain/recurrent-payment/recurrent-payment-converter'

export class RecurrentPaymentSheetsRepository implements RecurrentPaymentRepository {
  constructor(
    private readonly spreadsheetApp: typeof SpreadsheetApp,
    private readonly recurrentPaymentDtoConverter: RecurrentPaymentDtoConverter,
    private readonly recurrentPaymentConverter: RecurrentPaymentConverter
  ) {}

  async findAll(): Promise<RecurrentPayment[]> {
    const recurrent = this.spreadsheetApp.getActiveSpreadsheet().getSheetByName('Recurrent')!
    const data = recurrent.getDataRange().getValues() as RecurrentPaymentDto[]
    return data.map(this.recurrentPaymentDtoConverter.convert)
  }

  async create(entity: RecurrentPayment): Promise<void> {
    const recurrent = this.spreadsheetApp.getActiveSpreadsheet().getSheetByName('Recurrent')!
    recurrent
      .insertRowBefore(0)
      .getRange(1, 1)
      .setValue(this.recurrentPaymentConverter.convert(entity))
  }
}
