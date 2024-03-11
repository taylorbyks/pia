import { Token } from '../types'
import table from './table.json'
import grammar from './grammar.json'

const parser = (tokens: Token[]) => {
  let currentToken = tokens.shift()
  const stack = [
    [
      {
        type: 'EOF',
        value: 'EOF',
      },
      '0',
    ],
  ]

  while (currentToken) {
    const currentState = stack[stack.length - 1][1]
    const nextState = table[currentState][currentToken.type]

    if (nextState === '') {
      throw `Error: Unexpected token ${currentToken.value}`
    }

    if (nextState === 'accept') {
      return 'Accepted'
    }

    if (nextState.includes('shift')) {
      stack.push([currentToken, nextState.split(' ')[1]])

      currentToken = tokens.shift()

    }

    if (nextState.includes('reduce')) {
      const ruleNumber = nextState.split(' ')[1]
      const [rule, production] = grammar[ruleNumber].split('->')

      for (let i = 0; i < production.split(' ').length; i++) {
        stack.pop()
      }

      const state = stack[stack.length - 1][1]

      stack.push([{ type: rule, value: production }, table[state][rule]])
    }
  }

  return 'Rejected'
}

export { parser }
