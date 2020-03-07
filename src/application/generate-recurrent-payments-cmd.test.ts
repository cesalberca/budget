import { GenerateRecurrentPaymentsCmd } from './generate-recurrent-payments-cmd'
import { capture, instance, mock, when } from 'ts-mockito'
import { RecurrentPaymentRepository } from '../domain/payment/recurrent-payment-repository'
import { PaymentMother } from '../domain/payment/payment-mother'

describe('GenerateRecurrentPaymentsCmd', () => {
  it('should find every recurrent payment and create a new entry', () => {
    const { generateRecurrentPaymentsCmd, recurrentPaymentRepository } = setup()
    when(recurrentPaymentRepository.findAll()).thenReturn([PaymentMother.gym(), PaymentMother.rent()])

    generateRecurrentPaymentsCmd.execute()

    const [last] = capture(recurrentPaymentRepository.create).beforeLast()
    const [beforeLast] = capture(recurrentPaymentRepository.create).last()
    expect(last).toEqual(PaymentMother.gym())
    expect(beforeLast).toEqual(PaymentMother.rent())
  })
})

function setup() {
  const recurrentPaymentRepository = mock<RecurrentPaymentRepository>()

  return {
    recurrentPaymentRepository,
    generateRecurrentPaymentsCmd: new GenerateRecurrentPaymentsCmd(instance(recurrentPaymentRepository))
  }
}
