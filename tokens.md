# Tokens

| Token | Descrição | Regex |
|----------|-------------------------------------------------------|----------|
| pila | Tipo de dado inteiro | `pila` |
| trocado | Tipo de dado ponto flutuante de dupla precisão | `trocado` |
| naipe | Tipo de dado cadeia de caracteres | `naipe` |
| creio | Tipo de dado booleano | `creio` |
| op_log | "&&" "\|\|" "!" | `&&|\|\||!|\^` |
| op_arit | "+" "-" "*" "/" | `\+|-|\*|/` |
| op_rel | "<"  ">"  "==" "!=" ">=" "<=" | <|>|==|!=|>=|<= |
| dai | Inicio do programa | `dai` |
| vorta | Fim do programa | `vorta` |
| pega | Ler de teclado | `pega` |
| amostra | Escrever na tela | `amostra` |
| sepa | Inicio do condicional do tipo "se" | `sepa` |
| senao | Inicio do condicional do tipo "senão" | `senao` |
| arrodeia | Inicio do laço de repetição do tipo "para" | `arrodeia` |
| ateque | Inicio do laço de repetição do tipo "enquanto" | `ateque` |
| id | Qualquer nome de variável | `[a-zA-Z_]\w*` |
| int | Número inteiro | `-?\d+` |
| float | Número inteiro | `-?\d+\.\d+` |
| bool | Booleano | ` verdadeiro|falso ` |
| char | Caractere | `'(\\.|[^\\'])'` |
