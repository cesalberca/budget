import { CalculateBalanceCmd } from './calculate-balance-cmd'
import { capture, instance, mock, when } from 'ts-mockito'
import { OneOffPaymentRepository } from '../domain/payment/one-off-payment-repository'
import { RecurrentPaymentRepository } from '../domain/payment/recurrent-payment-repository'
import { SummaryRepository } from '../domain/summary/summary-repository'
import { PaymentMother } from '../domain/payment/payment-mother'

describe('CalculateBalanceCmd', () => {
  it('should generate a balance from a single recurrent payment', () => {
    const { summaryRepository, oneOffPaymentRepository, recurrentPaymentRepository, calculateBalanceCmd } = setup()
    when(recurrentPaymentRepository.findAll()).thenReturn([PaymentMother.gym()])
    when(oneOffPaymentRepository.findAll()).thenReturn([])

    calculateBalanceCmd.execute()

    const [actual] = capture(summaryRepository.updateBalances).last()
    expect(actual).toEqual([
      { name: 'César', quantity: 15 },
      { name: 'Aisha', quantity: -15 }
    ])
  })

  it('should generate a balance from multiple recurrent payments', () => {
    const { summaryRepository, oneOffPaymentRepository, recurrentPaymentRepository, calculateBalanceCmd } = setup()
    when(recurrentPaymentRepository.findAll()).thenReturn([PaymentMother.gym(), PaymentMother.rent()])
    when(oneOffPaymentRepository.findAll()).thenReturn([])

    calculateBalanceCmd.execute()

    const [actual] = capture(summaryRepository.updateBalances).last()
    expect(actual).toEqual([
      { name: 'César', quantity: 265 },
      { name: 'Aisha', quantity: -265 }
    ])
  })
})

function setup() {
  const oneOffPaymentRepository = mock<OneOffPaymentRepository>()
  const recurrentPaymentRepository = mock<RecurrentPaymentRepository>()
  const summaryRepository = mock<SummaryRepository>()

  return {
    summaryRepository,
    oneOffPaymentRepository,
    recurrentPaymentRepository,
    calculateBalanceCmd: new CalculateBalanceCmd(
      instance(oneOffPaymentRepository),
      instance(recurrentPaymentRepository),
      instance(summaryRepository)
    )
  }
}
