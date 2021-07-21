//Exercícios de interpretação de código
/* 1°
a. false
b. false
c. false
d. boolean
*/
/* 2°
O problema é que ele queria imprimir um tipo number, mas dessa forma irá imprimir uma string,
 ou seja no console.log, ao invés de acontecer a soma de dois números haverá a concatenação. 
  */
/* 3°
Nesse caso ele deveria mudar o tipo de variável para number. Ficaria assim:

let primeiroNumero = Number(prompt("Digite um numero!")
let segundoNumero = Number(prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) 
*/

// Exercícios de escrita de código
// Questão 1° 

const idade = Number(prompt("Qual a sua idade?"))
const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo ou amiga?"))

const idadeMaior = idade > idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior)

const diferencaIdade = idade - idadeAmigo

console.log(diferencaIdade)

// Questão 2°
const numeroPar = Number(prompt("Digite um número par."))
const restoDivisao = numeroPar % 2 

console.log(restoDivisao) 
//2°c) O resto da divisão é sempre 0. 
//2°d) Se inserir um número impar o resto da divisão é sempre 1.


// Questão 3°
const idadeAnos = Number(prompt("Quantos anos você tem?"))
const idadeMeses = idadeAnos * 12
const idadeDias = idadeAnos * 365
const idadeHoras = idadeAnos * 365 * 24

console.log(idadeMeses) // a) A idade do usuário em meses
console.log(idadeDias) // b) A idade do usuário em dias
console.log(idadeHoras) // c) A idade do usuário em horas


// Questão 4° 
let primeiroNumero = Number(prompt("Digite um número."))
let segundoNumero = Number(prompt("Digite outro número."))

console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero)
console.log("O primeiro numero é divisível pelo segundo?", primeiroNumero % segundoNumero === 0)
console.log("O segundo numero é divisível pelo primeiro?", segundoNumero % primeiroNumero === 0)






