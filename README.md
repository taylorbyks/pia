# PIA

Paraná é uma linguagem de programação baseada em gírias paranaenses.

## Recursos

## Especificação

### Tipos de Dados

Os seguintes tipos de dados estão presentes na linguagem:
| Identificador | Significado     | Descrição                                     |
|---------------|-----------------|-----------------------------------------------|
| pila | Tipo de dado inteiro | inteiro sinalizado em complemento de dois de 4 bytes. Se o número for negativo, o símbolo de menos “ - ” deverá ser digitado na frente. |  
| trocado | Tipo de dado ponto flutuante de dupla precisão | Oito bytes, utilizando o padrão IEEE754 |  
| naipe | Tipo de dado cadeia de caracteres | Quatro bytes UTF-8 |
| booleano | Tipo de dado booleano | Um byte preenchido com zeros ou uns |

### Operadores lógicos, aritméticos e relacionais

#### Lógicos

Os operadores lógicos têm como entrada dois valores booleanos, com exceção do NOT que é um operador unário, e como saída um valor booleano.
| Operador | Descrição | Exemplo |
|----------|-----------------------------------|---------|
| & | Operação AND sobre dois operandos | a & b |  
| \|\| | Operação OR sobre dois operandos | a | b |  
| ~ | Operação NOT sobre um operando | ~a |
| ^ | Operação XOR sobre dois operandos | a ^ b |

#### Aritméticos

Os operadores aritméticos funcionam paras os tipos inteiros e ponto flutuante de dupla precisão.
| Operador | Descrição | Exemplo |
|----------|-------------------------------------------------------|---------|
| + | Soma dois operandos | a + b |  
| - | Subtrai dois operandos | a - b |  
| _ | Multiplica dois operandos, da esquerda para a direita | a _ b |
| / | Divide dois operandos, da esquerda para a direita | a / b |

#### Relacionais

Os operadores relacionais funcionam para os tipos numéricos e booleanos.
| Operador | Descrição | Exemplo |
|----------|----------------------------------------------------------------------------|---------|
| < | Checa se o operando da esquerda é menor que o operando da direita | a < b |  
| > | Checa se o operando da esquerda é maior que o operando da direita | a > b |  
| = | Checa se o operando da esquerda é igual ao operando da direita | a = b |
| != | Checa se o operando da esquerda é diferente do operando da direita | a != b |
| >= | Checa se o operando da esquerda é maior ou igual que o operando da direita | a >= b |
| <= | Checa se o operando da esquerda é menor ou igual que o operando da direita | a <= b |

### Atribuição

#### Operador: = 
Existe apenas um operador de atribuição para variáveis. Consiste em uma operação binária do tipo “a = b”, onde a variável mais à esquerda (a) recebe o valor da variável mais à direita (b), b pode também ter a forma de valor literal, operação matemática ou caractere. As variáveis devem ser do mesmo tipo para que a atribuição seja possível.

### Saltos Condicionais

Dois tipos de saltos condicionais estão presentes na linguagem

#### sepa – senao

Sintaxe:

```
sepa (condição) {
	instruções
}
senão {
	instruções
}
```

Semântica:
Primeiro executa o trecho de instruções para depois validar se as condições são verdadeiras.

#### arrodeia

Sintaxe:

```
arrodeia (operando . condição . operação) {
	instruções
}
```

Semântica:


#### Sinaleiro

Sintaxe:
```
vortiada (condição)

sinaleiro caso1:
instrução
pera()

sinaleiro caso2:
instrução
pera()

esverdiou:
instrução
pera()
```

semântica: Dado um valor numérico ou caractere, executa determinado bloco. Os blocos são indicados pela expressão “sinaleiro”. É necessário que o valor (ou variável) que será testado esteja envolto em parênteses. Os elementos de caso não necessitam estar.

## Especificações
### Construção de identificadores
As variaveis são declaradas com a utilização de letras, números e underline. O nome dessas variaveis devem começar com um letra, sensivel à maiuscula e minuscula. O nome da variavel tem um tamanho máximo de 255 caracteres
A declaração ocorre com a definiçaõ do tipo e, em seguida, o nome. É possivel atrubuir valores para a váriavel após a declaração. Variaveis do mesmo tipo podem ser declaradas na mesma linha, separadas por virgula.

### Estrutura geral do programa
Para a execução de um código, é necessário apenas um bloco, delimitado pelas chaves que fecham o main (pila dai). A declaração das variáveis podem ser feitas em qualquer parte do bloco, desde que seja feita antes do uso da variável. Cada instrução deve ser finalizada com “ ; ”.

