# Paraná Intelligent Application (PIA)

A Paraná Intelligent Application (PIA) é uma linguagem amigável ao programador que se baseia na linguagem C, mas com o diferencial de usar gírias paranaenses. Seu nome deriva de uma palavra com origem indígena, muito usada na capital do estado, e que originalmente significava "Coração" mas acabou virando um sinônimo para "menino".

## Recursos

A PIA é uma mescla da linguagem C e gírias paranaenses. Todas as instruções presentes em um código escrito em PIA são lidas da esquerda para direita.  As variáveis podem ser declaradas em qualquer ponto do código, desde que a declaração seja feita antes de serem usadas. A linguagem também conta com duas estruturas de saltos condicionais (sepa-senão e sinaleiro), além de outras duas estruturas de laços de repetição (faz-ateque e arrodeia). As variáveis serão tipadas (pila, trocado, naipe e creio), serão permitidas funções (procedimentos podem ser construídos com funções de retorno vazio).

## Especificação

### Tipos de Dados

Os seguintes tipos de dados estão presentes na linguagem:
| Identificador | Referência na memória | Significado     | Descrição                                     |
|---------------|-----------------------|-----------------|-----------------------------------------------|
| pila | %p | Tipo de dado inteiro | inteiro sinalizado em complemento de dois de 4 bytes. Se o número for negativo, o símbolo de menos “ - ” deverá ser digitado na frente. |
| trocado | %t | Tipo de dado ponto flutuante de dupla precisão | Oito bytes, utilizando o padrão IEEE754 |
| naipe | %n | Tipo de dado cadeia de caracteres | Quatro bytes UTF-8 |
| creio | %b | Tipo de dado booleano | Um byte preenchido com zeros ou ums |

### Operadores lógicos, aritméticos e relacionais

#### Lógicos

Os operadores lógicos têm como entrada dois valores booleanos, com exceção do NOT que é um operador unário, e como saída um valor booleano.
| Operador | Descrição | Exemplo |
|----------|-----------|---------|
| && | Operação AND sobre dois operandos | a && b |
| \|\| | Operação OR sobre dois operandos | a \|\| b |
| ! | Operação NOT sobre um operando | !a |

#### Aritméticos

Os operadores aritméticos funcionam paras os tipos inteiros e ponto flutuante de dupla precisão.
| Operador | Descrição | Exemplo |
|----------|-------------------------------------------------------|---------|
| + | Soma dois operandos | a + b |
| - | Subtrai dois operandos | a - b |
| * | Multiplica dois operandos, da esquerda para a direita | a * b |
| / | Divide dois operandos, da esquerda pelo da direita | a / b |

#### Relacionais

Os operadores relacionais funcionam para os tipos numéricos e booleanos.
| Operador | Descrição | Exemplo |
|----------|----------------------------------------------------------------------------|---------|
| < | Checa se o operando da esquerda é menor que o operando da direita | a < b |
| > | Checa se o operando da esquerda é maior que o operando da direita | a > b |
| == | Checa se o operando da esquerda é igual ao operando da direita | a == b |
| != | Checa se o operando da esquerda é diferente do operando da direita | a != b |
| >= | Checa se o operando da esquerda é maior ou igual ao operando da direita | a >= b |
| <= | Checa se o operando da esquerda é menor ou igual ao operando da direita | a <= b |

### Atribuição

#### Operador: =
Existe apenas um operador de atribuição para variáveis. Consiste em uma operação binária do tipo “a = b”, onde a variável mais à esquerda (a) recebe o valor da variável mais à direita (b), b pode também ter a forma de valor literal, operação matemática ou caractere. As variáveis devem ser do mesmo tipo para que a atribuição seja possível.

### Saltos Condicionais

Dois tipos de saltos condicionais estão presentes na linguagem:

#### sepa – senao

Sintaxe:

```
sepa (condição) {
	instruções
}
senao sepa (condição) {
	instruções
}
senao {
	instruções
}
```

Semântica: Primeiro executa o trecho de instruções para depois validar se as condições são verdadeiras.

### Laços de Repetição

São dois os tipos de laço de repetição que podem ser criados:

#### arrodeia

Sintaxe:

```
arrodeia (operando; condição; operação) {
	instruções
}
```

Semântica: Definimos o operando como primeiro parâmetro, a condição de parada como segundo e a operação que sera realizada ao final do laço

#### ateque

Sintaxe:

```
ateque (condição) {
	instruções
}
```

Semântica: Definimos a condição de parada antes da execução do laço, o que permite a não entrada no laço

### Construção de identificadores
As variaveis são declaradas com a utilização de letras, números e underline. O nome dessas variaveis devem começar com uma letra, insensivel à maiuscula ou minuscula. O nome da variavel tem um tamanho máximo de 255 caracteres
A declaração ocorre com a definição do tipo e, em seguida, o nome. É possivel atrubuir valores para a váriavel após a declaração. Variaveis do mesmo tipo podem ser declaradas na mesma linha, separadas por virgula.

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
| creio | Define um tipo de dado booleano |
| sepa | Inicio do condicional do tipo "se" |
| senao | Inicio do condicional do tipo "senão" |
| arrodeia | Inicio do laço de repetição do tipo "para" |
| ateque | Inicio do laço de repetição do tipo "enquanto" |

