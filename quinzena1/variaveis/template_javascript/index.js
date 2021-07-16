/* Exercícios de interpretação de código
 Questão 1
 5, 10

 Questão 2
 10, 10, 10

 Questão 3
 let horasTrabalhoDia = prompt("Quantas horas você trabalha por dia?")
 let salarioDia = prompt("Quanto você recebe por dia?")
 alert(`Voce recebe ${t/p} por hora`)

*/

// Exercício de escrita de código
/*
// Questão 1
/*
let nome  
let idade 
console.log(typeof nome)
console.log(typeof idade)
*/
//foi impresso o tipo undefined porque o valor da variável ainda não foi declarado

let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é a sua idade?")
console.log(typeof nome)
console.log(typeof idade)
// agora que os valores das variáveis foram declarados, elas são do tipo string
console.log("Olá", nome, ", você tem", idade, "anos.")


// Questão 2
const gostaMusica = "Você gosta de música?"
const gostaViajar = "Você gosta de viajar?"
const gostaProgramar = "Você gosta de programação?"
const musica = "Sim"
const viajar = "Não"
const programar = "Sim"
console.log("-", gostaMusica, musica, "-", gostaViajar, viajar, "-", gostaProgramar, programar)

// Questão 3 
let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
let c = null
c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10




