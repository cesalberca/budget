import { BalanceToBalanceDtoConverter } from './balance-to-balance-dto-converter'

describe('BalanceToBalanceDtoConverter', () => {
  it('should convert a balance to dto', () => {
    const balanceToBalanceDtoConverter = new BalanceToBalanceDtoConverter()

    const actual = balanceToBalanceDtoConverter.convert({ name: 'César', quantity: 134 })

    expect(actual).toEqual(['César', 134])
  })
})
