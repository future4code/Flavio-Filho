// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertido = []
  for(i = array.length - 1; i >= 0; i--) {
     arrayInvertido.push(array[i])
  }
  return arrayInvertido;
    
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let arrayNumerosPares = array.filter((item) => {
    if(item % 2 === 0){
      return true
    }
    return false
  }) 
  let paresAoQuadrado = arrayNumerosPares.map((item) => {
    return item**2
  })
  return paresAoQuadrado
 
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let numerosPares = []

  for(let valor of array){
    if(valor % 2 === 0){
      numerosPares.push(valor)
    }
  }
  return numerosPares

}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = []
    for(let i = 0; i < array.length; i++){
  
    if(array[i] > maiorNumero){
        maiorNumero = array[i]
    }
  }
  return maiorNumero
}


// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
  
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const respostas = [false, false, true, true, true]
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const nNumerosPares = []
  for(let i = 0; nNumerosPares.length < n; i++){
    if(i % 2 === 0){
      nNumerosPares.push(i)
    }
  }
  return nNumerosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if((a !== b) && (a !== c) && (b !== c)){
  return 'Escaleno'
  } else if((a === b) && (a === c) && (b === c)){
  return 'Equilátero'
  } else if(((a === b) !== c) || ((a === c) !== b) || ((b === c) !== a))
  return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maiorNumero
  let menorNumero
  let maiorDivisivelPorMenor
  let diferenca 

  if(num1 > num2){
    maiorNumero = num1
    menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  }

  maiorDivisivelPorMenor = maiorNumero % menorNumero === 0

  diferenca = maiorNumero - menorNumero

  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
  }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let menor = Infinity
  let maior = -Infinity
  let segundoMenor = Infinity
  let segundoMaior = -Infinity
  let novoArray = []

  for (let i of array) {
    if (i < menor) {
      menor = i
    }
    if (i > maior) {
      maior = i
    }
  }

  for (let i of array) {
    if (i < segundoMenor && i !== menor) {
      segundoMenor = i
    }
    if (i > segundoMaior && i !== maior) {
      segundoMaior = i
    }
  }
  novoArray.push(segundoMaior)
  novoArray.push(segundoMenor)

  return novoArray

}

// EXERCÍCIO 11
function ordenaArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let arrayTemp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = arrayTemp
      }
    }
  }
  return array

}

// EXERCÍCIO 12
function filmeFavorito() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }

  let atoresConcat = ""
  for (let i = 0;i < filme.atores.length;i++) {
    if (i === filme.atores.length - 1) {
      atoresConcat += filme.atores[i]
    } else {
      atoresConcat += filme.atores[i] + ", "
    }
  }

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresConcat}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
 const retangulo = {
   largura: lado1,
   altura: lado2,
   perimetro: 2 * (lado1 + lado2),
   area: lado1 * lado2
 }

 return retangulo

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  
  return {
    ...pessoa,
    nome: 'ANÔNIMO'
  }

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  novoArray = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade >= 18
  })
  return novoArray

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  novoArray = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade < 18
  }
  )
  return novoArray

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const novoArray = array.map((num) => {
    return num * 2
  })
  return novoArray

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const novoArray = array.map((num) => {
    return (num * 2).toString()
  })
  return novoArray

}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const novoArray = array.map((num) => {
    if (num % 2 === 0) {
      return `${num} é par`
    } else {
      return `${num} é ímpar`
    }
  })

  return novoArray

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasAutorizadas = []
  for (const pessoa of pessoas) {
    if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
      pessoasAutorizadas.push(pessoa)
    }
  }
  return pessoasAutorizadas

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = []
  for (const pessoa of pessoas) {
    if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
      pessoasNaoAutorizadas.push(pessoa)
    }
  }
  return pessoasNaoAutorizadas

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  for (let i = 0;i < consultasNome.length;i++) {
    for (let j = 0;j < consultasNome.length - i - 1;j++) {
      if (consultasNome[j].nome > consultasNome[j + 1].nome) {
        const temp = consultasNome[j]
        consultasNome[j] = consultasNome[j + 1]
        consultasNome[j + 1] = temp
      }
    }
  }
  return consultasNome

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  for (let i = 0;i < consultasData.length;i++) {
    for (let j = 0;j < consultasData.length - i - 1;j++) {

      const arrayData1 = consultasData[j].dataDaConsulta.split('/')
      const dia1 = Number(arrayData1[0])
      const mes1 = Number(arrayData1[1])
      const ano1 = Number(arrayData1[2])

      const arrayData2 = consultasData[j + 1].dataDaConsulta.split('/')
      const dia2 = Number(arrayData2[0])
      const mes2 = Number(arrayData2[1])
      const ano2 = Number(arrayData2[2])

      const data1 = new Date(ano1, mes1 - 1, dia1).getTime()
      const data2 = new Date(ano2, mes2 - 1, dia2).getTime()

      if (data1 > data2) {
        const temp = consultasData[j]
        consultasData[j] = consultasData[j + 1]
        consultasData[j + 1] = temp
      }
    }
  }
  return consultasData

}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  contas.forEach((conta) => {
    let totalDeCompras = 0
    conta.compras.forEach((valor) => {
      totalDeCompras += valor
    })
    conta.saldoTotal -= totalDeCompras
  })
  return contas

}
