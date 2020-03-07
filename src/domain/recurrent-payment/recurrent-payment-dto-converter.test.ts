import { RecurrentPaymentDtoConverter } from './recurrent-payment-dto-converter'
import { RecurrentPayment } from './recurrent-payment'
import { Datetime } from '../datetime'

describe('RecurrentPaymentDtoConverter', () => {
  it('should convert tuple to object', () => {
    const { recurrentDtoConverter } = setup()
    const expected: RecurrentPayment = {
      detail: 'a',
      from: 'b',
      to: ['c', 'e'],
      type: 'd',
      quantity: 1,
      owned: 1,
      date: Datetime.fromIso('2019-09-10')
    }

    const actual = recurrentDtoConverter.convert(['a', 'b', 'c,e', 'd', 1, '2019-09-10', 1])

    expect(actual).toEqual(expected)
  })
})

function setup() {
  return {
    recurrentDtoConverter: new RecurrentPaymentDtoConverter()
  }
}
