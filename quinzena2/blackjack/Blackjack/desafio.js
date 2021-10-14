/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   
   //console.log(" Serja Bem Vindo(a) ao Jogo de BlackJack!")
    
//if(confirm("Quer iniciar uma nova rodada?")){
//console.log("Inicio de Jogo.")
//let cartausuario1 = comprarCarta()
//let cartausuario2 = comprarCarta()
//let cartacomp1 = comprarCarta()
//let cartacomp2 = comprarCarta()

//let usuario1 = cartausuario1.valor 
//let computador1 = cartacomp1.valor
//let jogadausuario= usuario1 + usuario1
//let jogadacomput = computador1 + computador1
 
//if(jogadausuario > jogadacomput){
  // console.log(`Usuario - carta: ${cartausuario2.texto} ${cartausuario2.texto} - Pontuação: ${usuario1}`)
  // console.log(`Computador - carta: ${cartacomp2.texto} ${cartacomp2.texto} - Pontuação: ${computador1}`)
  // console.log("O Usuario ganhou!")
 //}else if(jogadausuario < jogadacomput){
   //console.log(`Usuario - carta: ${cartausuario2.texto} ${cartausuario2.texto} - Pontuação: ${usuario1}`)
   //console.log(`Computador - carta: ${cartacomp2.texto} ${cartacomp2.texto} - Pontuação: ${computador1}`)
   //console.log("O computador ganhou!")
//}else if(jogadausuario === jogadacomput){
  // console.log(`Usuario - carta: ${cartausuario2.texto} ${cartausuario2.texto} - Pontuação: ${usuario1}`)
   //console.log(`Computador - carta: ${cartacomp2.texto} ${cartacomp2.texto} - Pontuação: ${computador1}`)
  // console.log("Empate!")
//}
//} else{
  // console.log("O Jogo acabou.")
//}



//let cartasUsuario = []
//let cartaComputador = []
//let textoscartasUsuario = []
//let textoscartaComputador = []

//cartasUsuario.push(comprarCarta(), comprarCarta())
//cartaComputador.push(comprarCarta(), comprarCarta())

//let soma = 0
//while (cartasUsuario[0].valor === 11 && cartasUsuario[1].valor === 11 || cartaComputador[0].valor === 11 && cartaComputador[1].valor === 11) {
  // cartasUsuario = []
   //cartaComputador = []
   //cartasUsuario.push(comprarCarta(), comprarCarta())
  // cartaComputador.push(comprarCarta(),comprarCarta())

//}
//let rodadaAtual = confirm(`Suas cartas são: ${cartasUsuario[0].texto} e ${cartasUsuario[1].texto}.
 //A carta revelada do computador é ${cartaComputador[0].texto}
 //Deseja comprar mais cartas?`)

 // Rodada Usuario

//let somarodada = (cartasUsuario[0].valor + cartasUsuario[1].valor)

//while (somarodada <= 21 && rodadaAtual === true) {
  // cartasUsuario.push(comprarCarta())
//somarodada = somarodada + cartasUsuario.pop().valor

//rodadaAtual = confirm(`Suas cartas são : ${textoscartasUsuario}. 
//A carta revelada do computador é ${cartaComputador[0].texto}
//Deseja comprar mais uma carta?`)
//}

// Computador

 //somarodada1 = (cartaComputador[0].valor + cartaComputador[1].valor)

//while (somarodada1 <= 21 && rodadaAtual === true) {
  // cartaComputador.push(comprarCarta())
//somarodada = somarodada + cartaComputador.pop().valor

//rodadaAtual = confirm(`Suas cartas são : ${textoscartaComputador}. 
//A carta revelada do computador é ${cartasUsuario[0].texto}
//Deseja comprar mais uma carta?`)
//}
