// Exercícios de interpretação de código
/*1. Leia o código abaixo

    ```jsx
    function minhaFuncao(variavel) {
    	return variavel * 5
    }

    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))
    ```

    a) O que vai ser impresso no console?
    10
    50

    b) O que aconteceria se retirasse os dois `console.log` e 
    simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`?
    O que apareceria no console?
    A função seria invocada, mas não apareceria nada no console
*/
/* 2. Leia o código abaixo

    ```jsx
    let textoDoUsuario = prompt("Insira um texto");

    const outraFuncao = function(texto) {
    	return texto.toLowerCase().includes("cenoura")
    }

    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)
    ```

    a. Explique o que essa função faz e qual é sua utilidade
    Esta função coloca o valor da variável texto em letras minúsculas e 
    procura a palavra cenoura na nesta mesma string.

    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura`
         ii.  `CENOURA é bom pra vista`
         iii. `Cenouras crescem na terra`

    i. eu gosto de cenoura 
    True
    ii. cenoura é bom pra vista 
    True
    iii. cenouras crescem na terra 
    False
*/
//Exercícios de escrita de código
//1. Escreva as funções explicadas abaixo:

/*  a) A função não deve receber nenhum parâmetro e deve imprimir 
    uma mensagem falando algumas informações sobre você, como: 

    ```
    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    ```

    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você.
    Lembrando que a função não possui entradas, apenas imprime essa mensagem.
    */

    function mensagem() {
        console.log("Eu sou Flávio, tenho 36 anos, moro na Bahia e sou professor.")
    }
    mensagem()

    /*

    1. b)  Agora escreva uma função que receba 4 parâmetros que correspondem
     às informações de uma pessoa: o nome (`string`), a idade (`number`), 
     a cidade (`string`) e uma profissão (`string`).
     Ela deve retornar uma `string` que unifique todas as informações da
      pessoa em uma só mensagem com o template:

    ```
    Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
    ```

    - Exemplo

        Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:

        `"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."`
*/

function perfilPessoal(nome, idade, cidade, profissão) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`)
}

perfilPessoal("Flávio", 36, "Saj", "Professor")

//2. Escreva as funções explicadas abaixo:

/* a) Escreva uma função que receba 2 números como parâmetros, e,
dentro da função, faça a soma das duas entradas e retorne o resultado. 
Invoque a função e imprima no console o resultado. */
function soma(numero1, numero2) {
    const resultado = numero1 + numero2
    return resultado
}
console.log(soma(2, 3))

/*b) Faça uma função que recebe 2 números e retorne um booleano que informa
 se o primeiro número é **maior ou igual** ao segundo.   */
function numeroMaiorIgual(numero1, numero2) {
    const resultadoBooleano = numero1 >= numero2
    return resultadoBooleano
}

/* c) Escreva uma função que receba um número e devolva
 um booleano indicando se ele é par ou não */

function numeroPar(numero) {
    const booleano = (numero % 2) === 0
    return booleano
}

/*d) Faça uma função que recebe uma mensagem (`string`) como parâmetro 
e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas. */

function mensagem2(string) {
    console.log(string.length, string.toUpperCase())
}

/*
3. Crie uma função para cada uma das operações básicas
 (soma, subtração, multiplicação e divisão). Em seguida, 
 peça para o usuário inserir dois números e 
 chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.
  Por fim, mostre no console o resultado das operações:

    ```
    Números inseridos: 30 e 3
    Soma: 33
    Diferença: 27
    Multiplicação: 90
    Divisão: 10
    ```
*/

function somar(num1, num2) {
    const resultado1 = num1 + num2
    return resultado1
}

function subtrair(num1, num2) {
    const resultado2 = num1 - num2
    return resultado2
}

function multiplicar(num1, num2) {
    const resultado3 = num1 * num2
    return resultado3
}

function dividir(num1, num2) {
    const resultado4 = num1 / num2
    return resultado4
}

const userNum1 = Number(prompt("Digite um número"))
const userNum2 = Number(prompt("Digite outro número"))

console.log(somar(userNum1, userNum2), subtrair(userNum1, userNum2), multiplicar(userNum1, userNum2), dividir(userNum1, userNum2))