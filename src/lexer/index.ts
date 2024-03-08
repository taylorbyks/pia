import { lexer } from './lexer.ts'

const args = Bun.argv

const filePath = args[2]

try {
  if (!filePath) {
    throw 'Wrong file path provided'
  }

  if (filePath.slice(-4) !== '.pia') {
    throw 'Wrong file extension provided, must be .pia'
  }

  const file = await Bun.file(filePath).text()
  const tokens = lexer(file)

  console.log('Source code:')
  console.log(file)
  console.log('')
  console.log('Tokens:')
  console.log(tokens)
} catch (error) {
  console.error(error)
}
