import { expect, test } from 'bun:test'
import { parser } from './parser.ts'

test('should show an rejected error if program not start correctly', () => {
  const tokens = [
    { type: 'id', value: 'foo' },
    { type: 'arithmeticoperator', value: '+' },
    { type: 'id', value: 'bar' },
    { type: ';', value: ';' },
  ]

  const result = parser(tokens)

  expect(result).toEqual(
    'Rejected Error: Unexpected token foo\nError: Unexpected token foo\nError: Unexpected token foo\nError: Unexpected token foo\nError: Unexpected token foo\nError: Unexpected token +\nError: Unexpected token +'
  )
})

test('should show an accepted error if program not have correctly token', () => {
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

  const error = parser(tokens)

  expect(error).toEqual('Rejected Error: Unexpected token "%p valores positivos\\n"\nError: Unexpected token }')
})

test('should parse simple program with arrodeia correctly', () => {
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
                                        value: '"%p valores positivos\\n"',
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

test('should parse simple program with one operation correctly', () => {
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

test('should parse simple program declaring vars correctly', () => {
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

test('should parse simple program and create a AST', () => {
  const tokens = [
    { type: 'pila', value: 'pila' },
    { type: 'dai', value: 'dai' },
    { type: '(', value: '(' },
    { type: ')', value: ')' },
    { type: '{', value: '{' },
    { type: 'id', value: 'N' },
    { type: 'assignoperator', value: '=' },
    { type: 'id', value: 'N' },
    { type: 'arithmeticoperator', value: '+' },
    { type: 'int', value: '1' },
    { type: ';', value: ';' },
    { type: 'vorta', value: 'vorta' },
    { type: ';', value: ';' },
    { type: '}', value: '}' },
    { type: ';', value: ';' },
    { type: 'EOF', value: 'EOF' },
  ]

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
