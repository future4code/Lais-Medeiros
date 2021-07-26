// 1.Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
//let array
  //  console.log('a. ', array) //undefined
    
    //array = null
    //console.log('b. ', array) // null
    
   // array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    //console.log('c. ', array.length) //11
    
    //let i = 0
    //console.log('d. ', array[i]) //3
    
    //array[i+1] = 19
    //console.log('e. ', array) // 3,19,5,6,7,8,9,10,11,12,13
    
    //const valor = array[i+6]
    //console.log('f. ', valor)  //9

//2.Leia o código abaixo com atenção
//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

//const frase = prompt("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROSCOS 27

//Exercícios de escrita de código
//1.Faça um programa que pergunte ao usuário seu nome e seu e-mail.
// Em seguida, imprima na tela a seguinte mensagem:

//const usuario = prompt("Nome do Usuario?")
//const email = prompt("E-mail do ususario?")

//console.log("O e-mail " + email + " foi cadastrado com sucesso. " + "Seja bem vinda(o)," + usuario  + "!")

//2.Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 
//Em seguida, siga os passos:

//a.a) Imprima na tela o array completo
//const comidas =["Lazanha","Comida Baiana","Almodegas","Macarão com salsicha","Moqueca de Araia"]
//console.log( comidas )

//b.Imprima na tela a mensagem "Essas são as minhas comidas preferidas: "
//, seguida por cada uma das comidas, uma embaixo da outra.
//let comidas2= ["lazanha, Comida Baiana, Almodegas,Macarrão com salsicha,Moqueca de Araia"]
//console.log('Essas são as minhas comidas preferidas:
//${comidas2[0]}
//')


//c.Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
//Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
//let comida =["Lazanha","Comida Baiana","Almodegas","Macarão com salsicha","Moqueca de peixe"]
//let usuario = prompt("Qual sua comida preferida?")
//let comidafavorita = comida.splice(1,1, usuario)
//console.log("Alista atualizada fica ${comidafavorita}")



//3.Faça um programa, seguindo os passos:
//a.Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as,
// uma por uma, no array
//c) Imprima o array na tela
//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
//e) Remova da lista o item de índice que o usuário escolheu.
//f) Imprima o array na tela

//const listaDeTarefas = []

//listaDeTarefas.push(prompt("Digite sua Primeira Tarefa?"))
//listaDeTarefas.push(prompt("Digite a segunda tarefa?"))
//listaDeTarefas.push(prompt("Digite a terceira tarefa?"))

//console.log(listaDeTarefas)

//const tarefarealizada = prompt("Digite uma tarefa que você ja realizou 0 á 2")
//listaDeTarefas.splice(1,1)
//console.log(listaDeTarefas)






































