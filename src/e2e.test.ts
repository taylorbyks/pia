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

  const expectedAST = {
    type: 'S',
    value: 'pila dai ( ) { expr vorta ; } ;',
    children: [
      {
        type: 'pila',
        value: 'pila',
        children: [],
      },
      {
        type: 'dai',
        value: 'dai',
        children: [],
      },
      {
        type: '(',
        value: '(',
        children: [],
      },
      {
        type: ')',
        value: ')',
        children: [],
      },
      {
        type: '{',
        value: '{',
        children: [],
      },
      {
        type: 'expr',
        value: 'declrstrct expr',
        children: [
          {
            type: 'declrstrct',
            value: 'declrvar',
            children: [
              {
                type: 'declrvar',
                value: 'tipo id maisvar',
                children: [
                  {
                    type: 'tipo',
                    value: 'pila',
                    children: [
                      {
                        type: 'pila',
                        value: 'pila',
                        children: [],
                      },
                    ],
                  },
                  {
                    type: 'id',
                    value: 'VEZES',
                    children: [],
                  },
                  {
                    type: 'maisvar',
                    value: "atribuir maisvar'",
                    children: [
                      {
                        type: 'atribuir',
                        value: "assignoperator atribuir'",
                        children: [
                          {
                            type: 'assignoperator',
                            value: '=',
                            children: [],
                          },
                          {
                            type: "atribuir'",
                            value: 'int',
                            children: [
                              {
                                type: 'int',
                                value: '0',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: "maisvar'",
                        value: ", id atribuir maisvar'",
                        children: [
                          {
                            type: ',',
                            value: ',',
                            children: [],
                          },
                          {
                            type: 'id',
                            value: 'N',
                            children: [],
                          },
                          {
                            type: 'atribuir',
                            value: "assignoperator atribuir'",
                            children: [
                              {
                                type: 'assignoperator',
                                value: '=',
                                children: [],
                              },
                              {
                                type: "atribuir'",
                                value: 'int',
                                children: [
                                  {
                                    type: 'int',
                                    value: '0',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: "maisvar'",
                            value: ';',
                            children: [
                              {
                                type: ';',
                                value: ';',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'expr',
            value: 'declrstrct expr',
            children: [
              {
                type: 'declrstrct',
                value: 'declrvar',
                children: [
                  {
                    type: 'declrvar',
                    value: 'tipo id ;',
                    children: [
                      {
                        type: 'tipo',
                        value: 'trocado',
                        children: [
                          {
                            type: 'trocado',
                            value: 'trocado',
                            children: [],
                          },
                        ],
                      },
                      {
                        type: 'id',
                        value: 'A',
                        children: [],
                      },
                      {
                        type: ';',
                        value: ';',
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'expr',
                value: 'declrstrct expr',
                children: [
                  {
                    type: 'declrstrct',
                    value: "amostra'",
                    children: [
                      {
                        type: "amostra'",
                        value: 'amostra ( amostravar',
                        children: [
                          {
                            type: 'amostra',
                            value: 'amostra',
                            children: [],
                          },
                          {
                            type: '(',
                            value: '(',
                            children: [],
                          },
                          {
                            type: 'amostravar',
                            value: "stringliteral amostravar'",
                            children: [
                              {
                                type: 'stringliteral',
                                value: '"Digite 5 valores: "',
                                children: [],
                              },
                              {
                                type: "amostravar'",
                                value: ') ;',
                                children: [
                                  {
                                    type: ')',
                                    value: ')',
                                    children: [],
                                  },
                                  {
                                    type: ';',
                                    value: ';',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'expr',
                    value: 'declrstrct expr',
                    children: [
                      {
                        type: 'declrstrct',
                        value: "arrodeia'",
                        children: [
                          {
                            type: "arrodeia'",
                            value: "arrodeia ( arrodeia'' ; cond ) { expr }",
                            children: [
                              {
                                type: 'arrodeia',
                                value: 'arrodeia',
                                children: [],
                              },
                              {
                                type: '(',
                                value: '(',
                                children: [],
                              },
                              {
                                type: "arrodeia''",
                                value: 'id atribuir',
                                children: [
                                  {
                                    type: 'id',
                                    value: 'VEZES',
                                    children: [],
                                  },
                                  {
                                    type: 'atribuir',
                                    value: "assignoperator atribuir'",
                                    children: [
                                      {
                                        type: 'assignoperator',
                                        value: '=',
                                        children: [],
                                      },
                                      {
                                        type: "atribuir'",
                                        value: 'int',
                                        children: [
                                          {
                                            type: 'int',
                                            value: '0',
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: ';',
                                value: ';',
                                children: [],
                              },
                              {
                                type: 'cond',
                                value: 'relational',
                                children: [
                                  {
                                    type: 'relational',
                                    value: 'VOV relationaloperator VOV',
                                    children: [
                                      {
                                        type: 'VOV',
                                        value: 'id',
                                        children: [
                                          {
                                            type: 'id',
                                            value: 'VEZES',
                                            children: [],
                                          },
                                        ],
                                      },
                                      {
                                        type: 'relationaloperator',
                                        value: '<',
                                        children: [],
                                      },
                                      {
                                        type: 'VOV',
                                        value: 'int',
                                        children: [
                                          {
                                            type: 'int',
                                            value: '5',
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: ')',
                                value: ')',
                                children: [],
                              },
                              {
                                type: '{',
                                value: '{',
                                children: [],
                              },
                              {
                                type: 'expr',
                                value: 'declrstrct expr',
                                children: [
                                  {
                                    type: 'declrstrct',
                                    value: "pega'",
                                    children: [
                                      {
                                        type: "pega'",
                                        value: 'pega ( id ) ;',
                                        children: [
                                          {
                                            type: 'pega',
                                            value: 'pega',
                                            children: [],
                                          },
                                          {
                                            type: '(',
                                            value: '(',
                                            children: [],
                                          },
                                          {
                                            type: 'id',
                                            value: 'A',
                                            children: [],
                                          },
                                          {
                                            type: ')',
                                            value: ')',
                                            children: [],
                                          },
                                          {
                                            type: ';',
                                            value: ';',
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    type: 'expr',
                                    value: 'declrstrct',
                                    children: [
                                      {
                                        type: 'declrstrct',
                                        value: "sepa'",
                                        children: [
                                          {
                                            type: "sepa'",
                                            value: 'sepa ( cond ) { expr }',
                                            children: [
                                              {
                                                type: 'sepa',
                                                value: 'sepa',
                                                children: [],
                                              },
                                              {
                                                type: '(',
                                                value: '(',
                                                children: [],
                                              },
                                              {
                                                type: 'cond',
                                                value: 'relational',
                                                children: [
                                                  {
                                                    type: 'relational',
                                                    value: 'VOV relationaloperator VOV',
                                                    children: [
                                                      {
                                                        type: 'VOV',
                                                        value: 'id',
                                                        children: [
                                                          {
                                                            type: 'id',
                                                            value: 'A',
                                                            children: [],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        type: 'relationaloperator',
                                                        value: '>',
                                                        children: [],
                                                      },
                                                      {
                                                        type: 'VOV',
                                                        value: 'int',
                                                        children: [
                                                          {
                                                            type: 'int',
                                                            value: '0',
                                                            children: [],
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                              {
                                                type: ')',
                                                value: ')',
                                                children: [],
                                              },
                                              {
                                                type: '{',
                                                value: '{',
                                                children: [],
                                              },
                                              {
                                                type: 'expr',
                                                value: 'declrstrct',
                                                children: [
                                                  {
                                                    type: 'declrstrct',
                                                    value: 'id assignoperator VOV arithmetic ;',
                                                    children: [
                                                      {
                                                        type: 'id',
                                                        value: 'N',
                                                        children: [],
                                                      },
                                                      {
                                                        type: 'assignoperator',
                                                        value: '=',
                                                        children: [],
                                                      },
                                                      {
                                                        type: 'VOV',
                                                        value: 'id',
                                                        children: [
                                                          {
                                                            type: 'id',
                                                            value: 'N',
                                                            children: [],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        type: 'arithmetic',
                                                        value: 'arithmeticoperator VOV',
                                                        children: [
                                                          {
                                                            type: 'arithmeticoperator',
                                                            value: '+',
                                                            children: [],
                                                          },
                                                          {
                                                            type: 'VOV',
                                                            value: 'int',
                                                            children: [
                                                              {
                                                                type: 'int',
                                                                value: '1',
                                                                children: [],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        type: ';',
                                                        value: ';',
                                                        children: [],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                              {
                                                type: '}',
                                                value: '}',
                                                children: [],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: '}',
                                value: '}',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'expr',
                        value: 'declrstrct',
                        children: [
                          {
                            type: 'declrstrct',
                            value: "amostra'",
                            children: [
                              {
                                type: "amostra'",
                                value: 'amostra ( amostravar',
                                children: [
                                  {
                                    type: 'amostra',
                                    value: 'amostra',
                                    children: [],
                                  },
                                  {
                                    type: '(',
                                    value: '(',
                                    children: [],
                                  },
                                  {
                                    type: 'amostravar',
                                    value: "stringliteral amostravar'",
                                    children: [
                                      {
                                        type: 'stringliteral',
                                        value: '"%p valores positivos"',
                                        children: [],
                                      },
                                      {
                                        type: "amostravar'",
                                        value: ', amostravar',
                                        children: [
                                          {
                                            type: ',',
                                            value: ',',
                                            children: [],
                                          },
                                          {
                                            type: 'amostravar',
                                            value: "id amostravar'",
                                            children: [
                                              {
                                                type: 'id',
                                                value: 'N',
                                                children: [],
                                              },
                                              {
                                                type: "amostravar'",
                                                value: ') ;',
                                                children: [
                                                  {
                                                    type: ')',
                                                    value: ')',
                                                    children: [],
                                                  },
                                                  {
                                                    type: ';',
                                                    value: ';',
                                                    children: [],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'vorta',
        value: 'vorta',
        children: [],
      },
      {
        type: ';',
        value: ';',
        children: [],
      },
      {
        type: '}',
        value: '}',
        children: [],
      },
      {
        type: ';',
        value: ';',
        children: [],
      },
    ],
  }

  expect(result).toEqual(expectedAST)
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

  const expectedAST = {
    type: 'S',
    value: 'pila dai ( ) { expr vorta ; } ;',
    children: [
      {
        type: 'pila',
        value: 'pila',
        children: [],
      },
      {
        type: 'dai',
        value: 'dai',
        children: [],
      },
      {
        type: '(',
        value: '(',
        children: [],
      },
      {
        type: ')',
        value: ')',
        children: [],
      },
      {
        type: '{',
        value: '{',
        children: [],
      },
      {
        type: 'expr',
        value: 'declrstrct expr',
        children: [
          {
            type: 'declrstrct',
            value: 'declrvar',
            children: [
              {
                type: 'declrvar',
                value: 'tipo id maisvar',
                children: [
                  {
                    type: 'tipo',
                    value: 'pila',
                    children: [
                      {
                        type: 'pila',
                        value: 'pila',
                        children: [],
                      },
                    ],
                  },
                  {
                    type: 'id',
                    value: 'VEZES',
                    children: [],
                  },
                  {
                    type: 'maisvar',
                    value: "atribuir maisvar'",
                    children: [
                      {
                        type: 'atribuir',
                        value: "assignoperator atribuir'",
                        children: [
                          {
                            type: 'assignoperator',
                            value: '=',
                            children: [],
                          },
                          {
                            type: "atribuir'",
                            value: 'int',
                            children: [
                              {
                                type: 'int',
                                value: '0',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: "maisvar'",
                        value: ", id atribuir maisvar'",
                        children: [
                          {
                            type: ',',
                            value: ',',
                            children: [],
                          },
                          {
                            type: 'id',
                            value: 'N',
                            children: [],
                          },
                          {
                            type: 'atribuir',
                            value: "assignoperator atribuir'",
                            children: [
                              {
                                type: 'assignoperator',
                                value: '=',
                                children: [],
                              },
                              {
                                type: "atribuir'",
                                value: 'int',
                                children: [
                                  {
                                    type: 'int',
                                    value: '0',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: "maisvar'",
                            value: ';',
                            children: [
                              {
                                type: ';',
                                value: ';',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'expr',
            value: 'declrstrct expr',
            children: [
              {
                type: 'declrstrct',
                value: "amostra'",
                children: [
                  {
                    type: "amostra'",
                    value: 'amostra ( amostravar',
                    children: [
                      {
                        type: 'amostra',
                        value: 'amostra',
                        children: [],
                      },
                      {
                        type: '(',
                        value: '(',
                        children: [],
                      },
                      {
                        type: 'amostravar',
                        value: "stringliteral amostravar'",
                        children: [
                          {
                            type: 'stringliteral',
                            value: '"Digite 5 valores: "',
                            children: [],
                          },
                          {
                            type: "amostravar'",
                            value: ') ;',
                            children: [
                              {
                                type: ')',
                                value: ')',
                                children: [],
                              },
                              {
                                type: ';',
                                value: ';',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'expr',
                value: 'declrstrct',
                children: [
                  {
                    type: 'declrstrct',
                    value: "amostra'",
                    children: [
                      {
                        type: "amostra'",
                        value: 'amostra ( amostravar',
                        children: [
                          {
                            type: 'amostra',
                            value: 'amostra',
                            children: [],
                          },
                          {
                            type: '(',
                            value: '(',
                            children: [],
                          },
                          {
                            type: 'amostravar',
                            value: "stringliteral amostravar'",
                            children: [
                              {
                                type: 'stringliteral',
                                value: '"%p valores positivos"',
                                children: [],
                              },
                              {
                                type: "amostravar'",
                                value: ', amostravar',
                                children: [
                                  {
                                    type: ',',
                                    value: ',',
                                    children: [],
                                  },
                                  {
                                    type: 'amostravar',
                                    value: "id amostravar'",
                                    children: [
                                      {
                                        type: 'id',
                                        value: 'N',
                                        children: [],
                                      },
                                      {
                                        type: "amostravar'",
                                        value: ') ;',
                                        children: [
                                          {
                                            type: ')',
                                            value: ')',
                                            children: [],
                                          },
                                          {
                                            type: ';',
                                            value: ';',
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'vorta',
        value: 'vorta',
        children: [],
      },
      {
        type: ';',
        value: ';',
        children: [],
      },
      {
        type: '}',
        value: '}',
        children: [],
      },
      {
        type: ';',
        value: ';',
        children: [],
      },
    ],
  }

  expect(result).toEqual(expectedAST)
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

  const expectedAST = {
    type: 'S',
    value: 'pila dai ( ) { expr vorta ; } ;',
    children: [
      {
        type: 'pila',
        value: 'pila',
        children: [],
      },
      {
        type: 'dai',
        value: 'dai',
        children: [],
      },
      {
        type: '(',
        value: '(',
        children: [],
      },
      {
        type: ')',
        value: ')',
        children: [],
      },
      {
        type: '{',
        value: '{',
        children: [],
      },
      {
        type: 'expr',
        value: 'declrstrct expr',
        children: [
          {
            type: 'declrstrct',
            value: 'declrvar',
            children: [
              {
                type: 'declrvar',
                value: 'tipo id maisvar',
                children: [
                  {
                    type: 'tipo',
                    value: 'pila',
                    children: [
                      {
                        type: 'pila',
                        value: 'pila',
                        children: [],
                      },
                    ],
                  },
                  {
                    type: 'id',
                    value: 'VEZES',
                    children: [],
                  },
                  {
                    type: 'maisvar',
                    value: "atribuir maisvar'",
                    children: [
                      {
                        type: 'atribuir',
                        value: "assignoperator atribuir'",
                        children: [
                          {
                            type: 'assignoperator',
                            value: '=',
                            children: [],
                          },
                          {
                            type: "atribuir'",
                            value: 'int',
                            children: [
                              {
                                type: 'int',
                                value: '0',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: "maisvar'",
                        value: ", id atribuir maisvar'",
                        children: [
                          {
                            type: ',',
                            value: ',',
                            children: [],
                          },
                          {
                            type: 'id',
                            value: 'N',
                            children: [],
                          },
                          {
                            type: 'atribuir',
                            value: "assignoperator atribuir'",
                            children: [
                              {
                                type: 'assignoperator',
                                value: '=',
                                children: [],
                              },
                              {
                                type: "atribuir'",
                                value: 'int',
                                children: [
                                  {
                                    type: 'int',
                                    value: '0',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: "maisvar'",
                            value: ';',
                            children: [
                              {
                                type: ';',
                                value: ';',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'expr',
            value: 'declrstrct expr',
            children: [
              {
                type: 'declrstrct',
                value: 'declrvar',
                children: [
                  {
                    type: 'declrvar',
                    value: 'tipo id ;',
                    children: [
                      {
                        type: 'tipo',
                        value: 'trocado',
                        children: [
                          {
                            type: 'trocado',
                            value: 'trocado',
                            children: [],
                          },
                        ],
                      },
                      {
                        type: 'id',
                        value: 'A',
                        children: [],
                      },
                      {
                        type: ';',
                        value: ';',
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'expr',
                value: 'declrstrct',
                children: [
                  {
                    type: 'declrstrct',
                    value: "sepa'",
                    children: [
                      {
                        type: "sepa'",
                        value: "sepa ( cond ) { expr } sepa''",
                        children: [
                          {
                            type: 'sepa',
                            value: 'sepa',
                            children: [],
                          },
                          {
                            type: '(',
                            value: '(',
                            children: [],
                          },
                          {
                            type: 'cond',
                            value: 'relational',
                            children: [
                              {
                                type: 'relational',
                                value: 'VOV relationaloperator VOV',
                                children: [
                                  {
                                    type: 'VOV',
                                    value: 'id',
                                    children: [
                                      {
                                        type: 'id',
                                        value: 'VEZES',
                                        children: [],
                                      },
                                    ],
                                  },
                                  {
                                    type: 'relationaloperator',
                                    value: '>',
                                    children: [],
                                  },
                                  {
                                    type: 'VOV',
                                    value: 'int',
                                    children: [
                                      {
                                        type: 'int',
                                        value: '0',
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: ')',
                            value: ')',
                            children: [],
                          },
                          {
                            type: '{',
                            value: '{',
                            children: [],
                          },
                          {
                            type: 'expr',
                            value: 'declrstrct',
                            children: [
                              {
                                type: 'declrstrct',
                                value: 'id assignoperator VOV arithmetic ;',
                                children: [
                                  {
                                    type: 'id',
                                    value: 'N',
                                    children: [],
                                  },
                                  {
                                    type: 'assignoperator',
                                    value: '=',
                                    children: [],
                                  },
                                  {
                                    type: 'VOV',
                                    value: 'id',
                                    children: [
                                      {
                                        type: 'id',
                                        value: 'N',
                                        children: [],
                                      },
                                    ],
                                  },
                                  {
                                    type: 'arithmetic',
                                    value: 'arithmeticoperator VOV',
                                    children: [
                                      {
                                        type: 'arithmeticoperator',
                                        value: '+',
                                        children: [],
                                      },
                                      {
                                        type: 'VOV',
                                        value: 'int',
                                        children: [
                                          {
                                            type: 'int',
                                            value: '1',
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    type: ';',
                                    value: ';',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: '}',
                            value: '}',
                            children: [],
                          },
                          {
                            type: "sepa''",
                            value: "senao senao'",
                            children: [
                              {
                                type: 'senao',
                                value: 'senao',
                                children: [],
                              },
                              {
                                type: "senao'",
                                value: '{ expr }',
                                children: [
                                  {
                                    type: '{',
                                    value: '{',
                                    children: [],
                                  },
                                  {
                                    type: 'expr',
                                    value: 'declrstrct',
                                    children: [
                                      {
                                        type: 'declrstrct',
                                        value: 'id assignoperator VOV arithmetic ;',
                                        children: [
                                          {
                                            type: 'id',
                                            value: 'N',
                                            children: [],
                                          },
                                          {
                                            type: 'assignoperator',
                                            value: '=',
                                            children: [],
                                          },
                                          {
                                            type: 'VOV',
                                            value: 'id',
                                            children: [
                                              {
                                                type: 'id',
                                                value: 'N',
                                                children: [],
                                              },
                                            ],
                                          },
                                          {
                                            type: 'arithmetic',
                                            value: 'arithmeticoperator VOV',
                                            children: [
                                              {
                                                type: 'arithmeticoperator',
                                                value: '-',
                                                children: [],
                                              },
                                              {
                                                type: 'VOV',
                                                value: 'int',
                                                children: [
                                                  {
                                                    type: 'int',
                                                    value: '1',
                                                    children: [],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                          {
                                            type: ';',
                                            value: ';',
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    type: '}',
                                    value: '}',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'vorta',
        value: 'vorta',
        children: [],
      },
      {
        type: ';',
        value: ';',
        children: [],
      },
      {
        type: '}',
        value: '}',
        children: [],
      },
      {
        type: ';',
        value: ';',
        children: [],
      },
    ],
  }

  expect(result).toEqual(expectedAST)
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

  const expectedAST = {
    type: 'S',
    value: 'pila dai ( ) { expr vorta ; } ;',
    children: [
      {
        type: 'pila',
        value: 'pila',
        children: [],
      },
      {
        type: 'dai',
        value: 'dai',
        children: [],
      },
      {
        type: '(',
        value: '(',
        children: [],
      },
      {
        type: ')',
        value: ')',
        children: [],
      },
      {
        type: '{',
        value: '{',
        children: [],
      },
      {
        type: 'expr',
        value: 'declrstrct expr',
        children: [
          {
            type: 'declrstrct',
            value: 'declrvar',
            children: [
              {
                type: 'declrvar',
                value: 'tipo id maisvar',
                children: [
                  {
                    type: 'tipo',
                    value: 'pila',
                    children: [
                      {
                        type: 'pila',
                        value: 'pila',
                        children: [],
                      },
                    ],
                  },
                  {
                    type: 'id',
                    value: 'VEZES',
                    children: [],
                  },
                  {
                    type: 'maisvar',
                    value: "atribuir maisvar'",
                    children: [
                      {
                        type: 'atribuir',
                        value: "assignoperator atribuir'",
                        children: [
                          {
                            type: 'assignoperator',
                            value: '=',
                            children: [],
                          },
                          {
                            type: "atribuir'",
                            value: 'int',
                            children: [
                              {
                                type: 'int',
                                value: '0',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: "maisvar'",
                        value: ", id atribuir maisvar'",
                        children: [
                          {
                            type: ',',
                            value: ',',
                            children: [],
                          },
                          {
                            type: 'id',
                            value: 'N',
                            children: [],
                          },
                          {
                            type: 'atribuir',
                            value: "assignoperator atribuir'",
                            children: [
                              {
                                type: 'assignoperator',
                                value: '=',
                                children: [],
                              },
                              {
                                type: "atribuir'",
                                value: 'int',
                                children: [
                                  {
                                    type: 'int',
                                    value: '0',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: "maisvar'",
                            value: ';',
                            children: [
                              {
                                type: ';',
                                value: ';',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'expr',
            value: 'declrstrct',
            children: [
              {
                type: 'declrstrct',
                value: "sepa'",
                children: [
                  {
                    type: "sepa'",
                    value: "sepa ( cond ) { expr } sepa''",
                    children: [
                      {
                        type: 'declrstrct',
                        value: 'declrvar',
                        children: [
                          {
                            type: 'declrvar',
                            value: 'tipo id ;',
                            children: [
                              {
                                type: 'tipo',
                                value: 'trocado',
                                children: [
                                  {
                                    type: 'trocado',
                                    value: 'trocado',
                                    children: [],
                                  },
                                ],
                              },
                              {
                                type: 'id',
                                value: 'A',
                                children: [],
                              },
                              {
                                type: ';',
                                value: ';',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'sepa',
                        value: 'sepa',
                        children: [],
                      },
                      {
                        type: '(',
                        value: '(',
                        children: [],
                      },
                      {
                        type: 'cond',
                        value: 'relational',
                        children: [
                          {
                            type: 'relational',
                            value: 'VOV relationaloperator VOV',
                            children: [
                              {
                                type: 'VOV',
                                value: 'id',
                                children: [
                                  {
                                    type: 'id',
                                    value: 'VEZES',
                                    children: [],
                                  },
                                ],
                              },
                              {
                                type: 'relationaloperator',
                                value: '>',
                                children: [],
                              },
                              {
                                type: 'VOV',
                                value: 'int',
                                children: [
                                  {
                                    type: 'int',
                                    value: '0',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: ')',
                        value: ')',
                        children: [],
                      },
                      {
                        type: '{',
                        value: '{',
                        children: [],
                      },
                      {
                        type: 'expr',
                        value: 'declrstrct',
                        children: [
                          {
                            type: 'declrstrct',
                            value: 'id assignoperator VOV arithmetic ;',
                            children: [
                              {
                                type: 'id',
                                value: 'N',
                                children: [],
                              },
                              {
                                type: 'assignoperator',
                                value: '=',
                                children: [],
                              },
                              {
                                type: 'VOV',
                                value: 'id',
                                children: [
                                  {
                                    type: 'id',
                                    value: 'N',
                                    children: [],
                                  },
                                ],
                              },
                              {
                                type: 'arithmetic',
                                value: 'arithmeticoperator VOV',
                                children: [
                                  {
                                    type: 'arithmeticoperator',
                                    value: '+',
                                    children: [],
                                  },
                                  {
                                    type: 'VOV',
                                    value: 'int',
                                    children: [
                                      {
                                        type: 'int',
                                        value: '1',
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: ';',
                                value: ';',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: '}',
                        value: '}',
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'vorta',
        value: 'vorta',
        children: [],
      },
      {
        type: ';',
        value: ';',
        children: [],
      },
      {
        type: '}',
        value: '}',
        children: [],
      },
      {
        type: ';',
        value: ';',
        children: [],
      },
    ],
  }

  expect(result).toEqual(expectedAST)
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

  const expectedAST = {
    type: 'S',
    value: 'pila dai ( ) { expr vorta ; } ;',
    children: [
      {
        type: 'pila',
        value: 'pila',
        children: [],
      },
      {
        type: 'dai',
        value: 'dai',
        children: [],
      },
      {
        type: '(',
        value: '(',
        children: [],
      },
      {
        type: ')',
        value: ')',
        children: [],
      },
      {
        type: '{',
        value: '{',
        children: [],
      },
      {
        type: 'expr',
        value: 'declrstrct expr',
        children: [
          {
            type: 'declrstrct',
            value: 'declrvar',
            children: [
              {
                type: 'declrvar',
                value: 'tipo id maisvar',
                children: [
                  {
                    type: 'tipo',
                    value: 'pila',
                    children: [
                      {
                        type: 'pila',
                        value: 'pila',
                        children: [],
                      },
                    ],
                  },
                  {
                    type: 'id',
                    value: 'VEZES',
                    children: [],
                  },
                  {
                    type: 'maisvar',
                    value: "atribuir maisvar'",
                    children: [
                      {
                        type: 'atribuir',
                        value: "assignoperator atribuir'",
                        children: [
                          {
                            type: 'assignoperator',
                            value: '=',
                            children: [],
                          },
                          {
                            type: "atribuir'",
                            value: 'int',
                            children: [
                              {
                                type: 'int',
                                value: '0',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: "maisvar'",
                        value: ", id atribuir maisvar'",
                        children: [
                          {
                            type: ',',
                            value: ',',
                            children: [],
                          },
                          {
                            type: 'id',
                            value: 'N',
                            children: [],
                          },
                          {
                            type: 'atribuir',
                            value: "assignoperator atribuir'",
                            children: [
                              {
                                type: 'assignoperator',
                                value: '=',
                                children: [],
                              },
                              {
                                type: "atribuir'",
                                value: 'int',
                                children: [
                                  {
                                    type: 'int',
                                    value: '0',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: "maisvar'",
                            value: ';',
                            children: [
                              {
                                type: ';',
                                value: ';',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'expr',
            value: 'declrstrct expr',
            children: [
              {
                type: 'declrstrct',
                value: 'declrvar',
                children: [
                  {
                    type: 'declrvar',
                    value: 'tipo id ;',
                    children: [
                      {
                        type: 'tipo',
                        value: 'trocado',
                        children: [
                          {
                            type: 'trocado',
                            value: 'trocado',
                            children: [],
                          },
                        ],
                      },
                      {
                        type: 'id',
                        value: 'A',
                        children: [],
                      },
                      {
                        type: ';',
                        value: ';',
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'expr',
                value: 'declrstrct',
                children: [
                  {
                    type: 'declrstrct',
                    value: "ateque'",
                    children: [
                      {
                        type: "ateque'",
                        value: 'ateque ( cond ) { expr }',
                        children: [
                          {
                            type: 'ateque',
                            value: 'ateque',
                            children: [],
                          },
                          {
                            type: '(',
                            value: '(',
                            children: [],
                          },
                          {
                            type: 'cond',
                            value: 'relational',
                            children: [
                              {
                                type: 'relational',
                                value: 'VOV relationaloperator VOV',
                                children: [
                                  {
                                    type: 'VOV',
                                    value: 'id',
                                    children: [
                                      {
                                        type: 'id',
                                        value: 'VEZES',
                                        children: [],
                                      },
                                    ],
                                  },
                                  {
                                    type: 'relationaloperator',
                                    value: '>',
                                    children: [],
                                  },
                                  {
                                    type: 'VOV',
                                    value: 'int',
                                    children: [
                                      {
                                        type: 'int',
                                        value: '0',
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: ')',
                            value: ')',
                            children: [],
                          },
                          {
                            type: '{',
                            value: '{',
                            children: [],
                          },
                          {
                            type: 'expr',
                            value: 'declrstrct',
                            children: [
                              {
                                type: 'declrstrct',
                                value: 'id assignoperator VOV arithmetic ;',
                                children: [
                                  {
                                    type: 'id',
                                    value: 'N',
                                    children: [],
                                  },
                                  {
                                    type: 'assignoperator',
                                    value: '=',
                                    children: [],
                                  },
                                  {
                                    type: 'VOV',
                                    value: 'id',
                                    children: [
                                      {
                                        type: 'id',
                                        value: 'N',
                                        children: [],
                                      },
                                    ],
                                  },
                                  {
                                    type: 'arithmetic',
                                    value: 'arithmeticoperator VOV',
                                    children: [
                                      {
                                        type: 'arithmeticoperator',
                                        value: '+',
                                        children: [],
                                      },
                                      {
                                        type: 'VOV',
                                        value: 'int',
                                        children: [
                                          {
                                            type: 'int',
                                            value: '1',
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    type: ';',
                                    value: ';',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: '}',
                            value: '}',
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'vorta',
        value: 'vorta',
        children: [],
      },
      {
        type: ';',
        value: ';',
        children: [],
      },
      {
        type: '}',
        value: '}',
        children: [],
      },
      {
        type: ';',
        value: ';',
        children: [],
      },
    ],
  }

  expect(result).toEqual(expectedAST)
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

  const expectedAST = {
    type: 'S',
    value: 'pila dai ( ) { expr vorta ; } ;',
    children: [
      {
        type: 'pila',
        value: 'pila',
        children: [],
      },
      {
        type: 'dai',
        value: 'dai',
        children: [],
      },
      {
        type: '(',
        value: '(',
        children: [],
      },
      {
        type: ')',
        value: ')',
        children: [],
      },
      {
        type: '{',
        value: '{',
        children: [],
      },
      {
        type: 'expr',
        value: 'declrstrct expr',
        children: [
          {
            type: 'declrstrct',
            value: 'declrvar',
            children: [
              {
                type: 'declrvar',
                value: 'tipo id maisvar',
                children: [
                  {
                    type: 'tipo',
                    value: 'pila',
                    children: [
                      {
                        type: 'pila',
                        value: 'pila',
                        children: [],
                      },
                    ],
                  },
                  {
                    type: 'id',
                    value: 'VEZES',
                    children: [],
                  },
                  {
                    type: 'maisvar',
                    value: "atribuir maisvar'",
                    children: [
                      {
                        type: 'atribuir',
                        value: "assignoperator atribuir'",
                        children: [
                          {
                            type: 'assignoperator',
                            value: '=',
                            children: [],
                          },
                          {
                            type: "atribuir'",
                            value: 'int',
                            children: [
                              {
                                type: 'int',
                                value: '0',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: "maisvar'",
                        value: ", id atribuir maisvar'",
                        children: [
                          {
                            type: ',',
                            value: ',',
                            children: [],
                          },
                          {
                            type: 'id',
                            value: 'N',
                            children: [],
                          },
                          {
                            type: 'atribuir',
                            value: "assignoperator atribuir'",
                            children: [
                              {
                                type: 'assignoperator',
                                value: '=',
                                children: [],
                              },
                              {
                                type: "atribuir'",
                                value: 'int',
                                children: [
                                  {
                                    type: 'int',
                                    value: '0',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: "maisvar'",
                            value: ';',
                            children: [
                              {
                                type: ';',
                                value: ';',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'expr',
            value: 'declrstrct expr',
            children: [
              {
                type: 'declrstrct',
                value: 'declrvar',
                children: [
                  {
                    type: 'declrvar',
                    value: 'tipo id maisvar',
                    children: [
                      {
                        type: 'tipo',
                        value: 'trocado',
                        children: [
                          {
                            type: 'trocado',
                            value: 'trocado',
                            children: [],
                          },
                        ],
                      },
                      {
                        type: 'id',
                        value: 'A',
                        children: [],
                      },
                      {
                        type: 'maisvar',
                        value: "atribuir maisvar'",
                        children: [
                          {
                            type: 'atribuir',
                            value: "assignoperator atribuir'",
                            children: [
                              {
                                type: 'assignoperator',
                                value: '=',
                                children: [],
                              },
                              {
                                type: "atribuir'",
                                value: 'float',
                                children: [
                                  {
                                    type: 'float',
                                    value: '1.2',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: "maisvar'",
                            value: ';',
                            children: [
                              {
                                type: ';',
                                value: ';',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'expr',
                value: 'declrstrct expr',
                children: [
                  {
                    type: 'declrstrct',
                    value: 'declrvar',
                    children: [
                      {
                        type: 'declrvar',
                        value: 'tipo id maisvar',
                        children: [
                          {
                            type: 'tipo',
                            value: 'naipe',
                            children: [
                              {
                                type: 'naipe',
                                value: 'naipe',
                                children: [],
                              },
                            ],
                          },
                          {
                            type: 'id',
                            value: 'B',
                            children: [],
                          },
                          {
                            type: 'maisvar',
                            value: "atribuir maisvar'",
                            children: [
                              {
                                type: 'atribuir',
                                value: "assignoperator atribuir'",
                                children: [
                                  {
                                    type: 'assignoperator',
                                    value: '=',
                                    children: [],
                                  },
                                  {
                                    type: "atribuir'",
                                    value: 'stringliteral',
                                    children: [
                                      {
                                        type: 'stringliteral',
                                        value: '"teste"',
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: "maisvar'",
                                value: ';',
                                children: [
                                  {
                                    type: ';',
                                    value: ';',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'expr',
                    value: 'declrstrct expr',
                    children: [
                      {
                        type: 'declrstrct',
                        value: 'declrvar',
                        children: [
                          {
                            type: 'declrvar',
                            value: 'tipo id maisvar',
                            children: [
                              {
                                type: 'tipo',
                                value: 'creio',
                                children: [
                                  {
                                    type: 'creio',
                                    value: 'creio',
                                    children: [],
                                  },
                                ],
                              },
                              {
                                type: 'id',
                                value: 'C',
                                children: [],
                              },
                              {
                                type: 'maisvar',
                                value: "atribuir maisvar'",
                                children: [
                                  {
                                    type: 'atribuir',
                                    value: "assignoperator atribuir'",
                                    children: [
                                      {
                                        type: 'assignoperator',
                                        value: '=',
                                        children: [],
                                      },
                                      {
                                        type: "atribuir'",
                                        value: 'bool',
                                        children: [
                                          {
                                            type: 'bool',
                                            value: 'verdadeiro',
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    type: "maisvar'",
                                    value: ';',
                                    children: [
                                      {
                                        type: ';',
                                        value: ';',
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'expr',
                        value: 'declrstrct expr',
                        children: [
                          {
                            type: 'declrstrct',
                            value: "amostra'",
                            children: [
                              {
                                type: "amostra'",
                                value: 'amostra ( amostravar',
                                children: [
                                  {
                                    type: 'amostra',
                                    value: 'amostra',
                                    children: [],
                                  },
                                  {
                                    type: '(',
                                    value: '(',
                                    children: [],
                                  },
                                  {
                                    type: 'amostravar',
                                    value: "stringliteral amostravar'",
                                    children: [
                                      {
                                        type: 'stringliteral',
                                        value: '"Digite 5 valores: "',
                                        children: [],
                                      },
                                      {
                                        type: "amostravar'",
                                        value: ') ;',
                                        children: [
                                          {
                                            type: ')',
                                            value: ')',
                                            children: [],
                                          },
                                          {
                                            type: ';',
                                            value: ';',
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'expr',
                            value: 'declrstrct expr',
                            children: [
                              {
                                type: 'declrstrct',
                                value: "arrodeia'",
                                children: [
                                  {
                                    type: "arrodeia'",
                                    value: "arrodeia ( arrodeia'' ; cond ) { expr }",
                                    children: [
                                      {
                                        type: 'arrodeia',
                                        value: 'arrodeia',
                                        children: [],
                                      },
                                      {
                                        type: '(',
                                        value: '(',
                                        children: [],
                                      },
                                      {
                                        type: "arrodeia''",
                                        value: 'id atribuir',
                                        children: [
                                          {
                                            type: 'id',
                                            value: 'VEZES',
                                            children: [],
                                          },
                                          {
                                            type: 'atribuir',
                                            value: "assignoperator atribuir'",
                                            children: [
                                              {
                                                type: 'assignoperator',
                                                value: '=',
                                                children: [],
                                              },
                                              {
                                                type: "atribuir'",
                                                value: 'int',
                                                children: [
                                                  {
                                                    type: 'int',
                                                    value: '0',
                                                    children: [],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        type: ';',
                                        value: ';',
                                        children: [],
                                      },
                                      {
                                        type: 'cond',
                                        value: 'relational',
                                        children: [
                                          {
                                            type: 'relational',
                                            value: 'VOV relationaloperator VOV',
                                            children: [
                                              {
                                                type: 'VOV',
                                                value: 'id',
                                                children: [
                                                  {
                                                    type: 'id',
                                                    value: 'VEZES',
                                                    children: [],
                                                  },
                                                ],
                                              },
                                              {
                                                type: 'relationaloperator',
                                                value: '<',
                                                children: [],
                                              },
                                              {
                                                type: 'VOV',
                                                value: 'int',
                                                children: [
                                                  {
                                                    type: 'int',
                                                    value: '5',
                                                    children: [],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        type: ')',
                                        value: ')',
                                        children: [],
                                      },
                                      {
                                        type: '{',
                                        value: '{',
                                        children: [],
                                      },
                                      {
                                        type: 'expr',
                                        value: 'declrstrct expr',
                                        children: [
                                          {
                                            type: 'declrstrct',
                                            value: "pega'",
                                            children: [
                                              {
                                                type: "pega'",
                                                value: 'pega ( id ) ;',
                                                children: [
                                                  {
                                                    type: 'pega',
                                                    value: 'pega',
                                                    children: [],
                                                  },
                                                  {
                                                    type: '(',
                                                    value: '(',
                                                    children: [],
                                                  },
                                                  {
                                                    type: 'id',
                                                    value: 'A',
                                                    children: [],
                                                  },
                                                  {
                                                    type: ')',
                                                    value: ')',
                                                    children: [],
                                                  },
                                                  {
                                                    type: ';',
                                                    value: ';',
                                                    children: [],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                          {
                                            type: 'expr',
                                            value: 'declrstrct',
                                            children: [
                                              {
                                                type: 'declrstrct',
                                                value: "sepa'",
                                                children: [
                                                  {
                                                    type: "sepa'",
                                                    value: "sepa ( cond ) { expr } sepa''",
                                                    children: [
                                                      {
                                                        type: 'sepa',
                                                        value: 'sepa',
                                                        children: [],
                                                      },
                                                      {
                                                        type: '(',
                                                        value: '(',
                                                        children: [],
                                                      },
                                                      {
                                                        type: 'cond',
                                                        value: 'relational',
                                                        children: [
                                                          {
                                                            type: 'relational',
                                                            value: 'VOV relationaloperator VOV',
                                                            children: [
                                                              {
                                                                type: 'VOV',
                                                                value: 'id',
                                                                children: [
                                                                  {
                                                                    type: 'id',
                                                                    value: 'A',
                                                                    children: [],
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                type: 'relationaloperator',
                                                                value: '>',
                                                                children: [],
                                                              },
                                                              {
                                                                type: 'VOV',
                                                                value: 'int',
                                                                children: [
                                                                  {
                                                                    type: 'int',
                                                                    value: '0',
                                                                    children: [],
                                                                  },
                                                                ],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        type: ')',
                                                        value: ')',
                                                        children: [],
                                                      },
                                                      {
                                                        type: '{',
                                                        value: '{',
                                                        children: [],
                                                      },
                                                      {
                                                        type: 'expr',
                                                        value: 'declrstrct',
                                                        children: [
                                                          {
                                                            type: 'declrstrct',
                                                            value: 'id assignoperator VOV arithmetic ;',
                                                            children: [
                                                              {
                                                                type: 'id',
                                                                value: 'N',
                                                                children: [],
                                                              },
                                                              {
                                                                type: 'assignoperator',
                                                                value: '=',
                                                                children: [],
                                                              },
                                                              {
                                                                type: 'VOV',
                                                                value: 'id',
                                                                children: [
                                                                  {
                                                                    type: 'id',
                                                                    value: 'N',
                                                                    children: [],
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                type: 'arithmetic',
                                                                value: 'arithmeticoperator VOV',
                                                                children: [
                                                                  {
                                                                    type: 'arithmeticoperator',
                                                                    value: '+',
                                                                    children: [],
                                                                  },
                                                                  {
                                                                    type: 'VOV',
                                                                    value: 'int',
                                                                    children: [
                                                                      {
                                                                        type: 'int',
                                                                        value: '1',
                                                                        children: [],
                                                                      },
                                                                    ],
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                type: ';',
                                                                value: ';',
                                                                children: [],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        type: '}',
                                                        value: '}',
                                                        children: [],
                                                      },
                                                      {
                                                        type: "sepa''",
                                                        value: "senao senao'",
                                                        children: [
                                                          {
                                                            type: 'senao',
                                                            value: 'senao',
                                                            children: [],
                                                          },
                                                          {
                                                            type: "senao'",
                                                            value: '{ expr }',
                                                            children: [
                                                              {
                                                                type: '{',
                                                                value: '{',
                                                                children: [],
                                                              },
                                                              {
                                                                type: 'expr',
                                                                value: 'declrstrct',
                                                                children: [
                                                                  {
                                                                    type: 'declrstrct',
                                                                    value: 'id assignoperator VOV arithmetic ;',
                                                                    children: [
                                                                      {
                                                                        type: 'id',
                                                                        value: 'N',
                                                                        children: [],
                                                                      },
                                                                      {
                                                                        type: 'assignoperator',
                                                                        value: '=',
                                                                        children: [],
                                                                      },
                                                                      {
                                                                        type: 'VOV',
                                                                        value: 'id',
                                                                        children: [
                                                                          {
                                                                            type: 'id',
                                                                            value: 'N',
                                                                            children: [],
                                                                          },
                                                                        ],
                                                                      },
                                                                      {
                                                                        type: 'arithmetic',
                                                                        value: 'arithmeticoperator VOV',
                                                                        children: [
                                                                          {
                                                                            type: 'arithmeticoperator',
                                                                            value: '-',
                                                                            children: [],
                                                                          },
                                                                          {
                                                                            type: 'VOV',
                                                                            value: 'int',
                                                                            children: [
                                                                              {
                                                                                type: 'int',
                                                                                value: '1',
                                                                                children: [],
                                                                              },
                                                                            ],
                                                                          },
                                                                        ],
                                                                      },
                                                                      {
                                                                        type: ';',
                                                                        value: ';',
                                                                        children: [],
                                                                      },
                                                                    ],
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                type: '}',
                                                                value: '}',
                                                                children: [],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        type: '}',
                                        value: '}',
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: 'expr',
                                value: 'declrstrct expr',
                                children: [
                                  {
                                    type: 'declrstrct',
                                    value: "amostra'",
                                    children: [
                                      {
                                        type: "amostra'",
                                        value: 'amostra ( amostravar',
                                        children: [
                                          {
                                            type: 'amostra',
                                            value: 'amostra',
                                            children: [],
                                          },
                                          {
                                            type: '(',
                                            value: '(',
                                            children: [],
                                          },
                                          {
                                            type: 'amostravar',
                                            value: "stringliteral amostravar'",
                                            children: [
                                              {
                                                type: 'stringliteral',
                                                value: '"%p valores positivos"',
                                                children: [],
                                              },
                                              {
                                                type: "amostravar'",
                                                value: ', amostravar',
                                                children: [
                                                  {
                                                    type: ',',
                                                    value: ',',
                                                    children: [],
                                                  },
                                                  {
                                                    type: 'amostravar',
                                                    value: "id amostravar'",
                                                    children: [
                                                      {
                                                        type: 'id',
                                                        value: 'N',
                                                        children: [],
                                                      },
                                                      {
                                                        type: "amostravar'",
                                                        value: ') ;',
                                                        children: [
                                                          {
                                                            type: ')',
                                                            value: ')',
                                                            children: [],
                                                          },
                                                          {
                                                            type: ';',
                                                            value: ';',
                                                            children: [],
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    type: 'expr',
                                    value: 'declrstrct',
                                    children: [
                                      {
                                        type: 'declrstrct',
                                        value: "ateque'",
                                        children: [
                                          {
                                            type: "ateque'",
                                            value: 'ateque ( cond ) { expr }',
                                            children: [
                                              {
                                                type: 'ateque',
                                                value: 'ateque',
                                                children: [],
                                              },
                                              {
                                                type: '(',
                                                value: '(',
                                                children: [],
                                              },
                                              {
                                                type: 'cond',
                                                value: 'relational',
                                                children: [
                                                  {
                                                    type: 'relational',
                                                    value: 'VOV relationaloperator VOV',
                                                    children: [
                                                      {
                                                        type: 'VOV',
                                                        value: 'id',
                                                        children: [
                                                          {
                                                            type: 'id',
                                                            value: 'VEZES',
                                                            children: [],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        type: 'relationaloperator',
                                                        value: '>',
                                                        children: [],
                                                      },
                                                      {
                                                        type: 'VOV',
                                                        value: 'int',
                                                        children: [
                                                          {
                                                            type: 'int',
                                                            value: '0',
                                                            children: [],
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                              {
                                                type: ')',
                                                value: ')',
                                                children: [],
                                              },
                                              {
                                                type: '{',
                                                value: '{',
                                                children: [],
                                              },
                                              {
                                                type: 'expr',
                                                value: 'declrstrct',
                                                children: [
                                                  {
                                                    type: 'declrstrct',
                                                    value: 'id assignoperator VOV arithmetic ;',
                                                    children: [
                                                      {
                                                        type: 'id',
                                                        value: 'N',
                                                        children: [],
                                                      },
                                                      {
                                                        type: 'assignoperator',
                                                        value: '=',
                                                        children: [],
                                                      },
                                                      {
                                                        type: 'VOV',
                                                        value: 'id',
                                                        children: [
                                                          {
                                                            type: 'id',
                                                            value: 'N',
                                                            children: [],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        type: 'arithmetic',
                                                        value: 'arithmeticoperator VOV',
                                                        children: [
                                                          {
                                                            type: 'arithmeticoperator',
                                                            value: '+',
                                                            children: [],
                                                          },
                                                          {
                                                            type: 'VOV',
                                                            value: 'int',
                                                            children: [
                                                              {
                                                                type: 'int',
                                                                value: '1',
                                                                children: [],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        type: ';',
                                                        value: ';',
                                                        children: [],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                              {
                                                type: '}',
                                                value: '}',
                                                children: [],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'vorta',
        value: 'vorta',
        children: [],
      },
      {
        type: ';',
        value: ';',
        children: [],
      },
      {
        type: '}',
        value: '}',
        children: [],
      },
      {
        type: ';',
        value: ';',
        children: [],
      },
    ],
  }

  expect(result).toEqual(expectedAST)
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
    expect(error).toEqual('Rejected Error: Unexpected token ;\nError: Unexpected token ;\nError: Unexpected token ;')
  }
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
  try {
    const tokens = lexer(sourceCode)
    parser(tokens)
  } catch (error) {
    expect(error).toEqual('Rejected Error: Unexpected token VEZES\nError: Unexpected token VEZES')
  }
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

  const expectedAST = {
    type: 'S',
    value: 'pila dai ( ) { expr vorta ; } ;',
    children: [
      {
        type: 'pila',
        value: 'pila',
        children: [],
      },
      {
        type: 'dai',
        value: 'dai',
        children: [],
      },
      {
        type: '(',
        value: '(',
        children: [],
      },
      {
        type: ')',
        value: ')',
        children: [],
      },
      {
        type: '{',
        value: '{',
        children: [],
      },
      {
        type: 'expr',
        value: 'declrstrct expr',
        children: [
          {
            type: 'declrstrct',
            value: 'declrvar',
            children: [
              {
                type: 'declrvar',
                value: 'tipo id maisvar',
                children: [
                  {
                    type: 'tipo',
                    value: 'pila',
                    children: [
                      {
                        type: 'pila',
                        value: 'pila',
                        children: [],
                      },
                    ],
                  },
                  {
                    type: 'id',
                    value: 'VEZES',
                    children: [],
                  },
                  {
                    type: 'maisvar',
                    value: "atribuir maisvar'",
                    children: [
                      {
                        type: 'atribuir',
                        value: "assignoperator atribuir'",
                        children: [
                          {
                            type: 'assignoperator',
                            value: '=',
                            children: [],
                          },
                          {
                            type: "atribuir'",
                            value: 'int',
                            children: [
                              {
                                type: 'int',
                                value: '0',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: "maisvar'",
                        value: ", id atribuir maisvar'",
                        children: [
                          {
                            type: ',',
                            value: ',',
                            children: [],
                          },
                          {
                            type: 'id',
                            value: 'N',
                            children: [],
                          },
                          {
                            type: 'atribuir',
                            value: "assignoperator atribuir'",
                            children: [
                              {
                                type: 'assignoperator',
                                value: '=',
                                children: [],
                              },
                              {
                                type: "atribuir'",
                                value: 'int',
                                children: [
                                  {
                                    type: 'int',
                                    value: '0',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: "maisvar'",
                            value: ", id atribuir maisvar'",
                            children: [
                              {
                                type: ',',
                                value: ',',
                                children: [],
                              },
                              {
                                type: 'id',
                                value: 'i',
                                children: [],
                              },
                              {
                                type: 'atribuir',
                                value: "assignoperator atribuir'",
                                children: [
                                  {
                                    type: 'assignoperator',
                                    value: '=',
                                    children: [],
                                  },
                                  {
                                    type: "atribuir'",
                                    value: 'int',
                                    children: [
                                      {
                                        type: 'int',
                                        value: '0',
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: "maisvar'",
                                value: ';',
                                children: [
                                  {
                                    type: ';',
                                    value: ';',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'expr',
            value: 'declrstrct expr',
            children: [
              {
                type: 'declrstrct',
                value: 'declrvar',
                children: [
                  {
                    type: 'declrvar',
                    value: 'tipo id ;',
                    children: [
                      {
                        type: 'tipo',
                        value: 'trocado',
                        children: [
                          {
                            type: 'trocado',
                            value: 'trocado',
                            children: [],
                          },
                        ],
                      },
                      {
                        type: 'id',
                        value: 'A',
                        children: [],
                      },
                      {
                        type: ';',
                        value: ';',
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'expr',
                value: 'declrstrct expr',
                children: [
                  {
                    type: 'declrstrct',
                    value: "amostra'",
                    children: [
                      {
                        type: "amostra'",
                        value: 'amostra ( amostravar',
                        children: [
                          {
                            type: 'amostra',
                            value: 'amostra',
                            children: [],
                          },
                          {
                            type: '(',
                            value: '(',
                            children: [],
                          },
                          {
                            type: 'amostravar',
                            value: "stringliteral amostravar'",
                            children: [
                              {
                                type: 'stringliteral',
                                value: '"Digite 5 valores: "',
                                children: [],
                              },
                              {
                                type: "amostravar'",
                                value: ') ;',
                                children: [
                                  {
                                    type: ')',
                                    value: ')',
                                    children: [],
                                  },
                                  {
                                    type: ';',
                                    value: ';',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'expr',
                    value: 'declrstrct expr',
                    children: [
                      {
                        type: 'declrstrct',
                        value: "arrodeia'",
                        children: [
                          {
                            type: "arrodeia'",
                            value: "arrodeia ( arrodeia'' ; cond ) { expr }",
                            children: [
                              {
                                type: 'arrodeia',
                                value: 'arrodeia',
                                children: [],
                              },
                              {
                                type: '(',
                                value: '(',
                                children: [],
                              },
                              {
                                type: "arrodeia''",
                                value: 'id atribuir',
                                children: [
                                  {
                                    type: 'id',
                                    value: 'VEZES',
                                    children: [],
                                  },
                                  {
                                    type: 'atribuir',
                                    value: "assignoperator atribuir'",
                                    children: [
                                      {
                                        type: 'assignoperator',
                                        value: '=',
                                        children: [],
                                      },
                                      {
                                        type: "atribuir'",
                                        value: 'int',
                                        children: [
                                          {
                                            type: 'int',
                                            value: '0',
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: ';',
                                value: ';',
                                children: [],
                              },
                              {
                                type: 'cond',
                                value: 'relational',
                                children: [
                                  {
                                    type: 'relational',
                                    value: 'VOV relationaloperator VOV',
                                    children: [
                                      {
                                        type: 'VOV',
                                        value: 'id',
                                        children: [
                                          {
                                            type: 'id',
                                            value: 'VEZES',
                                            children: [],
                                          },
                                        ],
                                      },
                                      {
                                        type: 'relationaloperator',
                                        value: '<',
                                        children: [],
                                      },
                                      {
                                        type: 'VOV',
                                        value: 'int',
                                        children: [
                                          {
                                            type: 'int',
                                            value: '5',
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: ')',
                                value: ')',
                                children: [],
                              },
                              {
                                type: '{',
                                value: '{',
                                children: [],
                              },
                              {
                                type: 'expr',
                                value: 'declrstrct',
                                children: [
                                  {
                                    type: 'declrstrct',
                                    value: "arrodeia'",
                                    children: [
                                      {
                                        type: "arrodeia'",
                                        value: "arrodeia ( arrodeia'' ; cond ) { expr }",
                                        children: [
                                          {
                                            type: 'arrodeia',
                                            value: 'arrodeia',
                                            children: [],
                                          },
                                          {
                                            type: '(',
                                            value: '(',
                                            children: [],
                                          },
                                          {
                                            type: "arrodeia''",
                                            value: 'id atribuir',
                                            children: [
                                              {
                                                type: 'id',
                                                value: 'i',
                                                children: [],
                                              },
                                              {
                                                type: 'atribuir',
                                                value: "assignoperator atribuir'",
                                                children: [
                                                  {
                                                    type: 'assignoperator',
                                                    value: '=',
                                                    children: [],
                                                  },
                                                  {
                                                    type: "atribuir'",
                                                    value: 'int',
                                                    children: [
                                                      {
                                                        type: 'int',
                                                        value: '0',
                                                        children: [],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                          {
                                            type: ';',
                                            value: ';',
                                            children: [],
                                          },
                                          {
                                            type: 'cond',
                                            value: 'relational',
                                            children: [
                                              {
                                                type: 'relational',
                                                value: 'VOV relationaloperator VOV',
                                                children: [
                                                  {
                                                    type: 'VOV',
                                                    value: 'id',
                                                    children: [
                                                      {
                                                        type: 'id',
                                                        value: 'i',
                                                        children: [],
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    type: 'relationaloperator',
                                                    value: '<',
                                                    children: [],
                                                  },
                                                  {
                                                    type: 'VOV',
                                                    value: 'int',
                                                    children: [
                                                      {
                                                        type: 'int',
                                                        value: '5',
                                                        children: [],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                          {
                                            type: ')',
                                            value: ')',
                                            children: [],
                                          },
                                          {
                                            type: '{',
                                            value: '{',
                                            children: [],
                                          },
                                          {
                                            type: 'expr',
                                            value: 'declrstrct',
                                            children: [
                                              {
                                                type: 'declrstrct',
                                                value: 'id assignoperator VOV arithmetic ;',
                                                children: [
                                                  {
                                                    type: 'id',
                                                    value: 'N',
                                                    children: [],
                                                  },
                                                  {
                                                    type: 'assignoperator',
                                                    value: '=',
                                                    children: [],
                                                  },
                                                  {
                                                    type: 'VOV',
                                                    value: 'id',
                                                    children: [
                                                      {
                                                        type: 'id',
                                                        value: 'N',
                                                        children: [],
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    type: 'arithmetic',
                                                    value: 'arithmeticoperator VOV',
                                                    children: [
                                                      {
                                                        type: 'arithmeticoperator',
                                                        value: '+',
                                                        children: [],
                                                      },
                                                      {
                                                        type: 'VOV',
                                                        value: 'int',
                                                        children: [
                                                          {
                                                            type: 'int',
                                                            value: '1',
                                                            children: [],
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    type: ';',
                                                    value: ';',
                                                    children: [],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                          {
                                            type: '}',
                                            value: '}',
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: '}',
                                value: '}',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'expr',
                        value: 'declrstrct',
                        children: [
                          {
                            type: 'declrstrct',
                            value: "amostra'",
                            children: [
                              {
                                type: "amostra'",
                                value: 'amostra ( amostravar',
                                children: [
                                  {
                                    type: 'amostra',
                                    value: 'amostra',
                                    children: [],
                                  },
                                  {
                                    type: '(',
                                    value: '(',
                                    children: [],
                                  },
                                  {
                                    type: 'amostravar',
                                    value: "stringliteral amostravar'",
                                    children: [
                                      {
                                        type: 'stringliteral',
                                        value: '"%p valores positivos"',
                                        children: [],
                                      },
                                      {
                                        type: "amostravar'",
                                        value: ', amostravar',
                                        children: [
                                          {
                                            type: ',',
                                            value: ',',
                                            children: [],
                                          },
                                          {
                                            type: 'amostravar',
                                            value: "id amostravar'",
                                            children: [
                                              {
                                                type: 'id',
                                                value: 'N',
                                                children: [],
                                              },
                                              {
                                                type: "amostravar'",
                                                value: ') ;',
                                                children: [
                                                  {
                                                    type: ')',
                                                    value: ')',
                                                    children: [],
                                                  },
                                                  {
                                                    type: ';',
                                                    value: ';',
                                                    children: [],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'vorta',
        value: 'vorta',
        children: [],
      },
      {
        type: ';',
        value: ';',
        children: [],
      },
      {
        type: '}',
        value: '}',
        children: [],
      },
      {
        type: ';',
        value: ';',
        children: [],
      },
    ],
  }

  expect(result).toEqual(expectedAST)
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

  const expectedAST = {
    type: 'S',
    value: 'pila dai ( ) { expr vorta ; } ;',
    children: [
      {
        type: 'pila',
        value: 'pila',
        children: [],
      },
      {
        type: 'dai',
        value: 'dai',
        children: [],
      },
      {
        type: '(',
        value: '(',
        children: [],
      },
      {
        type: ')',
        value: ')',
        children: [],
      },
      {
        type: '{',
        value: '{',
        children: [],
      },
      {
        type: 'expr',
        value: 'declrstrct expr',
        children: [
          {
            type: 'declrstrct',
            value: 'declrvar',
            children: [
              {
                type: 'declrvar',
                value: 'tipo id maisvar',
                children: [
                  {
                    type: 'tipo',
                    value: 'pila',
                    children: [
                      {
                        type: 'pila',
                        value: 'pila',
                        children: [],
                      },
                    ],
                  },
                  {
                    type: 'id',
                    value: 'VEZES',
                    children: [],
                  },
                  {
                    type: 'maisvar',
                    value: "atribuir maisvar'",
                    children: [
                      {
                        type: 'atribuir',
                        value: "assignoperator atribuir'",
                        children: [
                          {
                            type: 'assignoperator',
                            value: '=',
                            children: [],
                          },
                          {
                            type: "atribuir'",
                            value: 'int',
                            children: [
                              {
                                type: 'int',
                                value: '0',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: "maisvar'",
                        value: ", id atribuir maisvar'",
                        children: [
                          {
                            type: ',',
                            value: ',',
                            children: [],
                          },
                          {
                            type: 'id',
                            value: 'N',
                            children: [],
                          },
                          {
                            type: 'atribuir',
                            value: "assignoperator atribuir'",
                            children: [
                              {
                                type: 'assignoperator',
                                value: '=',
                                children: [],
                              },
                              {
                                type: "atribuir'",
                                value: 'int',
                                children: [
                                  {
                                    type: 'int',
                                    value: '0',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: "maisvar'",
                            value: ", id atribuir maisvar'",
                            children: [
                              {
                                type: ',',
                                value: ',',
                                children: [],
                              },
                              {
                                type: 'id',
                                value: 'a',
                                children: [],
                              },
                              {
                                type: 'atribuir',
                                value: "assignoperator atribuir'",
                                children: [
                                  {
                                    type: 'assignoperator',
                                    value: '=',
                                    children: [],
                                  },
                                  {
                                    type: "atribuir'",
                                    value: 'int',
                                    children: [
                                      {
                                        type: 'int',
                                        value: '3',
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: "maisvar'",
                                value: ", id atribuir maisvar'",
                                children: [
                                  {
                                    type: ',',
                                    value: ',',
                                    children: [],
                                  },
                                  {
                                    type: 'id',
                                    value: 'b',
                                    children: [],
                                  },
                                  {
                                    type: 'atribuir',
                                    value: "assignoperator atribuir'",
                                    children: [
                                      {
                                        type: 'assignoperator',
                                        value: '=',
                                        children: [],
                                      },
                                      {
                                        type: "atribuir'",
                                        value: 'int',
                                        children: [
                                          {
                                            type: 'int',
                                            value: '2',
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    type: "maisvar'",
                                    value: ';',
                                    children: [
                                      {
                                        type: ';',
                                        value: ';',
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'expr',
            value: 'declrstrct expr',
            children: [
              {
                type: 'declrstrct',
                value: 'declrvar',
                children: [
                  {
                    type: 'declrvar',
                    value: 'tipo id ;',
                    children: [
                      {
                        type: 'tipo',
                        value: 'trocado',
                        children: [
                          {
                            type: 'trocado',
                            value: 'trocado',
                            children: [],
                          },
                        ],
                      },
                      {
                        type: 'id',
                        value: 'A',
                        children: [],
                      },
                      {
                        type: ';',
                        value: ';',
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'expr',
                value: 'declrstrct expr',
                children: [
                  {
                    type: 'declrstrct',
                    value: "amostra'",
                    children: [
                      {
                        type: "amostra'",
                        value: 'amostra ( amostravar',
                        children: [
                          {
                            type: 'amostra',
                            value: 'amostra',
                            children: [],
                          },
                          {
                            type: '(',
                            value: '(',
                            children: [],
                          },
                          {
                            type: 'amostravar',
                            value: "stringliteral amostravar'",
                            children: [
                              {
                                type: 'stringliteral',
                                value: '"Digite 5 valores: "',
                                children: [],
                              },
                              {
                                type: "amostravar'",
                                value: ') ;',
                                children: [
                                  {
                                    type: ')',
                                    value: ')',
                                    children: [],
                                  },
                                  {
                                    type: ';',
                                    value: ';',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'expr',
                    value: 'declrstrct expr',
                    children: [
                      {
                        type: 'declrstrct',
                        value: "arrodeia'",
                        children: [
                          {
                            type: "arrodeia'",
                            value: "arrodeia ( arrodeia'' ; cond ) { expr }",
                            children: [
                              {
                                type: 'arrodeia',
                                value: 'arrodeia',
                                children: [],
                              },
                              {
                                type: '(',
                                value: '(',
                                children: [],
                              },
                              {
                                type: "arrodeia''",
                                value: 'id atribuir',
                                children: [
                                  {
                                    type: 'id',
                                    value: 'VEZES',
                                    children: [],
                                  },
                                  {
                                    type: 'atribuir',
                                    value: "assignoperator atribuir'",
                                    children: [
                                      {
                                        type: 'assignoperator',
                                        value: '=',
                                        children: [],
                                      },
                                      {
                                        type: "atribuir'",
                                        value: 'int',
                                        children: [
                                          {
                                            type: 'int',
                                            value: '0',
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: ';',
                                value: ';',
                                children: [],
                              },
                              {
                                type: 'cond',
                                value: 'relational',
                                children: [
                                  {
                                    type: 'relational',
                                    value: 'VOV relationaloperator VOV',
                                    children: [
                                      {
                                        type: 'VOV',
                                        value: 'id',
                                        children: [
                                          {
                                            type: 'id',
                                            value: 'VEZES',
                                            children: [],
                                          },
                                        ],
                                      },
                                      {
                                        type: 'relationaloperator',
                                        value: '<',
                                        children: [],
                                      },
                                      {
                                        type: 'VOV',
                                        value: 'int',
                                        children: [
                                          {
                                            type: 'int',
                                            value: '5',
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: ')',
                                value: ')',
                                children: [],
                              },
                              {
                                type: '{',
                                value: '{',
                                children: [],
                              },
                              {
                                type: 'expr',
                                value: 'declrstrct',
                                children: [
                                  {
                                    type: 'declrstrct',
                                    value: "sepa'",
                                    children: [
                                      {
                                        type: "sepa'",
                                        value: 'sepa ( cond ) { expr }',
                                        children: [
                                          {
                                            type: 'sepa',
                                            value: 'sepa',
                                            children: [],
                                          },
                                          {
                                            type: '(',
                                            value: '(',
                                            children: [],
                                          },
                                          {
                                            type: 'cond',
                                            value: 'relational',
                                            children: [
                                              {
                                                type: 'relational',
                                                value: 'VOV relationaloperator VOV',
                                                children: [
                                                  {
                                                    type: 'VOV',
                                                    value: 'id',
                                                    children: [
                                                      {
                                                        type: 'id',
                                                        value: 'a',
                                                        children: [],
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    type: 'relationaloperator',
                                                    value: '>',
                                                    children: [],
                                                  },
                                                  {
                                                    type: 'VOV',
                                                    value: 'id',
                                                    children: [
                                                      {
                                                        type: 'id',
                                                        value: 'b',
                                                        children: [],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                          {
                                            type: ')',
                                            value: ')',
                                            children: [],
                                          },
                                          {
                                            type: '{',
                                            value: '{',
                                            children: [],
                                          },
                                          {
                                            type: 'expr',
                                            value: 'declrstrct',
                                            children: [
                                              {
                                                type: 'declrstrct',
                                                value: 'id assignoperator VOV arithmetic ;',
                                                children: [
                                                  {
                                                    type: 'id',
                                                    value: 'N',
                                                    children: [],
                                                  },
                                                  {
                                                    type: 'assignoperator',
                                                    value: '=',
                                                    children: [],
                                                  },
                                                  {
                                                    type: 'VOV',
                                                    value: 'id',
                                                    children: [
                                                      {
                                                        type: 'id',
                                                        value: 'N',
                                                        children: [],
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    type: 'arithmetic',
                                                    value: 'arithmeticoperator VOV',
                                                    children: [
                                                      {
                                                        type: 'arithmeticoperator',
                                                        value: '+',
                                                        children: [],
                                                      },
                                                      {
                                                        type: 'VOV',
                                                        value: 'int',
                                                        children: [
                                                          {
                                                            type: 'int',
                                                            value: '1',
                                                            children: [],
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    type: ';',
                                                    value: ';',
                                                    children: [],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                          {
                                            type: '}',
                                            value: '}',
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: '}',
                                value: '}',
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'expr',
                        value: 'declrstrct',
                        children: [
                          {
                            type: 'declrstrct',
                            value: "amostra'",
                            children: [
                              {
                                type: "amostra'",
                                value: 'amostra ( amostravar',
                                children: [
                                  {
                                    type: 'amostra',
                                    value: 'amostra',
                                    children: [],
                                  },
                                  {
                                    type: '(',
                                    value: '(',
                                    children: [],
                                  },
                                  {
                                    type: 'amostravar',
                                    value: "stringliteral amostravar'",
                                    children: [
                                      {
                                        type: 'stringliteral',
                                        value: '"%p valores positivos"',
                                        children: [],
                                      },
                                      {
                                        type: "amostravar'",
                                        value: ', amostravar',
                                        children: [
                                          {
                                            type: ',',
                                            value: ',',
                                            children: [],
                                          },
                                          {
                                            type: 'amostravar',
                                            value: "id amostravar'",
                                            children: [
                                              {
                                                type: 'id',
                                                value: 'N',
                                                children: [],
                                              },
                                              {
                                                type: "amostravar'",
                                                value: ') ;',
                                                children: [
                                                  {
                                                    type: ')',
                                                    value: ')',
                                                    children: [],
                                                  },
                                                  {
                                                    type: ';',
                                                    value: ';',
                                                    children: [],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'vorta',
        value: 'vorta',
        children: [],
      },
      {
        type: ';',
        value: ';',
        children: [],
      },
      {
        type: '}',
        value: '}',
        children: [],
      },
      {
        type: ';',
        value: ';',
        children: [],
      },
    ],
  }

  expect(result).toEqual(expectedAST)
})
