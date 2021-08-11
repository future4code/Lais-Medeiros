
//Exercícios de interpretação de código
//1.
//a) O que vai ser impresso no console?
// Foi impresso novas array, contendo cada nome e apelidos separados  

//2.a) O que vai ser impresso no console?
// Será impresso uma nova array somente com os nomes

//3.a) O que vai ser impresso no console?
// Na nova array foi retirada { nome: "Letícia Chijo", apelido: "Chijo" }, aparecendo 
//somente as informações desejadas.


//Exercícios de escrita de código

//1.Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
//realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},]
//a) Crie um novo array que contenha apenas o nome dos doguinhos

//const petsNomes = pets.map((pets, index, array) =>{
  //  return pets.nome 
//})  

//console.log(petsNomes)

//b) Crie um novo array apenas com os [cachorros salsicha]

//const petsSalsicha = pets.filter((pets,idex,array)=> {
   // return pets.raca === "Salsicha"
//})
//console.log(petsSalsicha)

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!


//function imprimir(pets, index, array){
   // if(pets.raca == "Poodle"){
//return `Você ganhou um cupom de desconto de 10% para tosar o/a: ${pets.nome}!`
   // }
   
//}
//const petsmensagem = pets.map(imprimir)
//console.log(petsmensagem)


// 2 .Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando
// as funções de array map e filter:

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

 //a) Crie um novo array que contenha apenas o nome de cada item

 //const produtosNomes = produtos.map((produtos, index, array) =>{
    //return produtos.nome 
//})  
//console.log(produtosNomes)

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item,
// aplicando 5% de desconto em todos eles


 
 
 //c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

 //const produtosBebidas = produtos.filter((produtos, index, array)=>{
     //return produtos.categoria === "Bebidas"
// })
 //console.log(produtosBebidas)

 //d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
 //const produtosYpe = produtos.filter((produtos, index, array )=>{
     //return produtos.nome.includes("Ypê")
 //})
 //console.log(produtosYpe)

 //e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
 //Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

//const arrayprodutos = produtos.filter((produtos,idex,array)=>{
   //return produtos.nome.includes("Ypê")   
//})
//const produto1 = arrayprodutos.map((produtos, index, array)=>{
    //return produtos.nome
//})
//const produto2= arrayprodutos.map((produtos,idex,array)=>{
    //return produtos.preco
//})

//function imprimir1(produto1 , produto2){
    //console.log("Compre", produto1, "Por", produto2)
//}

//mprimir1(produto1 , produto2)







