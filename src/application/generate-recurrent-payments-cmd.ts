import { Command } from '../domain/types/command'
import { RecurrentPaymentRepository } from '../domain/payment/recurrent-payment-repository'

export class GenerateRecurrentPaymentsCmd implements Command {
  constructor(private readonly recurrentPaymentRepository: RecurrentPaymentRepository) {}

  execute(): void {
    const payments = this.recurrentPaymentRepository.findAll()
    payments.forEach(payment => this.recurrentPaymentRepository.create(payment))
  }
}
