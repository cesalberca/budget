import { Payment } from '../../domain/payment/payment'
import { Datetime } from '../../domain/datetime'
import { PaymentDtoToPaymentConverter } from './payment-dto-to-payment-converter'

describe('PaymentDtoToPaymentConverter', () => {
  it('should convert tuple to object', () => {
    const { recurrentDtoConverter } = setup()
    const expected: Payment = {
      timestamp: Datetime.fromIso('2019-09-10'),
      detail: 'a',
      from: 'b',
      to: ['c', 'e'],
      type: 'd',
      quantity: 1,
      date: Datetime.fromIso('2019-09-10')
    }

    const actual = recurrentDtoConverter.convert(['2019-09-10', 'a', 'b', 'c,e', 'd', 1, '2019-09-10'])

    expect(actual).toEqual(expected)
  })
})

function setup() {
  return {
    recurrentDtoConverter: new PaymentDtoToPaymentConverter()
  }
}
