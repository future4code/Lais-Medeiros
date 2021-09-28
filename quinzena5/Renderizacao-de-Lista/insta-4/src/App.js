import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import "./App.css"

const AppConteiner = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

class App extends React.Component {
  state ={
    postagem:[
      {
        nomeUsuario:'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
      }
    ]
  }

  render() {
    const listaDePostagem = this.state.postagem.map((postar)=>{
      return(
        <div className= "AppConteiner">
          <p>
        {postar.nomeUsuario}
        {postar.fotoUsuario}
        { postar.fotoPost}
        </p>
        
        </div>
        
      )
    })
    return (
      <div>{listaDePostagem}</div>
    );
  }
}

export default App;