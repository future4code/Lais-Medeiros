//1.Leia o código abaixo
//function minhaFuncao(variavel) {
	//return variavel * 5
//}
//console.log(minhaFuncao(2))
//console.log(minhaFuncao(10))

//a) O que vai ser impresso no console?
// Será impresso 10 e 50 

//b) O que aconteceria se retirasse os dois `consolplesmente invocasse a função
// `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//Não iria imprimir nada, por que é necessario o console para imprimir a função desejada.

//Leia o código abaixo
//let textoDoUsuario = prompt("Insira um texto");

//const outraFuncao = function(texto) {
	//return texto.toLowerCase().includes("cenoura")
//}

//const resposta = outraFuncao(textoDoUsuario)
//console.log(resposta)

//a. Explique o que essa função faz e qual é sua utilidade
//toLowerCase retona todas como menusculo, icludes determina se contem um determinado elemento
//então quando o usuario digitar o texto irar imprir tudo em minúsculo, indentificando true ou false caso haja cenoura ou não

//Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//i.   Eu gosto de cenoura // true
//ii.  CENOURA é bom pra vista // true
//iii. Cenouras crescem na terra // true

//Exercícios de escrita de código

//Escreva as funções explicadas abaixo:
//a.A função não deve receber nenhum parâmetro
// e deve imprimir uma mensagem falando algumas informações sobre você, como: 

//function minhasInfor(){

    //const informa = "Eu sou Lais, tenho 34 anos,moro em salvador e sou estudante"
    //console.log(informa)
//}
//minhasInfor()

//b)  Agora escreva uma função que receba 4 parâmetros que correspondem 
//às informações de uma pessoa: o nome (string), a idade (number), a cidade (string)
// e uma profissão (string).
// Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

//function inforUsuario(nome, idade, cidade,profissao){
     
//console.log("Eu sou",nome ,"tenho", idade, "anos, moro na cidade", cidade,"minha profissão é", profissao)
//}
//inforUsuario("Lais", 34, "Salvador", "Maquiadora")

//2. Escreva as funções explicadas abaixo:

//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
//function calculo(numero1, numero2){
    //const resultado = numero1 + numero2
    //console.log(resultado)
//}
//calculo(15,25)


//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
//function boolea(num1,num2){
    //const maior= num1 > num2
    //console.log(maior)
//}
//boolea(30,25)

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

//function novaFuncao(saoPar){
 //const saoPar1 = "Insira um número par"
 //console.log(saoPar % 2 ===0)
 
//}
//novaFuncao(20)
   

//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

//function texto0(mensagem){ 
//const texto2= mensagem.toUpperCase()
//const texto1= mensagem.length

//console.log(texto1, texto2)
//}

//texto0("que dia lindo")

//3.Crie uma função para cada uma das operações básicas
// (soma, subtração, multiplicação e divisão). 
//Em seguida, peça para o usuário inserir dois números e chame essas 4 funções
// com esses valores inputados pelo usuário sendo o argumento.
// Por fim, mostre no console o resultado das operações:

//const numero3= Number(prompt("Digite um numeros?"))
//const numero4= Number(prompt("Digite outro numeros?"))

//function soma(){
//const somaNumero = numero3 + numero4
//console.log(somaNumero)
 
//}
//soma()

//function subtracao() {
//const subtrairNumero = numero3 - numero4
//console.log(subtrairNumero)
//}
//subtracao()    

//function multiplicar() {
//const multiplicarNumero = numero3 * numero4
//console.log(multiplicarNumero)
//}
//multiplicar() 

//function divisao(){
//const dividirNumero = numero3 / numero4
//console.log(dividirNumero)
//}
//divisao()
