import { Stack, Token, Table, Grammar } from '../types'
import tableJson from './table.json'
import grammarJson from './grammar.json'

const table = tableJson as Table
const grammar = grammarJson as Grammar

const parser = (tokens: Token[]) => {
  let currentToken = tokens.shift()
  const errors: string[] = []
  const stack = [
    [
      {
        type: 'EOF',
        value: 'EOF',
      },
      '0',
    ],
  ] as Stack

  while (currentToken) {
    const currentState = stack[stack.length - 1][1]
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

    if (nextState === 'accept') {
      if (errors.length > 0) {
        return `Rejected ${errors.join('\n')}`
      }

      return 'Accepted'
    }

    if (nextState.includes('shift')) {
      stack.push([currentToken, nextState.split(' ')[1]])

      currentToken = tokens.shift()
    }

    if (nextState.includes('reduce')) {
      const ruleNumber = nextState.split(' ')[1]
      const [rule, production] = grammar[ruleNumber].split('->')

      const productionLength = production.split(' ').length
      stack.splice(-productionLength, productionLength)

      const state = stack[stack.length - 1][1]

      stack.push([{ type: rule, value: production }, table[state][rule]])
    }
  }

  return `Rejected ${errors.join('\n')}`
}

export { parser }
