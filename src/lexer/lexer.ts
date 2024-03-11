import tokens from './tokens.json'
import { Token } from '../types'

const convertRegex = (pattern: string) => new RegExp(pattern)

const spliter = (code: string) =>
  code
    .split(/(".*?"|'.*?'|\/\*[\s\S]*?\*\/|\/\/.*|\/[^\/\n]*\/|[a-zA-Z_]\w*|-?\d*\.?\d+|==|!=|<=|>=|&&|\|\||[^\s])/g)
    .filter((token) => token !== undefined && token.trim() !== '')

const regexTokens = Object.entries(tokens).reduce((acc, [name, pattern]) => {
  acc[name] = convertRegex(pattern)
  return acc
}, {} as { [name: string]: RegExp })

const lexer = (code: string) => {
  const result: Token[] = []

  spliter(code).forEach((token) => {
    const tokenType = Object.keys(regexTokens).find((key) => regexTokens[key].test(token))

    if (tokenType) {
      result.push({
        type: tokenType,
        value: token,
      })
    }

    if (!tokenType) {
      throw `Error: Unexpected token ${token}`
    }
  })

  result.push({
    type: 'EOF',
    value: 'EOF',
  })

  return result
}

export { lexer }
