import { tokenize } from './tokenize/tokenize.ts'

const args = Bun.argv

const filePath = args[2]

try {
  if (!filePath) {
    throw 'Wrong file path provided'
  }

  if (filePath.slice(-4) !== '.pia') {
    throw 'Wrong file extension provided, must be .pia'
  }

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
