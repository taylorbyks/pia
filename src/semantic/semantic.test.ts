import { expect, test } from 'bun:test'
import { semanticAnalyzer } from './semantic.ts'

test('should reject if a variable is used without declaration', () => {
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

test('should reject if a variable is declared more than once in the same scope', () => {
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
    expect(error).toEqual('Rejected Error: Variable N already declared.')
  }
})

test('should reject if incompatible types are assigned to a variable', () => {
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
                        value: 'float',
                        children: [
                          {
                            type: 'float',
                            value: '1.1',
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

  try {
    semanticAnalyzer(ASTTree)
  } catch (error) {
    expect(error).toEqual(
      'Rejected Error: Type mismatch in arithmetic operation for variable N. Expected pila, found float.'
    )
  }
})

test('should reject if incompatible types are used in arithmetic operations', () => {
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
                            value: 'stringliteral',
                            children: [
                              {
                                type: 'stringliteral',
                                value: '"n"',
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
                        value: 'A',
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
    expect(error).toEqual(
      'Rejected Error: Type mismatch in arithmetic operation for variable A. Expected naipe, found pila.\nError: Type mismatch in assignment to A. Expected pila, found naipe.'
    )
  }
})

test('should reject if incompatible types are used in logical operations', () => {
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
                                    value: 'stringliteral',
                                    children: [
                                      {
                                        type: 'stringliteral',
                                        value: '"n"',
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
                                value: 'N',
                                children: [],
                              },
                            ],
                          },
                          {
                            type: 'relationaloperator',
                            value: '>=',
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
                                value: 'A',
                                children: [],
                              },
                              {
                                type: 'assignoperator',
                                value: '=',
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
    expect(error).toEqual('Rejected Error: Type mismatch in logical operation. Expected boolean, found char.')
  }
})
