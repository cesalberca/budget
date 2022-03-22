import { PaymentDto } from './payment-dto'
import { Datetime } from '../../domain/datetime'
import { PaymentToPaymentDtoConverter } from './payment-to-payment-dto-converter'

describe('PaymentToPaymentDtoConverter', () => {
  it('should convert tuple to object', () => {
    const { paymentConverter } = setup()
    const expected: PaymentDto = ['2019-01-10T00:00:00.000Z', 'a', 'b', 'c,e', 'd', 1, '2019-01-10T00:00:00.000Z']

    const actual = paymentConverter.convert({
      timestamp: Datetime.fromIso('2019-01-10'),
      detail: 'a',
      from: 'b',
      to: ['c', 'e'],
      type: 'd',
      quantity: 1,
      date: Datetime.fromIso('2019-01-10'),
    })

    expect(actual).toEqual(expected)
  })
})

function setup() {
  return {
    paymentConverter: new PaymentToPaymentDtoConverter(),
  }
}
