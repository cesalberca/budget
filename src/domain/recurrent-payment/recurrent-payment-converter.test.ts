import { RecurrentPaymentDto } from './recurrent-payment-dto'
import { RecurrentPaymentConverter } from './recurrent-payment-converter'

describe('RecurrentPaymentDtoConverter', () => {
  it('should convert tuple to object', () => {
    const { recurrentPaymentConverter } = setup()
    const expected: RecurrentPaymentDto = ['a', 'b', 'c', 'd', 1]

    const actual = recurrentPaymentConverter.convert({
      detail: 'a',
      payer: 'b',
      debtor: 'c',
      type: 'd',
      quantity: 1
    })

    expect(actual).toEqual(expected)
  })
})

function setup() {
  return {
    recurrentPaymentConverter: new RecurrentPaymentConverter()
  }
}
