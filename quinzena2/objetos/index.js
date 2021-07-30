//Exercícios de interpretação de código
/*1.  Leia o código abaixo

    ```jsx
    const filme = {
    	nome: "Auto da Compadecida", 
    	ano: 2000, 
    	elenco: [
    		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    		"Virginia Cavendish"
    		], 
    	transmissoesHoje: [
    		{canal: "Telecine", horario: "21h"}, 
    		{canal: "Canal Brasil", horario: "19h"}, 
    		{canal: "Globo", horario: "14h"}
    		]
    }

    console.log(filme.elenco[0])
    console.log(filme.elenco[filme.elenco.length - 1])
    console.log(filme.transmissoesHoje[2])
    ```

    a) O que vai ser impresso no console?*/
    //Matheus Nachtergaele
    //Virginia Cavendish
    //Canal Brasil   19h

    
    /*
    2. Leia o código abaixo

    ```jsx
    const cachorro = {
    	nome: "Juca", 
    	idade: 3, 
    	raca: "SRD"
    }

    const gato = {...cachorro, nome: "Juba"}

    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)
    ```
*/
//a) O que vai ser impresso no console?
//nome: "Juca", idade: 3, raca: "SRD"
//nome: "Juba", idade: 3, raca: "SRD"
//nome: "Jubo", idade: 3, raca: "SRD"

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//Faz o spread, copia as informações do objeto antigo para um novo.

/*
3. Leia o código abaixo

    ```jsx
    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
    }

    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }

    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))
    ```
*/
//a) O que vai ser impresso no console?
// false
//undefined

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// A função retornou o valor do objeto e uma de suas propriedades. 




//Exercícios de escrita de código

// 1.1. Resolva os passos a seguir: 

// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e 
//apelidos (um array que sempre terá exatamente **três apelidos**).
// Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 

//     // Exemplo de entrada
//     const pessoa = {
//        nome: "Amanda", 
//        apelidos: ["Amandinha", "Mandinha", "Mandi"]
//     }

//     // Exemplo de saída
//     "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

// - 💡  Dica

//  Não se esqueça de chamar a função passando o objeto que você criou como argumento,
// senão seu código não será executado!

const nomeApelidos = {
  nome: "Gabriel",
  apelidos: ["Gabi", "Biel", "Gabri"]
}

function mensagem (imprimiNome) {
  console.log(`Eu sou ${imprimiNome.nome}, mas pode me chamar de: ${imprimiNome.apelidos[0]}, ${imprimiNome.apelidos[1]} ou ${imprimiNome.apelidos[2]}`)
}

mensagem(nomeApelidos)


//  b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, 
//mas com uma nova lista de três apelidos. 
//Depois, chame a função feita no item anterior passando como argumento o novo objeto

const novoNomeApelidos = {
  ...nomeApelidos,
  apelidos: ["Gabigol", "GabrielJesus", "El"],
}

mensagem(novoNomeApelidos)


// 2. Resolva os passos a seguir: 

//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
const objeto1 = {
  nome: "Flavio",
  idade: 36,
  profissao: "Professor"  
}

const objeto2 = {
  nome: "DevFlavio",
  idade: 36,
  profissao: "Desenvolvedor"
}

//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`
//     - Exemplo

//         ```jsx
//         const pessoa = {
//         	nome: "Bruno", 
//           idade: 23, 
//         	profissao: "Instrutor"
//         }

//         minhaFuncao(pessoa)

//         // Retorno: ["Bruno", 5, 23, "Instrutor", 9]
//         ```

function retornaArray(objeto) {
  const valorNome = objeto.nome 
  const tamanhoNome = objeto.nome.length
  const valorIdade = objeto.idade
  const valorProfissao = objeto.profissao
  const tamanhoProfissao = objeto.profissao.length
  console.log([valorNome, tamanhoNome, valorIdade, valorProfissao, tamanhoProfissao])
  
}

retornaArray(objeto1)
retornaArray(objeto2)


// 3. Resolva os passos a seguir: 

//  a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

const carrinho = []

//  b) Crie três novos objetos que representem frutas de um sacolão. 
//Eles devem ter as seguintes propriedades: nome (`string`) e
// disponibilidade (`boolean` - devem começar como `true`)

const frutas1 = {
  nome: "Uva",
  disponibilidade: true
}

const frutas2 = {
  nome: "Jaca",
  disponibilidade: true
}

const frutas3 = {
  nome: "Pinha",
  disponibilidade: true
}

//  c) Crie uma função que **receba** um objeto fruta por **parâmetro** e 
//coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 

//     - 💡  Dica

//         Aqui você deve usar o método **push()**

function inputFruta(fruta){
 const carrinhoArray = carrinho.push(fruta)
}
inputFruta(frutas1)
inputFruta(frutas2)
inputFruta(frutas3)

//  d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 
console.log(carrinho)
