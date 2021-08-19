//Exercícios de interpretação de código

// 1.  Leia o código abaixo
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// a) O que vai ser impresso no console?
//Serão impressos no console todos os valores, índices e o array completo.

// 2. Leia o código abaixo
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

  //a) O que vai ser impresso no console?
  // Serão impressos os nomes do objeto. Amanda Rangel , Laís Petra, Letícia Chijo


// 3. Leia o código abaixo
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

// a) O que vai ser impresso no console?
// Serão impressos todos os apelidos diferentes de "Chijo", Ou seja, Mandi e Laura


//Exercícios de escrita de código

// 1.
const pets = [
  { nome: "Lupin", raca: "Salsicha"},
  { nome: "Polly", raca: "Lhasa Apso"},
  { nome: "Madame", raca: "Poodle"},
  { nome: "Quentinho", raca: "Salsicha"},
  { nome: "Fluffy", raca: "Poodle"},
  { nome: "Caramelo", raca: "Vira-lata"},
] 

//1.a) Crie um novo array que contenha apenas o nome dos doguinhos
const nomesCachorros = pets.map((item) => {
  return item.nome
})
console.log(nomesCachorros)

//1.b) Crie um novo array apenas com os cachorros salsicha
const cachorroSalsicha = pets.filter((salsichas) => {
  return salsichas.raca === "Salsicha"
}
)
console.log(cachorroSalsicha)

//1.c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
//A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
const racaPoodles = pets.filter((poodles) => {
  return poodles.raca === "Poodle"
} ) 
.map((nomes) => { 
  return nomes.nome
})

console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${racaPoodles}`)

// 2.
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//2.a) Crie um novo array que contenha apenas o nome de cada item
const nomeItens = produtos.map((item) => {
  return item.nome
}
)
console.log(nomeItens)

//2.b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const precoDesconto = produtos.map((item, idice, array) => {
  return item.preco - (item.preco * 0.05)
})

const arrayDesconto = [ 
  { nome : nomeItens, preco : precoDesconto }

]
console.log(arrayDesconto)



// 2.c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const categoriaBebidas = produtos.filter((item) => {
  return item.categoria === "Bebidas"
})

console.log(categoriaBebidas)

// 2.d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// - 💡  Dica

//     Para te ajudar, você pode usar o método de stirngs chamado includes() que verifica se os caracteres escolhidos fazem parte da sua string

//     E caso não se lembre como fazer isso, não tenha medo de pesquisar no google!

const objetosYpe = produtos.filter((item) => {
  return item.nome.includes("Ypê")
}
)
console.log(objetosYpe)

// 2.e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

// - 💡  Dica

//     Você pode encadear o uso do map e do filter
