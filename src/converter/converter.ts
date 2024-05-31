import { ASTNode, SymbolTable } from '../types'

const types: { [key: string]: string } = {
  pila: 'i32',
  trocado: 'f64',
  naipe: 'str',
  creio: 'bool',
}

const convertToETAC = (ASTTree: ASTNode): string => {
  let temporaryCounter = 0
  let labelCounter = 0
  const code: string[] = []
  const symbolTable: SymbolTable = {}

  const newTemporary = () => {
    return `t${temporaryCounter++}`
  }

  const newLabel = () => {
    return `L${labelCounter++}`
  }

  const generateRelationalCode = (node: ASTNode) => {
    const leftOperand = node.children[0].children[0].value
    const operator = node.children[1].value
    const rightOperand = node.children[2].children[0].value
    return `${leftOperand} ${operator} ${rightOperand}`
  }

  const generateCode = (node: ASTNode) => {
    if (!node) return

    switch (node.type) {
      case 'S':
      case 'expr':
      case 'declrstrct':
        if (node.value == 'id assignoperator VOV arithmetic ;') {
          const varName = node.children[0].value
          const leftOperand = node.children[2].children[0].value
          const operator = node.children[3].children[0].value
          const rightOperand = node.children[3].children[1].children[0].value

          code.push(`${varName}: ${symbolTable[varName].type} = ${leftOperand} ${operator} ${rightOperand}`)
          if (node.children[3].children[2]) {
            const tempVar = newTemporary()
            const operator = node.children[3].children[2].children[0].value
            const rightOperand = node.children[3].children[2].children[1].children[0].value
            code.push(`${tempVar}: ${symbolTable[varName].type} = ${rightOperand}`)
            code.push(`${varName}: ${symbolTable[varName].type} = ${leftOperand} ${operator} ${tempVar}`)
          }
          break
        }

        node.children.forEach((child) => generateCode(child))
        break

      case 'declrvar': {
        const type = node.children[0].value

        const vars = node.children.slice(1)
        vars.forEach((variable) => {
          if (variable.type === 'id') {
            const varName = variable.value
            const tempVar = newTemporary()
            code.push(`${tempVar}: ${types[type]} = 0`)
            code.push(`${varName}: ${types[type]} = ${tempVar}`)
            symbolTable[varName] = { type: types[type] }
          } else if (variable.type === 'atribuir') {
            const varName = variable.children[0].value
            const value = variable.children[1].children[0].value
            const tempVar = newTemporary()
            code.push(`${tempVar}: ${types[type]} = ${value}`)
            code.push(`${varName}: ${types[type]} = ${tempVar}`)
            symbolTable[varName] = { type: types[type] }
          } else {
            generateCode(variable)
          }
        })
        break
      }

      case "arrodeia'": {
        const initVar = node.children[2].children[0].value
        const initValue = node.children[2].children[1].children[1].children[0].value
        const condition = node.children[4].children[0]

        const body = node.children[7]

        const startLabel = newLabel()
        const endLabel = newLabel()

        const tempVar = newTemporary()
        code.push(`${tempVar}: i32 = ${initValue}`)
        code.push(`${initVar}: i32 = ${tempVar}`)
        code.push(`${startLabel}:`)

        const conditionCode = generateRelationalCode(condition)
        code.push(`if ${conditionCode} goto ${endLabel}`)

        generateCode(body)

        code.push(`goto ${startLabel}`)
        code.push(`${endLabel}:`)
        break
      }

      case "amostra'": {
        const stringLiteralNode = node.children.find((child) => child.type === 'amostravar')!.children[0]
        const stringLiteral = stringLiteralNode ? stringLiteralNode.value : ''
        code.push(`call write_string(${stringLiteral})`)
        break
      }

      case 'vorta': {
        break
      }

      default:
    }
  }

  generateCode(ASTTree)
  return code.join('\n')
}

export { convertToETAC }
