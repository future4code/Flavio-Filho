// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = prompt("Digite a altura do retângulo")
  const largura = prompt("Digite a largura do retângulo")

  console.log(altura * largura)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = prompt("Digite o ano atual")
  const anoNascimento = prompt("Digite o ano de seu nascimento")

  console.log(anoAtual - anoNascimento)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = prompt("Digite o seu peso em kg")
  const altura = prompt("Digite sua altura em metros")

  console.log(peso / (altura * altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt("Digite seu nome")
  const idade = prompt("Digite sua idade")
  const email = prompt("Digite seu email")

  console.log("Meu nome é "+ nome+ ", tenho "+ idade+ " anos, e o meu email é "+ email+ ".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt("Digite sua primeira cor favorita")
  const cor2 = prompt("Digite sua segunda cor favorita")
  const cor3 = prompt("Digite sua terceira cor favorita")
  const arraycor = [cor1, cor2, cor3]

  console.log(arraycor)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const nomeUsuario = prompt("Digite seu nome")
  const nomeMaiuscula = nomeUsuario.toUpperCase()
  console.log(nomeMaiuscula)
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const espetáculo = Number(prompt("Quanto custa um espetáculo de teatro?"))
  const ingresso = Number(prompt("Quanto custa cada ingresso?"))
  console.log(espetáculo / ingresso)

}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const usuarioNascimento = prompt("Digite seu endereço?")
  const usuarioNacionalidade = prompt("Qual a sua nacionalidade?")
  
  console.log(usuarioNacionalidade.length === usuarioNascimento.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const string1 = prompt("Olá, tudo bem?")
  const string2 = prompt("Qual seu nome?")
  const string1Minusculas = string1.toLocaleLowerCase()
  const string2Minusculas = string2.toLocaleLowerCase()
  
  console.log(string2Minusculas === string1Minusculas)
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = Number(prompt("Digite o ano atual?"))
  const anoNascimento = Number(prompt("Digite seu ano de nascimento"))
  const anoIdentidade = Number(prompt("Digite o ano em que sua carteira de identidade foi emitida"))
  const menos20Anos = (anoAtual - anoNascimento) <= 20 && (anoAtual - anoIdentidade) >= 5
  // const renovacao1 = (20 % menos20Anos) === 0
  
  const entre20e50 = (anoAtual - anoNascimento) > 20 && (anoAtual - anoNascimento) <= 50 && (anoAtual - anoIdentidade) >= 10
  // renovacao2 = 

  const acima50 = (anoAtual - anoNascimento) > 50 && (anoAtual - anoIdentidade) >= 15
  // renovacao3

  console.log (menos20Anos || entre20e50 || acima50)
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const anoUsuario = Number(prompt("Digite o ano"))
  const anoBissexto1 = anoUsuario % 400 === 0
  const anoBissexto2 = anoUsuario % 4 === 0 && anoUsuario % 100 !== 0
  
  console.log(anoBissexto1 || anoBissexto2)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código 
  const condicao1 = prompt("Você tem mais de 18 anos?")
  const condicao2 = prompt("Você possui ensino médio completo?")
  const condicao3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  const inscricaoValida = condicao1.includes("sim") && condicao2.includes("sim") && condicao3.includes("sim")

  console.log(inscricaoValida)

  
}