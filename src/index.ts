import { convertToETAC } from './converter/converter.ts'
import { lexer } from './lexer/lexer.ts'
import { parser } from './parser/parser.ts'
import { semanticAnalyzer } from './semantic/semantic.ts'

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
  const result = parser(tokens)
  semanticAnalyzer(result)
  const code = convertToETAC(result)

  console.log('Source code:')
  console.log(file)
  console.log('')
  console.log('Result:')
  console.log(code)
} catch (error) {
  console.error(error)
}
