import { OneOffPaymentRepository } from '../../../domain/payment/one-off-payment-repository'
import { PaymentSheets } from '../payment-sheets-repository'
import { Payment } from '../../../domain/payment/payment'

export class OneOffPaymentSheetsRepository implements OneOffPaymentRepository {
  constructor(private readonly paymentSheets: PaymentSheets) {}

  findAll(): Payment[] {
    return this.paymentSheets.findAll('OneOff')
  }
}
