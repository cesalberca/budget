import { RecurrentPaymentDtoConverter } from './recurrent-payment-dto-converter'
import { RecurrentPayment } from './recurrent-payment'

describe('RecurrentPaymentDtoConverter', () => {
  it('should convert tuple to object', () => {
    const { recurrentDtoConverter } = setup()
    const expected: RecurrentPayment = {
      detail: 'a',
      debtor: 'b',
      type: 'c',
      quantity: 1
    }

    const actual = recurrentDtoConverter.convert(['a', 'b', 'c', 1])

    expect(actual).toEqual(expected)
  })
})

function setup() {
  return {
    recurrentDtoConverter: new RecurrentPaymentDtoConverter()
  }
}
