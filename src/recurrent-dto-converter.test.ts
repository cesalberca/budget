import { RecurrentDtoConverter } from './recurrent-dto-converter'
import { Recurrent } from './recurrent'

describe('RecurrentDtoConverter', () => {
  it('should convert tuple to object', () => {
    const { recurrentDtoConverter } = setup()
    const expected: Recurrent = {
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
    recurrentDtoConverter: new RecurrentDtoConverter()
  }
}
