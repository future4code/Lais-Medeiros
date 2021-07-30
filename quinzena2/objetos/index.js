//1.Leia o código abaixo
//a) O que vai ser impresso no console?
// Matheus Nachtergaele / O length -1 nesse caso retorna 4, mas a contagem é feita de 0 a 3.
//{canal: "Globo", horario: "14h"}

//2.Leia o código abaixo
//a) O que vai ser impresso no console?
// nome :Juca, idade 3, raca: SRN
// altera o nome para Juba
//retorna uma nova string com todas as ocorrências de um padrão substituídas no fina "a" para "o" alterando de Juba para Jubo
//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//Essa sintaxe é chamada de espalhamento, realizar uma cópia inteira de um 
//objeto para outro e mudar (ou adicionar)

//3.Leia o código abaixo
//a) O que vai ser impresso no console?
// false, undefined
//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// o primeiro console existe a variavel solicitada, ja o segundo não exite a variavel altura

//Exercícios de escrita de código

//1.Resolva os passos a seguir:
//a) Crie um objeto. 
//Ele deve conter duas propriedades: nome (string)
//e apelidos (um array que sempre terá exatamente **três apelidos**).
// Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**

//const informacoes = {
  //  nome: "Lais",
    //apelidos: ["Lalai","Laizinha","Lai"]
//}

//console.log(`Eu sou ${informacoes.nome}, mas pode me chamar: ${informacoes.apelidos[0]}, ${informacoes.apelidos[1]} ou ${informacoes.apelidos[2]}`)

//b.Agora, usando o operador spread,
// crie um novo objeto mantendo o valor da propriedade nome,
// mas com uma nova lista de três apelidos. 
//Depois, chame a função feita no item anterior passando como argumento o novo objeto

//const novainformacoes = {
  //  ...informacoes
//}
 //novainformacoes.apelidos = ["Lamedas","Morena","Taizinha"]
 //console.log(`Eu sou ${novainformacoes.nome}, mas pode me chamar: ${novainformacoes.apelidos[0]}, ${novainformacoes.apelidos[1]} ou ${novainformacoes.apelidos[2]}`) 

 //2.Resolva os passos a seguir: 
 //a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
 //1. O valor de `nome`
//2. O numero de caracteres do valor `nome`
//3. O valor de `idade`
//4. O valor de `profissão`
//5. O numero de caracteres do valor `profissão`
 
//let infBasica = {
     //nome:"Rodrigo",
     //idade: 31,
     //profissao: "Advogado",
 //}

  //let infor = {
    // nome:"Rogerio",
     //idade: 33,
     //profissao: "Dançarino",

 //}
 //function retorno(nomeDosObjetos){
     //let resultado = []
     //let valor = typeof(nomeDosObjetos.nome)
     //let caracteresNome = nomeDosObjetos.nome.length
     //let valorIdade = typeof(nomeDosObjetos.idade)
     //let valorprofissao= typeof(nomeDosObjetos.profissao)
     //let profProfissao = nomeDosObjetos.profissao.length
     
     //resultado.push(valor,caracteresNome, valorIdade, valorprofissao,profProfissao)
    
     //console.log(resultado)
     
 //}
 //retorno(infBasica)
 //retorno(infor)
 



//console.log(infBasica.nome.length)
//console.log(infBasica.idade)
//console.log(infBasica.profissao)
//console.log(infBasica.profissao.length)



//3.Resolva os passos a seguir:
//a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho
//b) Crie três novos objetos que representem frutas de um sacolão.
// Eles devem ter as seguintes propriedades: nome (string) e disponibilidade
//(boolean - devem começar como true)
//c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho.
// Invoque essa função passando os três objetos criados. 
//d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 

//const carrinho = []

//let sacola0 = {
    //fruta1: "Maçã",
    //disponivel:true,
//} 
//let sacola1 = {
    //fruta2: "Banana",
    //disponive: true,
//} 
//let sacola2 = {
    //fruta3: "Melancia",
    //disponive:true,
//} 


//function objeto(){

   // carrinho.push(sacola0,sacola1,sacola2)
   
  //  console.log(carrinho)
//}
//objeto(sacola0, sacola1, sacola2)

