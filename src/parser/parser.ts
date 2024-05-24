import { Stack, Token, Table, Grammar, ASTNode } from '../types'
import tableJson from './table.json'
import grammarJson from './grammar.json'

const table = tableJson as Table
const grammar = grammarJson as Grammar

const parser = (tokens: Token[]): ASTNode | string => {
  let currentToken = tokens.shift()
  const errors: string[] = []
  const stack: Stack = [
    [
      {
        type: 'EOF',
        value: 'EOF',
      },
      '0',
    ],
  ]

  const astStack: ASTNode[] = []

  while (currentToken) {
    const currentState = stack[stack.length - 1][1]

    if (currentState === 'accept') {
      if (errors.length > 0) {
        return `Rejected ${errors.join('\n')}`
      }

      return astStack[0]
    }

    let nextState = table[currentState][currentToken.type]

    if (nextState === '') {
      errors.push(`Error: Unexpected token ${currentToken.value}`)

      const reduceState = Object.keys(table[currentState]).find((key) => table[currentState][key].includes('reduce'))
      const shiftState = Object.keys(table[currentState]).find((key) => table[currentState][key].includes('shift'))

      if (reduceState) {
        nextState = table[currentState][reduceState]
      }

      if (!reduceState && shiftState) {
        tokens.unshift(currentToken)
        currentToken = { type: shiftState, value: '' }
        continue
      }
    }

    if (nextState.includes('shift')) {
      stack.push([currentToken, nextState.split(' ')[1]])
      astStack.push({ type: currentToken.type, value: currentToken.value, children: [] })

      currentToken = tokens.shift()
    }

    if (nextState.includes('reduce')) {
      const ruleNumber = nextState.split(' ')[1]
      const [rule, production] = grammar[ruleNumber].split('->')

      const productionItems = production.split(' ').filter((item) => item !== '')
      const productionLength = productionItems.length

      const children = astStack.splice(-productionLength, productionLength)
      stack.splice(-productionLength, productionLength)

      const state = stack[stack.length - 1][1]
      const newState = table[state][rule]

      stack.push([{ type: rule, value: production }, newState])

      astStack.push({ type: rule.trim(), value: production.trim(), children })
    }
  }

  return `Rejected ${errors.join('\n')}`
}

export { parser }
