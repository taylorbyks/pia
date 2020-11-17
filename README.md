# Paraná Intelligent Application (PIA)

A Paraná Intelligent Application (PIA) é uma linguagem amigável ao programador que se baseia na linguagem C, mas com o diferencial de usar gírias paranaenses. Seu nome deriva de uma palavra com origem indígena, muito usada na capital do estado, e que originalmente significava "Coração" mas acabou virando um sinônimo para "menino".

## Recursos

A PIA é uma mescla da linguagem C e gírias paranaenses. Todas as instruções presentes em um código escrito em PIA são lidas da esquerda para direita.  As variáveis podem ser declaradas em qualquer ponto do código, desde que a declaração seja feita antes de serem usadas. A linguagem também conta com duas estruturas de saltos condicionais (sepa-senão e sinaleiro), além de outras duas estruturas de laços de repetição (faz-ateque e arrodeia). As variáveis serão tipadas (pila, trocado, naipe e booleano), serão permitidas funções (procedimentos podem ser construídos com funções de retorno vazio).

## Especificação

### Tipos de Dados

Os seguintes tipos de dados estão presentes na linguagem:
| Identificador | Referência na memória | Significado     | Descrição                                     |
|---------------|-----------------------|-----------------|-----------------------------------------------|
| pila | %p | Tipo de dado inteiro | inteiro sinalizado em complemento de dois de 4 bytes. Se o número for negativo, o símbolo de menos “ - ” deverá ser digitado na frente. |
| trocado | %t | Tipo de dado ponto flutuante de dupla precisão | Oito bytes, utilizando o padrão IEEE754 |
| naipe | %n | Tipo de dado cadeia de caracteres | Quatro bytes UTF-8 |
| booleano | %b | Tipo de dado booleano | Um byte preenchido com zeros ou ums |

### Operadores lógicos, aritméticos e relacionais

#### Lógicos

Os operadores lógicos têm como entrada dois valores booleanos, com exceção do NOT que é um operador unário, e como saída um valor booleano.
| Operador | Descrição | Exemplo |
|----------|-----------|---------|
| && | Operação AND sobre dois operandos | a & b |
| \|\| | Operação OR sobre dois operandos | a \|\| b |
| ! | Operação NOT sobre um operando | !a |
| ^ | Operação XOR sobre dois operandos | a ^ b |

#### Aritméticos

Os operadores aritméticos funcionam paras os tipos inteiros e ponto flutuante de dupla precisão.
| Operador | Descrição | Exemplo |
|----------|-------------------------------------------------------|---------|
| + | Soma dois operandos | a + b |
| - | Subtrai dois operandos | a - b |
| * | Multiplica dois operandos, da esquerda para a direita | a * b |
| / | Divide dois operandos, da esquerda pelo da direita | a / b |
| ** | Eleva o operando da direita ao expoente da esquerda | a **b |

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
senão {
	instruções
}
```

Semântica: Primeiro executa o trecho de instruções para depois validar se as condições são verdadeiras.

#### Sinaleiro

Sintaxe:
```
vortiada (variável condicionada){

sinaleiro caso1:
instrução
pera;

sinaleiro caso2:
instrução

esverdiou:
instrução
pera;

}
```

Semântica: Dado um valor numérico ou caractere, executa determinado bloco. Os blocos são indicados pela expressão “sinaleiro”. É necessário que o valor (ou variável) que será testado esteja envolto em parênteses. Os elementos de caso não necessitam estar.

### Laços de Repetição

São dois os tipos de laço de repetição que podem ser criados:

#### arrodeia

Sintaxe: 

```
arrodeia (operando . condição . operação) {
	instruções
}
```

Semântica: Definimos o operando como primeiro parâmetro, a condição de parada como segundo e a operação que sera realizada ao final do laço

#### ateque, faz_ateque

Sintaxe:

```
ateque (condição){
	instruções
}

faz{
	instruções
}ateque(condição);
```

Semântica: Na primeira opção, define-se a condição de parada antes da execução do laço, oque permite a não entrada no laço. Enquanto na segunda opção são executadas as instruções no mínimo 1 vez, para posteriormente verificar a condição de repetição do laço.

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
| nafaixa| Função sem retorno |
| pega | Ler de teclado |
| amostra | Escrever na tela |
| pila | Define um tipo de dado inteiro |
| trocado | Define um tipo de dado ponto flutuante de dupla precisão |
| naipe | Define um tipo de dado cadeia de caracteres |
| booleano | Define um tipo de dado booleano |
| sepa | Inicio do condicional do tipo "se" |
| senao | Inicio do condicional do tipo "senão" |
| arrodeia | Inicio do laço de repetição do tipo "para" |
| ateque | Inicio do laço de repetição do tipo "enquanto" |
| faz_ateque | Laço de repetição do tipo "faça_enquanto" |
| vortiada | Inicio do condicional do tipo "caso" |
| sinaleiro | Identificador de caso |
| pera | Fim da condicional "caso" |

### Exemplo de um código escrito em PIA
```
pila dai()
{
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
| <arrodeia> | <ateque> | <faz_ateque> | <sepa> | <vortiada>
```

### Declaração de estruturas
```
<declr_var> -> <tipo> <nome_var> <mais_var>; 
| <tipo> <nome_var> <mais_var> <atribuir>;
<mais_var>  -> ", " <nome_var> <mais_var> | vazio
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
<sinal_arit> -> + | - | * | / | **
```
```
<op_rel>    -> <VOV> <sinal_rel> <VOV>
<sinal_rel> -> "==" | "!=" | ">" | "<" | ">=" | "<="
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
<Vtrocado> -> <valor> "." <valor> | <valor>
```
