import { instance, mock, verify } from 'ts-mockito'
import { RecurrentPaymentSheetsRepository } from './recurrent-payment-sheets-repository'
import { PaymentSheets } from '../payment-sheets-repository'

describe('RecurrentPaymentSheetsRepository', () => {
  it('should use the payments sheets', () => {
    const { recurrentPaymentSheetsRepository, paymentSheets } = setup()

    recurrentPaymentSheetsRepository.findAll()

    verify(paymentSheets.findAll('Recurrent')).once()
  })
})

function setup() {
  const paymentSheets = mock(PaymentSheets)

  return {
    paymentSheets,
    recurrentPaymentSheetsRepository: new RecurrentPaymentSheetsRepository(instance(paymentSheets))
  }
}
