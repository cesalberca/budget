import { RecurrentPaymentRepository } from '../../../domain/payment/recurrent-payment-repository'
import { Payment } from '../../../domain/payment/payment'
import { PaymentSheets } from '../payment-sheets-repository'

export class RecurrentPaymentSheetsRepository implements RecurrentPaymentRepository {
  constructor(private readonly paymentSheets: PaymentSheets) {}

  findAll(): Payment[] {
    return this.paymentSheets.findAll('RecurrentPayments')
  }

  findRecurrent(): Payment[] {
    return this.paymentSheets.findAll('Recurrent')
  }

  create(payment: Payment): void {
    this.paymentSheets.insert('RecurrentPayments', payment)
  }
}
