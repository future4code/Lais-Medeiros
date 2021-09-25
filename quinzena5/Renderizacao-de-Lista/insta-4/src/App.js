import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post'

const MensagemConteiner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
class MensagemConteiner extends React.Component{
  state = {
    cadastro :[
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Vagner",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/151"
      },
      {
        nomeUsuario: "Mateus",
        fotoUsuario: "https://picsum.photos/50/52",
        fotoPost: "https://picsum.photos/200/152"
      }
    ]
  }
  render() {
    const listaDeComponente = this.state.cadastro.map((cadastros)=>{
      return(
        <p>
        {cadastros.nomeUsuario}
        {cadastros.fotoUsuario}
        {cadastros.fotoPost}
        </p>
      )
    })
    return(
      <div>{listaDeComponente}</div>
    )
  }
}




export default MensagemConteiner;

