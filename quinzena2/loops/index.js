//Exercícios de interpretação de código
//1.O que o código abaixo está fazendo? Qual o resultado impresso no console?

// Ele vai pecorrer a estrutura somano os valores nenor que cinco,  resultado é 10

//2. 
//a)O que vai ser impresso no console?

//Será impresso os numros maiores que 18.

//b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` 
//é suficiente? Se sim, o que poderia ser usado para fazer isso?

 //sim, adicionando o indexOf
 

//3.Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

//seria 4 linha, e em cada linha "*" com a qunatidade ex: na primeira linha "*" na segunada"**"....

//Se o usuário digitar "5", a saída deve ser: cinco linhas com cinco"*****"

//Exercício Escrita de cod
//1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, 
//um por um, e guarde esses nomes em um array
//c) Por fim, imprima o array com os nomes dos bichinhos no console

//let usuarioNomes = Number(prompt("Quantos bichinhos você possui?"))
//let nomes1 = []

//function nomes2( ){
  //  if(usuarioNomes === 0){ 
    //   console.log("Que pena! Você pode adotar um pet!")
    //} else { 
      //  for (let inserir = 0; inserir < usuarioNomes; inserir++) {

       //let adicionar1= prompt("Qual nome deles?")
       //nomes1.push(adicionar1)
       //console.log(nomes1)
    //}

    //}
//}
//nomes2()

//2.a) Escreva um programa que **imprime** cada um dos valores do array original.
 //let numeroOrigin = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
 //for(let i=0; i < 11 ; i++){
     //let numero = numeroOrigin[i]
     //console.log(numero)
 //}
//b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

//for(let i=0; i < 11 ; i++){
    //let numero = numeroOrigin[i] / 10
    //console.log(numero)
//}
//c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

//d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

//for(let resposta of numeroOrigin){
    //let indicePosicao = numeroOrigin.indexOf(resposta)
    //console.log(`O elemento do índex:´${ indicePosicao + 1} é: ${resposta}`) 
//}

//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

//function valor(retorno) {
   // let maior = 100
    //for(let maior=0; i < retorno.length ; maior++){
      //  if(retorno[i] > maior){
           // maior = maior[i]
            
       //}
    //}
 //return maior   
//}

   //valor(retorno)


     
 

