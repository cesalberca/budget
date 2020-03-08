import { Command } from '../domain/types/command'
import { OneOffPaymentRepository } from '../domain/payment/one-off-payment-repository'
import { RecurrentPaymentRepository } from '../domain/payment/recurrent-payment-repository'
import { SummaryRepository } from '../domain/summary/summary-repository'
import { Balance } from '../domain/summary/balance'
import { Payment } from '../domain/payment/payment'

export class CalculateBalanceCmd implements Command {
  constructor(
    readonly oneOffPaymentRepository: OneOffPaymentRepository,
    private readonly recurrentPaymentRepository: RecurrentPaymentRepository,
    readonly summaryRepository: SummaryRepository
  ) {}

  execute(): void {
    const recurrentPayments = this.recurrentPaymentRepository.findAll()
    const oneOffPayments = this.oneOffPaymentRepository.findAll()

    const balances = this.getBalances([...recurrentPayments, ...oneOffPayments])

    this.summaryRepository.updateBalances(balances)
  }

  private getBalances(payments: Payment[]) {
    const duplicatedBalances: Balance[] = payments.flatMap(payment =>
      payment.to.map(paymentTo => ({
        name: paymentTo,
        quantity: paymentTo === payment.from ? payment.owned : -payment.owned
      }))
    )

    const uniqueNames = Array.from(new Set(duplicatedBalances.map(balance => balance.name)))
    const balancesGroupedByName: Balance[][] = uniqueNames.map(name =>
      duplicatedBalances.filter(balance => balance.name === name)
    )
    const balances = balancesGroupedByName.map(balances =>
      balances.reduce(
        (previousValue, currentValue) => ({
          name: currentValue.name,
          quantity: previousValue.quantity + currentValue.quantity
        }),
        { name: '', quantity: 0 }
      )
    )
    return balances
  }
}
