//- **Exercícios de interpretação de código**

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

//     ```jsx
    // let valor = 0
    // for(let i = 0; i < 5; i++) {
    //   valor += i
    // }
    // console.log(valor)
  //  ```
// Esté é um laço de repetição com o for, ele passa pelos números de 0 à 4 fazendo a soma deles, o resultado no console é 10 

//* 2. Leia o código abaixo:

//     ```jsx
//     const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//     for (let numero of lista) {
//       if (numero > 18) {
//             console.log(numero)
//         }
//     }
//     ```

//     a) O que vai ser impresso no console?
// Todos os números do array que forem maiores que 18. (19, 21, 23, 25, 27, 30)

//     b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? 
//Se não, o que poderia ser usado para fazer isso?
// O for ...of... não seria suficiente.

// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

//     ```jsx
//     const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
//     let quantidadeAtual = 0
//     while(quantidadeAtual < quantidadeTotal){
//       let linha = ""
//       for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//         linha += "*"
//       }
//       console.log(linha)
//       quantidadeAtual++
//     }

//     ```
     
// *
// **
// ***
// ****
     



//- **Exercícios de escrita de código**

// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

// - 💡 Dica

//     Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu.
// Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

// c) Por fim, imprima o array com os nomes dos bichinhos no console

// let petQuantidade = Number(prompt("Quantos animais de estimação você tem?"))

//incompleto
// if (petQuantidade === 0){
//     console.log("Que pena! Você pode adotar um pet!")
// } else if (petQuantidade > 0){ 
//     petNomes = ""
//     petNomes = prompt("Digite o(s) nome(s) dele(s)?")
//     for (petNomes)
    
// }


// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. 
//Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

// a) Escreva um programa que **imprime** cada um dos valores do array original.
arrayOriginal = [35, 12, 20, 15, 45]
for (const valoresArray of arrayOriginal){
    console.log (valoresArray)
}

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

arrayOriginal = [35, 12, 20, 15, 45]
for (const valoresArray of arrayOriginal){
    console.log (valoresArray / 10)
}

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

arrayOriginal = [35, 12, 20, 15, 45]
for (const valoresArray of arrayOriginal){
    novoArray = valoresArray 
    if (novoArray % 2 === 0){
        console.log(novoArray)
    }
}

// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma:
// "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.


// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

// - 💡 Dica

//     Você deve criar variáveis para guardar o `valorMaximo` e o `valorMinimo`. Inicialize a variável `valorMaximo` com um valor que não seja maior que qualquer valor do array original e a `valorMinimo` com um valor que não seja menor que qualquer valor do array original.

// - Exemplo de saídas esperadas

//     ```jsx
//     // Este array será usado para exemplificar as respostas de todos os itens
//     const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//     // Resposta item a.
//     80
//     30
//     130
//     40
//     60
//     21
//     70
//     120
//     90
//     103
//     110
//     55

//     // Resposta item b.
//     8
//     3 
//     13
//     4
//     6
//     2.1
//     7 
//     12
//     9
//     10.3
//     11 
//     5.5

//     // Resposta item c.
//     [80, 30, 130, 40, 60, 70, 120, 90, 110] 

//     // Resposta item d.
//     [ 'O elemento do índex 0 é 80',
//       'O elemento do índex 1 é 30',
//       'O elemento do índex 2 é 130',
//       'O elemento do índex 3 é 40',
//       'O elemento do índex 4 é 60',
//       'O elemento do índex 5 é 21',
//       'O elemento do índex 6 é 70',
//       'O elemento do índex 7 é 120',
//       'O elemento do índex 8 é 90',
//       'O elemento do índex 9 é 103',
//       'O elemento do índex 10 é 110',
//       'O elemento do índex 11 é 55' ]

//     // Resposta e.
//     "O maior número é 130 e o menor é 21"
//     ```