import { Balance } from './balance'

export interface SummaryRepository {
  updateBalances(balances: Balance[]): void
}
