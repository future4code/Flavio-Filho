//Exercícios de interpretação de código
//1. Leia o código abaixo:
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// a) Explique o que o código faz. Qual o teste que ele realiza? 
// o código analisa se o resto da divisão da variável número por dois é igual a zero. 
//Se o resto da divisão for igual a zero, ele imprimi uma mensagem, senão ele imprimi outra mensagem. 

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Números pares

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// Números ímpares

//2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
//Para identificar o preço de cada fruta.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// O preço da fruta Maçã é , R$ 2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se 
// retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//5.5 e 5

// 3. Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
//Pede um número para o usuário e guarda na variável numero

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Se o usuário digitar 10, a mensagem será, Esse número passou no teste, se for -10 não terá mensagem.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Sim, o segundo console.log será undefinied, porque ele está forá do escopo da condicional.



//Exercícios de escrita de código

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no
// console se ele/ela pode dirigir (apenas maiores de idade).

// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
//Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."` 

const idadeUsuario = Number(prompt("Digite a sua idade"))
if (idadeUsuario >= 18){
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}


// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
//Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). 
//Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
//Utilize o bloco `if/else`

const turno = prompt("Em qual turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno).").toLowerCase()

if (turno === "m"){
    console.log("Bom dia!")
} else if (turno === "v"){
    console.log("Boa tarde!")
} else if (turno === "n"){
    console.log("Boa noite!")
} 

//3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

const turno2 = prompt("Em qual turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)").toLowerCase()

switch (turno2) {
    case "m":
        console.log("Bom dia!")
        break
    case "v":
        console.log("Boa tarde!")
        break
    case "n":
        console.log("Boa noite!")
        break
}

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

const generoDoFilme = prompt("Qual o gênero de filme vocês irão assistir?").toLowerCase()
const valorDoIngresso = Number(prompt("Qual o valor do ingresso?"))

if ((generoDoFilme === "fantasia") && (valorDoIngresso < 15)){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}


// DESAFIOS

//1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

const generoDoFilme = prompt("Qual o gênero de filme vocês irão assistir?").toLowerCase()
const valorDoIngresso = Number(prompt("Qual o valor do ingresso?"))

if ((generoDoFilme === "fantasia") && (valorDoIngresso < 15)){
    const lanchinho = prompt("Qual lanchinho você vai comprar?")
    console.log("Bom filme!")
    console.log(`Aproveite seu/sua ${lanchinho}`)
} else {
    console.log("Escolha outro filme :(")
}



