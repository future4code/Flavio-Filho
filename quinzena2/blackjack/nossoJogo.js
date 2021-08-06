/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo de Blackjack!")
let confirmaInicioJogo
const carta1Usuario = comprarCarta()
const carta2Usuario = comprarCarta()
const carta1Computador = comprarCarta()
const carta2Computador = comprarCarta()


if(confirmaInicioJogo = confirm("Quer iniciar uma nova rodada?")){
   console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação ${carta1Usuario.valor + carta2Usuario.valor}`)
   console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - pontuação ${carta1Computador.valor + carta2Computador.valor}`)  
} else {
   console.log("O jogo acabou.")
}

if((confirmaInicioJogo === true) && (carta1Usuario.valor + carta2Usuario.valor) === (carta1Computador.valor + carta2Computador.valor)){
   console.log("Empate!")
} else if ((confirmaInicioJogo === true) && (carta1Usuario.valor + carta2Usuario.valor) > (carta1Computador.valor + carta2Computador.valor)){
   console.log("O usuário ganhou!")
} else if ((confirmaInicioJogo === true) && (carta1Usuario.valor + carta2Usuario.valor) < (carta1Computador.valor + carta2Computador.valor)){
   console.log("O computador ganhou!")
}