### Exemplo de um código escrito em PIA
```
pila dai() {
    pila VEZES, N = 0;
    trocado A;

    amostra ("Digite 5 valores: ");

    arrodeia (VEZES = 0; VEZES<5; VEZES+=1) {
        pega("%t", &A);
        sepa (A>0){
        N = N+1;
        }
    }

    amostra("%p valores positivos\n", N);
    vorta 0;
}
```

## BNF

### Programa
```
F = { <begin> ::= pila dai {<expr> vorta;}
}
```

### Expressões
```
F = { <expr>        ::= <declr_strct> <expr> | vazio
      <declr_strct> ::= <declr_var> | <calcula> | <amostra> | <pega> | <arrodeia> | <ateque> | <faz_ateque> | <sepa> | <vortiada>
}
```

### Declaração de estruturas
#### Variavéis
```
F = { <declr_var> ::= <tipo> <nome_var> <mais_var>;
      <mais_var>  ::= <atribuir> <mais_var'> | vazio
      <mais_var'> ::= , <nome_var> <atribuir> <mais_var'> | vazio
}
```
#### Calcula
```
F = { <calcula> ::= <nome_var><atribuir><op_arit>
}
```
#### Amostra
```
F = { <amostra>      ::= amostra("<str><amostra_var> ;
      <amostra_var>  ::= <teclado><str><amostra_var'> | ")
      <amostra_var'> ::= ", <nome_var>)
}
```
#### Pega
```
F = { <pega> ::= pega("<teclado>", &<nome_var>);
}
```
#### Arrodeia
```
F = { <arrodeia>  ::= arrodeia( <arrodeia'> ; <condição> ; <calcula> ){ <expr> }
      <arrodeia'> ::= <declr_var> | <nome_var> <atribuir>
}
```
#### Ateque
```
F = { <ateque> ::= ateque (<condição>) { <expr> }
}
```
#### Sepa - Senao
```
F = { <sepa>  ::= sepa(<condição>) { <expr> } <sepa'>
      <sepa'> ::= senao<senao>
      <senao> ::= <sepa> | {<expr>}
}
```

### Auxiliares das estruturas
#### Atribuição
```
F = { <atribuir>  ::= <atr> <atribuir'> | vazio
      <atribuir'> ::= <valor> | <Vtrocado>| <str> | <nome_var> | <VOV>
      <atr>       ::= "="
}
```
#### Teclado
```
F = { <teclado>  ::= %<teclado'>
      <teclado'> ::= p | t | b | n
}
```
#### Condição
```
F = { <condição>  ::= op_rel <op_grande>
      <op_grande> ::= op_log op_rel <op_grande> | vazio
}
```

### Operações
```
<VOV> ::= <valor> | <Vtrocado> | <str> | <nome_var>
```
#### Operação Aritmética
```
F = { <op_arit>    ::= <sinal_arit> <VOV> <cont>
      <cont>       ::= <sinal_arit> <VOV> <cont> | vazio
      <sinal_arit> ::= + | - | * | / |
}
```
#### Operação Relacional
```
F = { <op_rel>    -> <VOV> <sinal_rel> <VOV>
<sinal_rel> -> "==" | "!=" | ">" | "<" | ">=" | "<="
}
```
#### Operação Lógica
```
F = { <op_log>    -> <nome_var> <sinal_log> <nome_var>
<sinal_log> -> "||" | "&&" | "!" | "^"
}
```

### Tipos de dados
#### Alfabeto
```
F = { <alfabeto> ::= "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j"
| "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v"
| "w" | "x" | "y" | "z" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H"
| "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T"
| "U" | "V" | "W" | "X" | "Y" | "Z"
}
```
#### Numeral
```
F = { <numeral> ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
}
```
#### Tipos
```
F = { <tipo> ::= pila | trocado | creio | naipe
}
```
#### Nome para variaveis
```
F = { <nome_var> ::= <alfabeto> <str>
}
```
#### Strings
```
F = { <str> ::= <alfabeto> <str> | <numeral> <str> | "_" <str> | vazio
}
```
#### Valor Inteiro
```
F = { <valor> ::= <numeral> <valor> | <numeral>
}
```
#### Valor Real
```
F = { <Vtrocado> ::= <valor> "." <valor> | <valor>
}
```

## Tokens

| Token | Descrição |
|----------|-------------------------------------------------------|
| pila | Define um tipo de dado inteiro |
| trocado | Define um tipo de dado ponto flutuante de dupla precisão |
| naipe | Define um tipo de dado cadeia de caracteres |
| creio | Define um tipo de dado booleano |
| dai | Inicio do programa |
| vorta | Fim do programa |
| pega | Ler de teclado |
| amostra | Escrever na tela |
| sepa | Inicio do condicional do tipo "se" |
| senao | Inicio do condicional do tipo "senão" |
| arrodeia | Inicio do laço de repetição do tipo "para" |
| ateque | Inicio do laço de repetição do tipo "enquanto" |
| assign_operator | Operador de atribuição |
| relational_operator | Operador relacional |
| logical_operator | Operador lógico |
| not_operator | Operador de negação |
| arithmetic_operator | Operador aritmético |
| multiplier_operator | Operador multiplicador |
| ( | Abre parênteses |
| ) | Fecha parênteses |
| { | Abre chaves |
| } | Fecha chaves |
| , | Vírgula |
| ; | Ponto e vírgula |
| int | Número inteiro |
| float | Número de ponto flutuante |
| bool | Valor booleano |
| string_literal | Cadeia de caracteres |
| id | Identificador |
