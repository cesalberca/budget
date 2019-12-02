import { GenerateRecurrentPaymentsCmd } from './generate-recurrent-payments-cmd'
import { capture, instance, mock, when } from 'ts-mockito'
import { RecurrentPaymentRepository } from '../domain/recurrent-payment/recurrent-payment-repository'

describe('GenerateRecurrentPaymentsCmd', () => {
  it('should find every recurrent payment and create a new entry', () => {
    const { generateRecurrentPaymentsCmd, recurrentPaymentRepository } = setup()

    generateRecurrentPaymentsCmd.execute()

    const [last] = capture(recurrentPaymentRepository.create).beforeLast()
    const [beforeLast] = capture(recurrentPaymentRepository.create).last()

    expect(last).toEqual({ debtor: 'foo', detail: 'bar', quantity: 1, type: 'baz' })
    expect(beforeLast).toEqual({ debtor: 'baz', detail: 'bar', quantity: 1, type: 'foo' })
  })
})

function setup() {
  const recurrentPaymentRepository = mock<RecurrentPaymentRepository>()

  when(recurrentPaymentRepository.findAll()).thenReturn([
    { debtor: 'foo', detail: 'bar', quantity: 1, type: 'baz' },
    { debtor: 'baz', detail: 'bar', quantity: 1, type: 'foo' }
  ])
  return {
    recurrentPaymentRepository,
    generateRecurrentPaymentsCmd: new GenerateRecurrentPaymentsCmd(instance(recurrentPaymentRepository))
  }
}
