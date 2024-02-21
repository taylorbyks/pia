import { expect, test } from 'bun:test'
import { lexer } from './lexer.ts'

test('should tokenize a simple program correctly', () => {
  const sourceCode = 'foo + bar;'
  const tokens = lexer(sourceCode)

  expect(tokens).not.toBeNull()
  expect(tokens).toEqual([
    { type: 'id', value: 'foo' },
    { type: 'arithmetic_operator', value: '+' },
    { type: 'id', value: 'bar' },
    { type: ';', value: ';' },
  ])
})

test('should tokenize a program with a string literal correctly', () => {
  const sourceCode = 'foo + "bar";'
  const tokens = lexer(sourceCode)

  expect(tokens).not.toBeNull()
  expect(tokens).toEqual([
    { type: 'id', value: 'foo' },
    { type: 'arithmetic_operator', value: '+' },
    { type: 'string_literal', value: '"bar"' },
    { type: ';', value: ';' },
  ])
})

test('should tokenize a program with a string literal with delimiter correctly', () => {
  const sourceCode = 'foo + "bar()";'
  const tokens = lexer(sourceCode)

  expect(tokens).not.toBeNull()
  expect(tokens).toEqual([
    { type: 'id', value: 'foo' },
    { type: 'arithmetic_operator', value: '+' },
    { type: 'string_literal', value: '"bar()"' },
    { type: ';', value: ';' },
  ])
})

test('should tokenize a program with a keyword correctly', () => {
  const sourceCode = 'pila var = 1;'
  const tokens = lexer(sourceCode)

  expect(tokens).not.toBeNull()
  expect(tokens).toEqual([
    { type: 'pila', value: 'pila' },
    { type: 'id', value: 'var' },
    { type: 'assign_operator', value: '=' },
    { type: 'int', value: '1' },
    { type: ';', value: ';' },
  ])
})

test('should tokenize a program with a keyword correctly', () => {
  const sourceCode = '1 + 2 * 3;'
  const tokens = lexer(sourceCode)

  expect(tokens).not.toBeNull()
  expect(tokens).toEqual([
    { type: 'int', value: '1' },
    { type: 'arithmetic_operator', value: '+' },
    { type: 'int', value: '2' },
    { type: 'multiplier_operator', value: '*' },
    { type: 'int', value: '3' },
    { type: ';', value: ';' },
  ])
})

test('should tokenize a program with a keyword correctly', () => {
  const sourceCode = `
  pila dai() {
    pila VEZES, N = 0;
    trocado A;

    vorta 0;
  }
  `
  const tokens = lexer(sourceCode)

  expect(tokens).not.toBeNull()
  expect(tokens).toEqual([
    { type: 'pila', value: 'pila' },
    { type: 'dai', value: 'dai' },
    { type: '(', value: '(' },
    { type: ')', value: ')' },
    { type: '{', value: '{' },
    { type: 'pila', value: 'pila' },
    { type: 'id', value: 'VEZES' },
    { type: ',', value: ',' },
    { type: 'id', value: 'N' },
    { type: 'assign_operator', value: '=' },
    { type: 'int', value: '0' },
    { type: ';', value: ';' },
    { type: 'trocado', value: 'trocado' },
    { type: 'id', value: 'A' },
    { type: ';', value: ';' },
    { type: 'vorta', value: 'vorta' },
    { type: 'int', value: '0' },
    { type: ';', value: ';' },
    { type: '}', value: '}' },
  ])
})

test('should show error when have an unexpected token', () => {
  const sourceCode = `
  pila _a = 1;
  `

  expect(() => lexer(sourceCode)).toThrow('Error: Unexpected token _a')
})

test('should tokenize a program with a relational_operator ==', () => {
  const sourceCode = '1 == 1;'
  const tokens = lexer(sourceCode)

  expect(tokens).not.toBeNull()
  expect(tokens).toEqual([
    { type: 'int', value: '1' },
    { type: 'relational_operator', value: '==' },
    { type: 'int', value: '1' },
    { type: ';', value: ';' },
  ])
})

test('should tokenize a program with a relational_operator <=', () => {
  const sourceCode = '1 <= 1;'
  const tokens = lexer(sourceCode)

  expect(tokens).not.toBeNull()
  expect(tokens).toEqual([
    { type: 'int', value: '1' },
    { type: 'relational_operator', value: '<=' },
    { type: 'int', value: '1' },
    { type: ';', value: ';' },
  ])
})

test('should tokenize a program with a relational_operator !=', () => {
  const sourceCode = '1 != 1;'
  const tokens = lexer(sourceCode)

  expect(tokens).not.toBeNull()
  expect(tokens).toEqual([
    { type: 'int', value: '1' },
    { type: 'relational_operator', value: '!=' },
    { type: 'int', value: '1' },
    { type: ';', value: ';' },
  ])
})

test('should tokenize a program with a float number', () => {
  const sourceCode = 'trocado = 1.2;'
  const tokens = lexer(sourceCode)

  expect(tokens).not.toBeNull()
  expect(tokens).toEqual([
    { type: 'trocado', value: 'trocado' },
    { type: 'assign_operator', value: '=' },
    { type: 'float', value: '1.2' },
    { type: ';', value: ';' },
  ])
})
