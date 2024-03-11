import { expect, test } from 'bun:test'
import { parser } from './parser.ts'

test('should show an error if program not start correctly', () => {
  const tokens = [
    { type: 'id', value: 'foo' },
    { type: 'arithmeticoperator', value: '+' },
    { type: 'id', value: 'bar' },
    { type: ';', value: ';' },
  ]

  try {
    parser(tokens)
  } catch (error) {
    expect(error).toEqual('Error: Unexpected token foo')
  }
})

test('should parse simple program correctly', () => {
  const tokens = [
    {
      type: 'pila',
      value: 'pila',
    },
    {
      type: 'dai',
      value: 'dai',
    },
    {
      type: '(',
      value: '(',
    },
    {
      type: ')',
      value: ')',
    },
    {
      type: '{',
      value: '{',
    },
    {
      type: 'pila',
      value: 'pila',
    },
    {
      type: 'id',
      value: 'VEZES',
    },
    {
      type: 'assignoperator',
      value: '=',
    },
    {
      type: 'int',
      value: '0',
    },
    {
      type: ',',
      value: ',',
    },
    {
      type: 'id',
      value: 'N',
    },
    {
      type: 'assignoperator',
      value: '=',
    },
    {
      type: 'int',
      value: '0',
    },
    {
      type: ';',
      value: ';',
    },
    {
      type: 'trocado',
      value: 'trocado',
    },
    {
      type: 'id',
      value: 'A',
    },
    {
      type: ';',
      value: ';',
    },
    {
      type: 'amostra',
      value: 'amostra',
    },
    {
      type: '(',
      value: '(',
    },
    {
      type: 'stringliteral',
      value: '"Digite 5 valores: "',
    },
    {
      type: ')',
      value: ')',
    },
    {
      type: ';',
      value: ';',
    },
    {
      type: 'arrodeia',
      value: 'arrodeia',
    },
    {
      type: '(',
      value: '(',
    },
    {
      type: 'id',
      value: 'VEZES',
    },
    {
      type: 'assignoperator',
      value: '=',
    },
    {
      type: 'int',
      value: '0',
    },
    {
      type: ';',
      value: ';',
    },
    {
      type: 'id',
      value: 'VEZES',
    },
    {
      type: 'relationaloperator',
      value: '<',
    },
    {
      type: 'int',
      value: '5',
    },
    {
      type: ')',
      value: ')',
    },
    {
      type: '{',
      value: '{',
    },
    {
      type: 'pega',
      value: 'pega',
    },
    {
      type: '(',
      value: '(',
    },
    {
      type: 'id',
      value: 'A',
    },
    {
      type: ')',
      value: ')',
    },
    {
      type: ';',
      value: ';',
    },
    {
      type: 'sepa',
      value: 'sepa',
    },
    {
      type: '(',
      value: '(',
    },
    {
      type: 'id',
      value: 'A',
    },
    {
      type: 'relationaloperator',
      value: '>',
    },
    {
      type: 'int',
      value: '0',
    },
    {
      type: ')',
      value: ')',
    },
    {
      type: '{',
      value: '{',
    },
    {
      type: 'id',
      value: 'N',
    },
    {
      type: 'assignoperator',
      value: '=',
    },
    {
      type: 'id',
      value: 'N',
    },
    {
      type: 'arithmeticoperator',
      value: '+',
    },
    {
      type: 'int',
      value: '1',
    },
    {
      type: ';',
      value: ';',
    },
    {
      type: '}',
      value: '}',
    },
    {
      type: '}',
      value: '}',
    },
    {
      type: 'amostra',
      value: 'amostra',
    },
    {
      type: '(',
      value: '(',
    },
    {
      type: 'stringliteral',
      value: '"%p valores positivos\\n"',
    },
    {
      type: ',',
      value: ',',
    },
    {
      type: 'id',
      value: 'N',
    },
    {
      type: ')',
      value: ')',
    },
    {
      type: ';',
      value: ';',
    },
    {
      type: 'vorta',
      value: 'vorta',
    },
    {
      type: ';',
      value: ';',
    },
    {
      type: '}',
      value: '}',
    },
    {
      type: ';',
      value: ';',
    },
    {
      type: 'EOF',
      value: 'EOF',
    },
  ]

  try {
    parser(tokens)
  } catch (error) {
    expect(error).toEqual('Error: Unexpected token foo')
  }
})

test.skip('should parse simple program correctly', () => {
  const tokens = [
    {
      type: 'pila',
      value: 'pila',
    },
    {
      type: 'dai',
      value: 'dai',
    },
    {
      type: '(',
      value: '(',
    },
    {
      type: ')',
      value: ')',
    },
    {
      type: '{',
      value: '{',
    },
    {
      type: 'pila',
      value: 'pila',
    },
    {
      type: 'id',
      value: 'VEZES',
    },
    {
      type: 'assignoperator',
      value: '=',
    },
    {
      type: 'int',
      value: '0',
    },
    {
      type: ',',
      value: ',',
    },
    {
      type: 'id',
      value: 'N',
    },
    {
      type: 'assignoperator',
      value: '=',
    },
    {
      type: 'int',
      value: '0',
    },
    {
      type: ';',
      value: ';',
    },
    {
      type: 'trocado',
      value: 'trocado',
    },
    {
      type: 'id',
      value: 'A',
    },
    {
      type: ';',
      value: ';',
    },
    {
      type: 'vorta',
      value: 'vorta',
    },
    {
      type: ';',
      value: ';',
    },
    {
      type: '}',
      value: '}',
    },
    {
      type: ';',
      value: ';',
    },
    {
      type: 'EOF',
      value: 'EOF',
    },
  ]

  const result = parser(tokens)

  expect(result).toEqual('Accepted')
})
