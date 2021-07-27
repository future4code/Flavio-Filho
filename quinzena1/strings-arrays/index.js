//Exercícios de interpretação de código
/*
Questão  1
a. undefinied
b. null
c. 11
d. 3
e. 19
f. 9
*/

/* 
Questão 2
SUBI NUM ÔNIBUS EM MIRROCOS
27 
*/

// Exercícios de escrita de código
/* 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail.
 Em seguida, imprima na tela a seguinte mensagem:

    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

*/
let nomeDoUsuario = prompt("Qual é o seu nome")
let emailDoUsuario = prompt("Digite o seu e-mail.")
let mensagem = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`
console.log(mensagem)

/*
Faça um programa que contenha um array com 5 das suas comidas preferidas,
 armazenado em uma variável. Em seguida, siga os passos:
*/
const comidasFavoritas = ["Acarajé","Macarrão ao vivo","Frutas","Lasanha","Strogonoff"]

//a) Imprima na tela o array completo

console.log(comidasFavoritas)

/*b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ",
 seguida por cada uma das comidas, **uma embaixo da outra**.
 */
console.log("Essas são as minhas comidas preferidas: ")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

/* c) Aqui vai um desafio: pergunte ao usuário uma comida preferida.
 Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
 */
const comidaUsuario = prompt("Qual a sua comida favorita?")
comidasFavoritas.splice(1,1)
comidasFavoritas.push(comidaUsuario)
console.log(comidasFavoritas)


//3. Faça um programa, seguindo os passos:
// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
const listaDeTarefas = []

// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
const tarefa1 = prompt("Digite a tarefa 1")
const tarefa2 = prompt("Digite a tarefa 2")
const tarefa3 = prompt("Digite a tarefa 3")
listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

//c) Imprima o array na tela
console.log(listaDeTarefas)

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2

const tarefaRealizada = Number(prompt("Digite o número da tarefa realizada: 1, 2 ou 3"))

//e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(tarefaRealizada-1,1)

//f) Imprima o array na tela
console.log(listaDeTarefas)