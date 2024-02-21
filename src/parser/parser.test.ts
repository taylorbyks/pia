import { expect, test } from 'bun:test'
import { parser } from './parser.ts'

test.skip('should parse simple program correctly', () => {
  const tokens = [
    { type: 'id', value: 'foo' },
    { type: 'arithmetic_operator', value: '+' },
    { type: 'id', value: 'bar' },
    { type: ';', value: ';' },
  ]
  const result = parser(tokens)

  expect(result).not.toBeNull()
  expect(result).toEqual()
})
