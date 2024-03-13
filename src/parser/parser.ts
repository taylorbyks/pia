import { Token } from '../types'
import table from './table.json'
import grammar from './grammar.json'

const parser = (tokens: Token[]) => {
  let currentToken = tokens.shift()
  const syntaxTree = { type: 'Program', children: [] }
  const errors: string[] = []
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

      const node = { type: rule, children: [] }
      for (let i = 0; i < production.split(' ').length; i++) {
        node.children.push(stack.pop()[0])
      }
      node.children = node.children.reverse()
      const parentState = stack[stack.length - 1][1]
      const parentNextState = table[parentState][rule]

      stack.push([{ type: rule, value: production }, table[parentState][rule]])

      syntaxTree.children.push(node)
    }
  }

  return `Rejected ${errors.join('\n')}`
}

export { parser }
