
//Leia o código abaixo:
//a. Explique o que o código faz. Qual o teste que ele realiza? 

//e programação utilizada para condicionais for verdadeira o código dentro do if
//é executado;Ele indentificar os numeros par e impar  

//b) Para que tipos de números ele imprime no console 
//"Passou no teste"? 
// Impriprime para numeros par

//c) Para que tipos de números a mensagem é "Não passou no teste"?

// Para numeros impar

//2.
//a) Para que serve o código acima?

//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

// O preço  da fruta maçã é 2.25

//c) Considere que um usuário queira comprar uma `Pêra`,
// qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` 
//(o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

// Ele imprime as informaçães somente o preço da fruta  Pêra 5.5

//3.a) O que a primeira linha está fazendo?
 // O numero digitado e maior que zero

 //b) Considere um usuário digitou o número 10.
// Qual será a mensagem do terminal? E se fosse o número -10?

// com numero 10 seria "Esse numero passou no teste"
// imprime  -10  

//c) Haverá algum erro no console?
// Justifique usando os conceitos de bloco ou escopo.
// Sim 
//const numero = Number(prompt("Digite o primeiro número."))

//if(numero > 0) {
 // console.log("Esse número passou no teste")
	//let mensagem = "Essa mensagem é secreta!!!"  
//} 
//console.log(mensagem)

//Exercícios de escrita de código

//1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
//b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir.
// Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

//const usuarioIdade = prompt("Qual sua idade")
//const numero = Number(usuarioIdade)

//if (numero > 18){
    //console.log("Você pode dirigir.") 
//}else{
    //console.log("Você não pode dirigir.")
//}

//2.Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar
// M (matutino) ou V (Vespertino) ou N (Noturno). 
//Imprima no console a mensagem "Bom Dia!",
// "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

//const turno = prompt (" Digite M, V, N" ) 

//if(turno === "M"){
    //console.log("Bom dia!")
//}else if(turno === "V"){
    //console.log("Boa Tarde!")
//}else if(turno === "N"){
   // console.log("Boa Noite")
//}else{
    //console.log("Letra errada?")
//}

    
//3.Repita o exercício anterior, mas utilizando a estrutura de switch case agora

//let turnos = prompt("Digite M , V ou N para saber seu tuno?") 
//let mensagem 
//switch (turnos) {
  //  case "M":
       // console.log("Bom dia!")
        //break;
        //case "V":
        //console.log("Boa Tarde!")
         //   break;
           // case "N":
        //console.log("Boa Noite!")
        //break;
    //default:
       // console.log("Letra não indentificada")
       // break;
//}

//4. Considere a situação: você vai ao cinema com um amigo ou amiga,
//porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia 
//**e** se o ingresso está abaixo de 15 reais.
// Faça um código que pergunta ao usuário qual
// o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, 
//então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, 
//imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

//const filme = prompt("Qual gênero de filme vão assistir?") === "fantasia"
//const valor = prompt("Qual valor do ingresso?") < "15"

//function ingresso(/filme, valor) {
    //if (filme || valor) {
      //console.log(" Bom Filme!");
    //} else {
      //console.log("Escolha outro");
    //}
 // }
//ingresso(filme,valor)

//DESAFIOS
//1.
//const filme = prompt("Qual gênero de filme vão assistir?") === "fantasia"
//const valor = prompt("Qual valor do ingresso?") < "15"
//const lanche = prompt("Qual lanche você vai comprar?")

//function ingresso(filme, valor, lanche) {
  //  if (filme || valor || lanche) {
     // console.log(" Bom Filme! e aproveite o seu, ${lanche}");
    //} else {
      //console.log("Escolha outro");
    //}
  //}
//ingresso(filme,valor,lanche)


