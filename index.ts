import { tokenize } from './tokenize/tokenize.ts'

try {
  const file = await Bun.file(import.meta.dir + '/test.pia').text()
  const tokens = tokenize(file)

  console.log('Source code:')
  console.log(file)
  console.log('')
  console.log('Tokens:')
  console.log(tokens.map((token) => ` ${token.type}: ${token.value}`).join('\n'))
} catch (error) {
  console.error(error)
}
