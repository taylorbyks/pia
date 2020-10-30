# PIA

Paraná é uma linguagem de programação baseada em gírias paranaenses. 
## Recursos

## Especificação
### Tipos de Dados
Os seguintes tipos de dados estão presentes na linguagem:
| Identificador | Significado | Descrição |
|---------------|------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| pila          | Tipo de dado inteiro                           | inteiro sinalizado em complemento de dois de 4 bytes. Se o número for negativo, o símbolo de menos “ - ” deverá ser digitado na frente. |  
| trocado       | Tipo de dado ponto flutuante de dupla precisão | Oito bytes, utilizando o padrão IEEE754                                                                                                      |  
| naipe         | Tipo de dado cadeia de caracteres              | Quatro bytes UTF-8                                                                                                                          |
| booleano         | Tipo de dado booleano                       | Um byte preenchido com zeros ou uns                                                                                                          | 

### Operadores lógicos, aritméticos e relacionais
#### Lógicos
Os operadores lógicos têm como entrada dois valores booleanos, com exceção do NOT que é um operador unário, e como saída um valor booleano.
| Operador | Descrição                         | Exemplo |
|----------|-----------------------------------|---------|
| &        | Operação AND sobre dois operandos | a & b   |  
| \|\|     | Operação OR sobre dois operandos  | a | b   |  
| ~        | Operação NOT sobre um operando    | ~a      |
| ^        | Operação XOR sobre dois operandos | a ^ b   | 

#### Aritméticos
Os operadores aritméticos funcionam paras os tipos inteiros e ponto flutuante de dupla precisão.
| Operador | Descrição                                             | Exemplo |
|----------|-------------------------------------------------------|---------|
| +        | Soma dois operandos                                   | a + b   |  
| -        | Subtrai dois operandos                                | a - b   |  
| *        | Multiplica dois operandos, da esquerda para a direita | a * b   |
| /        | Divide dois operandos, da esquerda para a direita     | a / b   | 

#### Relacionais
Os operadores relacionais funcionam para os tipos numéricos e booleanos.
| Operador | Descrição                                                                  | Exemplo |
|----------|----------------------------------------------------------------------------|---------|
| <        | Checa se o operando da esquerda é menor que o operando da direita          | a < b   |  
| >        | Checa se o operando da esquerda é maior que o operando da direita          | a > b   |  
| =        | Checa se o operando da esquerda é igual ao operando da direita             | a = b   |
| !=       | Checa se o operando da esquerda é diferente do operando da direita         | a != b  | 
| >=       | Checa se o operando da esquerda é maior ou igual que o operando da direita | a >= b  | 
| <=       | Checa se o operando da esquerda é menor ou igual que o operando da direita | a <= b  |

### Atribuição
#### Saltos Condicionais
Dois tipos de saltos condicionais estão presentes na linguagem
##### sepa – senao
Sintaxe:
```
sepa (condição) {
	instruções
}
senão {
	instruções
}
```

