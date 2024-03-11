import { expect, test } from 'bun:test'
import { lexer } from './lexer.ts'

test('should tokenize a simple program correctly', () => {
  const sourceCode = 'foo + bar;'
  const tokens = lexer(sourceCode)

  expect(tokens).not.toBeNull()
  expect(tokens).toEqual([
    { type: 'id', value: 'foo' },
    { type: 'arithmeticoperator', value: '+' },
    { type: 'id', value: 'bar' },
    { type: ';', value: ';' },
    { type: 'EOF', value: 'EOF' },
  ])
})

test('should tokenize a program with a string literal correctly', () => {
  const sourceCode = 'foo + "bar";'
  const tokens = lexer(sourceCode)

  expect(tokens).not.toBeNull()
  expect(tokens).toEqual([
    { type: 'id', value: 'foo' },
    { type: 'arithmeticoperator', value: '+' },
    { type: 'stringliteral', value: '"bar"' },
    { type: ';', value: ';' },
    { type: 'EOF', value: 'EOF' },
  ])
})

test('should tokenize a program with a string literal with delimiter correctly', () => {
  const sourceCode = 'foo + "bar()";'
  const tokens = lexer(sourceCode)

  expect(tokens).not.toBeNull()
  expect(tokens).toEqual([
    { type: 'id', value: 'foo' },
    { type: 'arithmeticoperator', value: '+' },
    { type: 'stringliteral', value: '"bar()"' },
    { type: ';', value: ';' },
    { type: 'EOF', value: 'EOF' },
  ])
})

test('should tokenize a program with a keyword correctly', () => {
  const sourceCode = 'pila var = 1;'
  const tokens = lexer(sourceCode)

  expect(tokens).not.toBeNull()
  expect(tokens).toEqual([
    { type: 'pila', value: 'pila' },
    { type: 'id', value: 'var' },
    { type: 'assignoperator', value: '=' },
    { type: 'int', value: '1' },
    { type: ';', value: ';' },
    { type: 'EOF', value: 'EOF' },
  ])
})

test('should tokenize a program with a keyword correctly', () => {
  const sourceCode = '1 + 2 * 3;'
  const tokens = lexer(sourceCode)

  expect(tokens).not.toBeNull()
  expect(tokens).toEqual([
    { type: 'int', value: '1' },
    { type: 'arithmeticoperator', value: '+' },
    { type: 'int', value: '2' },
    { type: 'multiplieroperator', value: '*' },
    { type: 'int', value: '3' },
    { type: ';', value: ';' },
    { type: 'EOF', value: 'EOF' },
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
    { type: 'assignoperator', value: '=' },
    { type: 'int', value: '0' },
    { type: ';', value: ';' },
    { type: 'trocado', value: 'trocado' },
    { type: 'id', value: 'A' },
    { type: ';', value: ';' },
    { type: 'vorta', value: 'vorta' },
    { type: 'int', value: '0' },
    { type: ';', value: ';' },
    { type: '}', value: '}' },
    { type: 'EOF', value: 'EOF' },
  ])
})

test('should show error when have an unexpected token _', () => {
  const sourceCode = `
  pila _a = 1;
  `

  expect(() => lexer(sourceCode)).toThrow('Error: Unexpected token _a')
})

test('should tokenize a program with a relationaloperator ==', () => {
  const sourceCode = '1 == 1;'
  const tokens = lexer(sourceCode)

  expect(tokens).not.toBeNull()
  expect(tokens).toEqual([
    { type: 'int', value: '1' },
    { type: 'relationaloperator', value: '==' },
    { type: 'int', value: '1' },
    { type: ';', value: ';' },
    { type: 'EOF', value: 'EOF' },
  ])
})

test('should tokenize a program with a relationaloperator <=', () => {
  const sourceCode = '1 <= 1;'
  const tokens = lexer(sourceCode)

  expect(tokens).not.toBeNull()
  expect(tokens).toEqual([
    { type: 'int', value: '1' },
    { type: 'relationaloperator', value: '<=' },
    { type: 'int', value: '1' },
    { type: ';', value: ';' },
    { type: 'EOF', value: 'EOF' },
  ])
})

test('should tokenize a program with a relationaloperator !=', () => {
  const sourceCode = '1 != 1;'
  const tokens = lexer(sourceCode)

  expect(tokens).not.toBeNull()
  expect(tokens).toEqual([
    { type: 'int', value: '1' },
    { type: 'relationaloperator', value: '!=' },
    { type: 'int', value: '1' },
    { type: ';', value: ';' },
    { type: 'EOF', value: 'EOF' },
  ])
})

test('should tokenize a program with a float number', () => {
  const sourceCode = 'trocado = 1.2;'
  const tokens = lexer(sourceCode)

  expect(tokens).not.toBeNull()
  expect(tokens).toEqual([
    { type: 'trocado', value: 'trocado' },
    { type: 'assignoperator', value: '=' },
    { type: 'float', value: '1.2' },
    { type: ';', value: ';' },
    { type: 'EOF', value: 'EOF' },
  ])
})
