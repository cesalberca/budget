import { Command } from '../domain/types/command'
import { OneOffPaymentRepository } from '../domain/payment/one-off-payment-repository'
import { RecurrentPaymentRepository } from '../domain/payment/recurrent-payment-repository'
import { SummaryRepository } from '../domain/summary/summary-repository'
import { Balance } from '../domain/summary/balance'

export class CalculateBalanceCmd implements Command {
  constructor(
    readonly oneOffPaymentRepository: OneOffPaymentRepository,
    private readonly recurrentPaymentRepository: RecurrentPaymentRepository,
    readonly summaryRepository: SummaryRepository
  ) {}

  execute(): void {
    const recurrentPayments = this.recurrentPaymentRepository.findAll()

    const duplicatedBalances: Balance[] = recurrentPayments
      .filter(payment => {
        return !(payment.to.length === 1 && payment.to[0] === payment.from)
      })
      .flatMap(payment => {
        return payment.to.map(paymentTo => {
          return {
            name: paymentTo,
            quantity: paymentTo === payment.from ? payment.owned : -payment.owned
          }
        })
      })

    const uniqueNames = Array.from(new Set(duplicatedBalances.map(balance => balance.name)))
    const balancesGroupedByName: Balance[][] = uniqueNames.map(name =>
      duplicatedBalances.filter(balance => balance.name === name)
    )
    const balances = balancesGroupedByName.map(balances =>
      balances.reduce(
        (previousValue, currentValue) => {
          return {
            name: currentValue.name,
            quantity: previousValue.quantity + currentValue.quantity
          }
        },
        { name: '', quantity: 0 }
      )
    )

    this.summaryRepository.updateBalances(balances)
  }
}
