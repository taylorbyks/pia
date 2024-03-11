import { expect, test } from 'bun:test'
import { lexer } from './lexer/lexer.ts'
import { parser } from './parser/parser.ts'

test('should tokenize and parse a simple program correctly', () => {
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

  try {
    const tokens = lexer(sourceCode)
    parser(tokens)
  } catch (error) {
    expect(error).toEqual('Error: Unexpected token ;')
  }
})
