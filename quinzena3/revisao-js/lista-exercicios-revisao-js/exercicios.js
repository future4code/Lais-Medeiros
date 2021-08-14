// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertido = []
  while(array.length){
    arrayInvertido.push(array.pop())
  }
  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numeroParElevado = []
  let arrayParesQuadrado = array.filter((item)=>{
    if(item % 2 === 0){
  return  true
    }
    return falso
  })
  let paresQuadrado = arrayParesQuadrado.map((item)=>{
    return item ** 2
  })
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let numeroPar  = []
  for (let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      numeroPar.push(array[i])
    }else{

    }
  }
  return numeroPar
}



// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for(const numero of array){
    if(numero > maiorNumero){
      maiorNumero = numero 
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
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 
//a) `booleano1 && booleano2 && !booleano4` 
//b) `(booleano1 && booleano2) || !booleano3` 
//c)  `(booleano2 || booleano3) && (booleano4 || booleano1)` 
//d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)` 
//e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)`
  const resposta = [false, false,true , true, true]
  return resposta
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
let retornoNumero = []
for (let i = 0; i < n.length  ; i++){
  if(i % 2 === 0){
    retornoNumero = n.push(i)
  }
}
return retornoNumero
}
// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if ( a === b && b === c){
       return 'Escaleno'
}else if(a != b && b != c && c != a){
  return 'Equilátero'
}else{
  return 'Isósceles'
}
  
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {
  

}

// EXERCÍCIO 12
function filmeFavorito() {
  const favoritosFilme = {
  nome: "O Diabo Veste Prada",
  ano: 2006,
  diretor: "David Frankel",
  atores:["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return favoritosFilme
}

// EXERCÍCIO 13
function imprimeChamada() {
  const chamadaFilme = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores:[" Meryl Streep",  " Anne Hathaway",  " Emily Blunt",  " Stanley Tucci."]
}
return "Venha assistir ao filme "+ chamadaFilme.nome + ", de " + chamadaFilme.ano + ", dirigido por " + chamadaFilme.diretor + " e estrelado por" + chamadaFilme.atores

}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
const retangulo ={
largura: lado1,
altura : lado2,
perimetro :(2 * (lado1 + lado2)),
area : (lado1 * lado2)
}
return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
