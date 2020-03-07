import { SummaryRepository } from '../../domain/summary/summary-repository'
import { Balance } from '../../domain/summary/balance'
import { BalanceToBalanceDtoConverter } from './balance-to-balance-dto-converter'

export class SummarySheetRepository implements SummaryRepository {
  constructor(
    private readonly spreadsheetApp: typeof SpreadsheetApp,
    private readonly balanceToBalanceDtoConverter: BalanceToBalanceDtoConverter
  ) {}

  updateBalances(balances: Balance[]): void {
    const summary = this.spreadsheetApp.getActiveSpreadsheet().getSheetByName('Summary')!
    balances.forEach(balance => {
      const dto = this.balanceToBalanceDtoConverter.convert(balance)
      summary
        .insertRowBefore(2)
        .getRange(2, 1, 1, dto.length + 1)
        .setValues([dto])
    })
  }
}
