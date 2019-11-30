import { StringUtils } from './string-utils'

describe('StringUtils', () => {
  it.each`
    position | expected
    ${0}     | ${'a'}
    ${1}     | ${'b'}
    ${25}    | ${'z'}
    ${-100}  | ${'a'}
    ${100}   | ${'z'}
  `('should get the position of the letter', ({ position, expected }) => {
    const actual = StringUtils.getLetterPosition(position)

    expect(actual).toBe(expected)
  })
})
