import { ASTNode, SymbolTable } from '../types'

const semanticAnalyzer = (ASTTree: ASTNode): string => {
  const symbolTable: SymbolTable = {}
  const errors: string[] = []

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
