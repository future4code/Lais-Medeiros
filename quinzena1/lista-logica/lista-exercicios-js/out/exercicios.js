// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('1')
  const num2 = prompt('2')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('bananinha')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = prompt('Digite aqui a altura do retangulo') 
  const largura = prompt('Digite aqui a largura do retanguto')
  console.log(Number(altura) * Number(largura)) 
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoatual = prompt ('2020')
  const anonascimento = prompt ('1990')
console.log(Number(anoatual) - Number(anonascimento))
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
const peso = prompt('Insira seu peso em kg:')
const altura = prompt('Insira o sua altua:')

console.log(Number(peso) / Number(altura * altura) )
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt('Meu nome é')
  const idade = prompt('tenho')
  const email=prompt('e o meu e-mail é')
  

console.log("Meu nome é " + nome  + ", tenho " +  idade  + " anos, e o meu email é " +  email + ".")


}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  var cores = [];
  cores[0] = prompt("Qual sua primeira cor favorita")
  cores[1] = prompt ("Qual sua segunda cor Favorira")
  cores[2] = prompt ("Qual sua terceira favorita")
  
  console.log(cores)
}
// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
const texto = prompt ("oi")
console.log(texto.toLocaleUpperCase("oi"))
} 


// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custo = prompt('3000')
  const valor = prompt('100')

  console.log(Number(custo) / Number(valor))
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui

  let string1 = prompt("Digite uma palavra")
  let string2 = prompt("Digite uma segunda palavra")
  console.log (string1.length === string2.length) 
  
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui

 const palavra1= prompt("digite uma palavra")
 const palavra2 = prompt( "Digite uma nova palavra")
 const converter1 = palavra1.toLocaleUpperCase()
 const converter2 = palavra2.toLocaleUpperCase()
 const comparacao = converter1 === converter2
 console.log(comparacao) 


}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  
 let atual = Number(prompt("Digite o ano atual"))
 let nascimento = Number(prompt("Digite o ano de nascimento?"))
 let carteira = Number(prompt("Data de emissão RG"))
  
 let idade = atual - nascimento
 let emissao = atual - carteira
 
 let renova0 = idade <= 20 && emissao / 5 >=1
 let renova1 = idade > 20 && idade <= 50 && emissao / 10 >= 1
 let renova2 = idade > 50 && emissao / 15 > 1

 let renova = renova0 || renova1 || renova2
 console.log(renova)

}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = Number(prompt("Digite o ano atual?"))
  
  const divisivel4 = ano % 4 === 0 && ano % 100 !== 0
  const divisivel400 = ano % 400 === 0
  
  console.log(divisivel4 || divisivel400)

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
 
const idade = prompt('Qual sua idade?')
const ensinomedio = prompt('Tem ensino médio completo?')
const disponibilidade = prompt ('tem disponibilidade de horário?')

const resposta = idade === "sim"&& ensinomedio === "sim"&& disponibilidade === "sim"

console.log(resposta)






}


