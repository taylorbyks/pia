import { expect, test } from 'bun:test'
import { convertToETAC } from './converter.ts'

test('should convert amostra', () => {
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
                        value: '"PIA Compiler"',
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

  const result = convertToETAC(ASTTree)

  const expectedETAC = 'call write_string("PIA Compiler")'

  expect(result).toEqual(expectedETAC)
})

test('should convert a declared variable and arithmetic operation', () => {
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

  const result = convertToETAC(ASTTree)

  const expectedETAC = 't0: i32 = 0\nN: i32 = t0\nN: i32 = N + 1'

  expect(result).toEqual(expectedETAC)
})

test('should convert a complex arithmetic operation', () => {
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
                    value: 'arithmeticoperator VOV cont',
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
                      {
                        type: 'cont',
                        value: 'arithmeticoperator VOV',
                        children: [
                          {
                            type: 'arithmeticoperator',
                            value: '+',
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

  const result = convertToETAC(ASTTree)

  const expectedETAC = 't0: i32 = 0\nN: i32 = t0\nN: i32 = N + 1\nt1: i32 = N\nN: i32 = N + t1'

  expect(result).toEqual(expectedETAC)
})

test('should convert a loop', () => {
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
                                    value: 'N',
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
                                value: '"PIA Compiler"',
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

  const result = convertToETAC(ASTTree)

  const expectedETAC =
    't0: i32 = 0\nN: i32 = t0\nt1: i32 = 0\nN: i32 = t1\nL0:\nif N < 5 goto L1\nN: i32 = N + 1\ngoto L0\nL1:\ncall write_string("PIA Compiler")'

  expect(result).toEqual(expectedETAC)
})
