import tokens from '../tokens.json'

const convertRegex = (pattern: string) => new RegExp(pattern)

const spliter = (code: string) =>
  code
    .split(/(".*?"|'.*?'|\/\*[\s\S]*?\*\/|\/\/.*|\/[^\/\n]*\/|[a-zA-Z_]\w*|\d+|[^\s])/g)
    .filter((token) => token.trim() !== '')

const regexTokens = Object.entries(tokens).reduce((acc, [name, pattern]) => {
  acc[name] = convertRegex(pattern)
  return acc
}, {} as { [name: string]: RegExp })

const tokenize = (code: string) => {
  const result: { type: string; value: string }[] = []

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

  return result
}

export { tokenize }
