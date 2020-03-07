import { RecurrentPaymentDto } from './recurrent-payment-dto'
import { RecurrentPaymentConverter } from './recurrent-payment-converter'
import { Datetime } from '../datetime'

describe('RecurrentPaymentDtoConverter', () => {
  it('should convert tuple to object', () => {
    const { recurrentPaymentConverter } = setup()
    const expected: RecurrentPaymentDto = ['a', 'b', 'c,e', 'd', 1, '2019-01-10T00:00:00.000Z', 1]

    const actual = recurrentPaymentConverter.convert({
      detail: 'a',
      from: 'b',
      to: ['c', 'e'],
      type: 'd',
      quantity: 1,
      owned: 1,
      date: Datetime.fromIso('2019-01-10')
    })

    expect(actual).toEqual(expected)
  })
})

function setup() {
  return {
    recurrentPaymentConverter: new RecurrentPaymentConverter()
  }
}
