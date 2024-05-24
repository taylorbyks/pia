import { expect, test } from 'bun:test'
import { semanticAnalyzer } from './semantic.ts'

test('should reject if use a undeclared variable', () => {
  const ASTTree = {
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

  try {
    semanticAnalyzer(ASTTree)
  } catch (error) {
    expect(error).toEqual('Rejected Error: Variable N not declared.\nError: Variable N not declared.')
  }
})

test('should accept if use a declared variable', () => {
  const ASTTree = {
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
                    value: 'N',
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

  const result = semanticAnalyzer(ASTTree)

  expect(result).toEqual('Accepted')
})

test.skip('should parse simple program with arrodeia correctly', () => {
  const ASTTree = {
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

  const result = semanticAnalyzer(ASTTree)

  expect(result).toEqual('Accepted')
})

test.skip('should parse simple program with one operation correctly', () => {
  const ASTTree = {
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

  const result = semanticAnalyzer(ASTTree)

  expect(result).toEqual('Accepted')
})

test.skip('should parse simple program declaring vars correctly', () => {
  const ASTTree = {
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

  const result = semanticAnalyzer(ASTTree)

  expect(result).toEqual('Accepted')
})

test.skip('should parse simple program and create a AST', () => {
  const ASTTree = {
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
  const result = semanticAnalyzer(ASTTree)

  expect(result).toEqual('Accepted')
})