### Palavras reservadas
| Palavra | Significado     |
|---------|-----------------|
| dai | Inicio do programa |
| vorta | Fim do programa |
| pega | Ler de teclado |
| amostra | Escrever na tela | 
| pila | Define um tipo de dado inteiro |  
| trocado | Define um tipo de dado ponto flutuante de dupla precisão |
| naipe | Define um tipo de dado cadeia de caracteres |
| booleano | Define um tipo de dado booleano |
| sepa | Inicio do condicional do tipo "se" |
| senao | Inicio do condicional do tipo "senão" |
| rodea | Inicio do laço de repetição do tipo "para" |
| ateque | Inicio do laço de repetição do tipo "enquanto" |
| vortiada | Inicio do condicional do tipo "caso" |
| sinaleiro | Identificador de caso |
| pera | Fim da condicional "caso" |

## EBNF
### Programa
```
<begin>       -> dai <função> {<expr> vorta;}
<função>      -> (<tipo> | vazio)
<resenha>     -> "//" <str>
```

### Expressões
```
<expr>        -> <declr_strct> <expr> | vazio
<declr_strct> -> <declr_var> | <calcula> | <amostra> | <pega> 
| <arrodeia> | <ateque> | <faz_ateque> | <sepa> | <vortiada> | <posar>
```

### Declaração de estruturas
```
<declr_var> -> <tipo> <nome_var> <mais_var>; 
| <tipo> <nome_var> <mais_var> <atribuir>;
<mais_var>  -> <,> <nome_var> <mais_var> | vazio
```
```
<calcula> -> <nome_var> <mais_var> <atr> <op_arit> ; 
| <nome_var> <sinal_arit> <atr> <VOV> ;
```
```
<amostra> -> amostra("<str>"); | amostra("<str> <teclado> <str>", <nome_var>);
```
```
<pega> -> pega ( "<teclado>", &<nome_var>);
```
```
<arrodeia> -> arrodeia( <declr_var> ; <condição> ; <calcula> ){ <expr> } 
| arrodeia( <nome_var> <atribuir> ; <condição> ; <calcula> ){ <expr> }  
| arrodeia( <nome_var> ; <condição> ; <calcula> ){ <expr> } 
```
```
<ateque> -> ateque (<condição>) { <expr> }
```
```
<faz_ateque> -> faz{ <expr> }ateque( <condição> );
```
```
<sepa> -> sepa(<condição>) { <expr> } 
| sepa(<condição>) { <expr> } senao <sepa> 
| sepa(<condição>) { <expr> } senao { <expr> }
```
```
<vortiada>  -> vortiada( <nome_var> ) { <sinaleiro> <esverdeou> }
<sinaleiro> -> sinaleiro <str> : <expr> <sinaleiro> 
| sinaleiro <str> : <expr> pera; <sinaleiro> | vazio
<esverdeou> -> esverdeou: <expr> | vazio
```

### Auxiliares das estruturas
```
<atribuir> -> <atr> <valor> | <atr> <Vtrocado> 
| <atr> <str> | <atr> <nome_var>
<atr>      -> "="
```
```
<teclado> -> "%p" | "%t" | "%b" | "%n"
```
```
<condição>  -> op_rel <op_grande>
<op_grande> -> op_log op_rel <op_grande> | vazio
```

### Operações
```
<VOV> -> <valor> | <Vtrocado> | <str> | <nome_var>
```
```
<op_arit>    -> <VOV> <sinal_arit> <VOV> <cont> 
| <VOV> <sinal_arit> <sinal_arit>
<cont>       -> <sinal_arit> <VOV> <cont> | vazio
<sinal_arit> -> + | - | * | /
```
```
<op_rel>    -> <VOV> <sinal_rel> <VOV>
<sinal_rel> -> "==" | ">" | "<" | ">=" | "<="
```
```
<op_log>    -> <nome_var> <sinal_log> <nome_var>
<sinal_log> -> "||" | "&&" | "!" | "^"
```

### Tipos de dados
```
<alfabeto> -> "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" 
| "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" 
| "w" | "x" | "y" | "z" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" 
| "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T"
| "U" | "V" | "W" | "X" | "Y" | "Z"
```
```
<numeral> -> "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
```
```
<tipo> -> pila | trocado | booleano | naipe
```
```
<nome_var> -> <alfabeto> <str>
```
```
<str> -> <alfabeto> <str> | <numeral> <str> | "_" <str> | vazio
```
```
<valor> -> <numeral> <valor> | <numeral>
```
```
<Vtrocado> -> <numeral> <Vtrocado> | <numeral> "." <Vtrocado> | <numeral>
```
