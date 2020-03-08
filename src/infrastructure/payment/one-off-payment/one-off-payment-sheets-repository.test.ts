import { instance, mock, verify } from 'ts-mockito'
import { OneOffPaymentSheetsRepository } from './one-off-payment-sheets-repository'
import { PaymentSheets } from '../payment-sheets-repository'

describe('OneOffPaymentSheetsRepository', () => {
  it('should use the payments sheets', () => {
    const { oneOffPaymentSheetsRepository, paymentSheets } = setup()

    oneOffPaymentSheetsRepository.findAll()

    verify(paymentSheets.findAll('OneOff')).once()
  })
})

function setup() {
  const paymentSheets = mock(PaymentSheets)

  return { paymentSheets, oneOffPaymentSheetsRepository: new OneOffPaymentSheetsRepository(instance(paymentSheets)) }
}
