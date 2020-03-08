import { Converter } from '../../domain/converter'
import { BalanceDto } from './balance-dto'
import { Balance } from '../../domain/summary/balance'

export class BalanceToBalanceDtoConverter implements Converter<Balance, BalanceDto> {
  convert({ name, quantity }: Balance): BalanceDto {
    return [name, quantity]
  }
}
