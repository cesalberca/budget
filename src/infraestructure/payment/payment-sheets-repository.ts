import { PaymentToPaymentDtoConverter } from './payment-to-payment-dto-converter'
import { Payment } from '../../domain/payment/payment'
import { PaymentDto } from './payment-dto'
import { PaymentDtoToPaymentConverter } from './payment-dto-to-payment-converter'

export class PaymentSheets {
  constructor(
    private readonly spreadsheetApp: typeof SpreadsheetApp,
    private readonly paymentDtoConverter: PaymentDtoToPaymentConverter,
    private readonly paymentConverter: PaymentToPaymentDtoConverter
  ) {}

  findAll(sheet: string): Payment[] {
    const recurrent = this.spreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet)!
    const data = recurrent.getDataRange().getValues() as PaymentDto[]
    return data.slice(1).map(this.paymentDtoConverter.convert)
  }

  create(sheet: string, payment: Payment): void {
    const recurrent = this.spreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet)!
    const entity = this.paymentConverter.convert(payment)
    recurrent
      .insertRowBefore(2)
      .getRange(2, 1, 1, entity.length + 1)
      .setValues([[...entity, new Date()]])
  }
}
