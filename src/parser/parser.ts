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
    const nextState = table[currentState][currentToken.type]

    if (nextState === '') {
      errors.push(`Error: Unexpected token ${currentToken.value}`)
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

  return errors
}

export { parser }
