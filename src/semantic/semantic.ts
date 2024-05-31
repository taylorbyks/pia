import { ASTNode, SymbolTable } from '../types'

const semanticAnalyzer = (ASTTree: ASTNode): string => {
  const symbolTable: SymbolTable = {}
  const errors: string[] = []

  const checkDeclarationStructure = (node: any) => {
    const children = node.children
    children.forEach(checkNode)
    const [idNode, assignOpNode, vovNode, arithmeticNode, semicolonNode] = children

    if (
      idNode.type === 'id' &&
      assignOpNode.type === 'assignoperator' &&
      vovNode.type === 'VOV' &&
      arithmeticNode.type === 'arithmetic'
    ) {
      const variableType = symbolTable[idNode.value]?.type
      if (!variableType) {
        return
      }

      const vovType = getTypeFromVOV(vovNode)
      if (!vovType) {
        errors.push(`Error: Invalid VOV type for variable ${idNode.value}.`)
        return
      }

      const arithmeticType = getTypeFromArithmetic(arithmeticNode)
      if (vovType !== arithmeticType) {
        errors.push(
          `Error: Type mismatch in arithmetic operation for variable ${idNode.value}. Expected ${vovType}, found ${arithmeticType}.`
        )
      }

      if (variableType !== vovType) {
        errors.push(
          `Error: Type mismatch in assignment to ${idNode.value}. Expected ${variableType}, found ${vovType}.`
        )
      }
    }
  }

  const getTypeFromVOV = (node: any): string | null => {
    const types: { [key: string]: string } = {
      int: 'pila',
      float: 'float',
      string: 'string',
      bool: 'bool',
      char: 'char',
    }

    const child = node.children[0]
    if (child.type === 'id') {
      return symbolTable[child.value]?.type || null
    }
    return types[child.type]
  }

  const getTypeFromArithmetic = (node: any): string | null => {
    const [_, vovNode] = node.children
    return getTypeFromVOV(vovNode)
  }

  const checkNode = (node: ASTNode) => {
    switch (node.type) {
      case 'declrvar':
        const [tipoNode, idNode, ...restNodes] = node.children
        if (symbolTable[idNode.value]) {
          errors.push(`Error: Variable ${idNode.value} already declared.`)
        } else {
          symbolTable[idNode.value] = { type: tipoNode.value }
        }
        restNodes.forEach(checkNode)
        break
      case 'id':
        if (!symbolTable[node.value]) {
          errors.push(`Error: Variable ${node.value} not declared.`)
        }
        break
      case 'declrstrct':
        checkDeclarationStructure(node)
        break
      default:
        if (node.children) {
          node.children.forEach(checkNode)
        }
    }
  }

  checkNode(ASTTree)

  if (errors.length > 0) {
    throw `Rejected ${errors.join('\n')}`
  }

  return 'Accepted'
}

export { semanticAnalyzer }
