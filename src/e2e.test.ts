import { expect, test } from 'bun:test'
import { lexer } from './lexer/lexer.ts'
import { parser } from './parser/parser.ts'

test('should tokenize and parse a simple program with arrodeia correctly', () => {
  const sourceCode = `pila dai() {
    pila VEZES = 0, N = 0;
    trocado A;

    amostra("Digite 5 valores: ");

    arrodeia(VEZES = 0; VEZES<5) {
        pega(A);
        sepa (A>0){
        N = N+1;
        }
    }

    amostra("%p valores positivos", N);
    vorta;
};`
  const tokens = lexer(sourceCode)
  const result = parser(tokens)

  expect(result).toEqual('Accepted')
})

test('should tokenize and parse a simple program with amostra correctly', () => {
  const sourceCode = `pila dai() {
    pila VEZES = 0, N = 0;

    amostra("Digite 5 valores: ");

    amostra("%p valores positivos", N);
    vorta;
};`
  const tokens = lexer(sourceCode)
  const result = parser(tokens)

  expect(result).toEqual('Accepted')
})

test('should tokenize and parse a simple program with sepa and senao correctly', () => {
  const sourceCode = `pila dai() {
    pila VEZES = 0, N = 0;
    trocado A;

    sepa (VEZES>0){
      N = N + 1;
      } senao {
      N = N - 1;

      }
    vorta;
};`
  const tokens = lexer(sourceCode)
  const result = parser(tokens)

  expect(result).toEqual('Accepted')
})

test('should tokenize and parse a simple program with sepa correctly', () => {
  const sourceCode = `pila dai() {
    pila VEZES = 0, N = 0;
    trocado A;

    sepa (VEZES>0){
      N = N + 1;
      }
    vorta;
};`
  const tokens = lexer(sourceCode)
  const result = parser(tokens)

  expect(result).toEqual('Accepted')
})

test('should tokenize and parse a simple program with ateque correctly', () => {
  const sourceCode = `pila dai() {
    pila VEZES = 0, N = 0;
    trocado A;

    ateque (VEZES>0){
      N = N + 1;
    }
    vorta;
};`
  const tokens = lexer(sourceCode)
  const result = parser(tokens)

  expect(result).toEqual('Accepted')
})

test('should tokenize and parse a simple program with all primitives correctly', () => {
  const sourceCode = `pila dai() {
    pila VEZES = 0, N = 0;
    trocado A = 1.2;
    naipe B = "teste";
    creio C = verdadeiro;

    amostra("Digite 5 valores: ");

    arrodeia(VEZES = 0; VEZES<5) {
        pega(A);
        sepa (A>0){
        N = N + 1;
        } senao {
        N = N - 1;
        }
    }

    amostra("%p valores positivos", N);

    ateque (VEZES>0){
      N = N + 1;
    }

    vorta;
};`
  const tokens = lexer(sourceCode)
  const result = parser(tokens)

  expect(result).toEqual('Accepted')
})

test('should throw unexpected token', () => {
  const sourceCode = `pila dai() {
    pila VEZES = 0, N = 0;
    trocado A;

    amostra;

    arrodeia(VEZES = 0; VEZES<5) {
        pega(A);
        sepa (A>0){
        N = N+1;
        }
    }

    amostra("%p valores positivos", N);
    vorta;
};`

  const tokens = lexer(sourceCode)
  const result = parser(tokens)
  expect(result).toEqual('Rejected Error: Unexpected token ;\nError: Unexpected token ;\nError: Unexpected token ;')
})

test('should throw unexpected token', () => {
  const sourceCode = `pila dai() {
    pila VEZES = 0, N = 0;
    trocado A;


    arrodeia(VEZES = 0 VEZES<5) {
        pega(A);
        sepa (A>0){
        N = N+1;
        }
    }

    amostra("%p valores positivos", N);
    vorta;
};`

  const tokens = lexer(sourceCode)
  const result = parser(tokens)
  expect(result).toEqual('Rejected Error: Unexpected token VEZES\nError: Unexpected token VEZES')
})

test('should tokenize and parse a simple program with chained arrodeia correctly', () => {
  const sourceCode = `pila dai() {
    pila VEZES = 0, N = 0, i = 0;
    trocado A;

    amostra("Digite 5 valores: ");

    arrodeia(VEZES = 0; VEZES<5) {
      arrodeia(i = 0; i<5) {
        N = N + 1;
        }
    }

    amostra("%p valores positivos", N);
    vorta;
};`
  const tokens = lexer(sourceCode)
  const result = parser(tokens)

  expect(result).toEqual('Accepted')
})

test('should tokenize and parse a simple program with chained arrodeia correctly', () => {
  const sourceCode = `pila dai() {
    pila VEZES = 0, N = 0, a = 3, b = 2;
    trocado A;

    amostra("Digite 5 valores: ");

    arrodeia(VEZES = 0; VEZES<5) {
      sepa(a > b) {
        N = N + 1;
        }
    }

    amostra("%p valores positivos", N);
    vorta;
};`
  const tokens = lexer(sourceCode)
  const result = parser(tokens)

  expect(result).toEqual('Accepted')
})
