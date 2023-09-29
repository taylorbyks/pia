# Tokens

| Token | Descrição | Regex |
|----------|-------------------------------------------------------|----------|
| pila | Define um tipo de dado inteiro | ^pila$ |
| trocado | Define um tipo de dado ponto flutuante de dupla precisão | ^trocado$ |
| naipe | Define um tipo de dado cadeia de caracteres | ^naipe$ |
| creio | Define um tipo de dado booleano | ^creio$ |
| dai | Inicio do programa | ^dai$ |
| vorta | Fim do programa | ^vorta$ |
| pega | Ler de teclado | ^pega$ |
| amostra | Escrever na tela | ^amostra$ |
| sepa | Inicio do condicional do tipo "se" | ^sepa$ |
| senao | Inicio do condicional do tipo "senão" | ^senao$ |
| arrodeia | Inicio do laço de repetição do tipo "para" | ^arrodeia$ |
| ateque | Inicio do laço de repetição do tipo "enquanto" | ^ateque$ |
| assign_operator | Operador de atribuição | ^=$ |
| relational_operator | Operador relacional | ^(\<|\>|==|!=|>=|\<=)$ |
| logical_operator | Operador lógico | ^(&&|\|\|)$ |
| not_operator | Operador de negação | ^!$ |
| arithmetic_operator | Operador aritmético | ^(\+|-)$ |
| multiplier_operator | Operador multiplicador | ^(\*|/)$ |
| ( | Abre parênteses | ^\($ |
| ) | Fecha parênteses | ^\)$ |
| { | Abre chaves | ^\{$ |
| } | Fecha chaves | ^\}$ |
| , | Vírgula | ^,$ |
| ; | Ponto e vírgula | ^;$ |
| int | Número inteiro | ^-?\d+$ |
| float | Número de ponto flutuante | ^-?\d+\.\d+$ |
| bool | Valor booleano | ^(verdadeiro|falso)$ |
| string_literal | Cadeia de caracteres | ^\"([^\"\\\\]*(\\\\.[^\"\\\\]*)*)\"$ |
| id | Identificador | ^[a-zA-Z]\w*$ |
