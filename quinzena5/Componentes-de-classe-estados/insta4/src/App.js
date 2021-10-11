import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MensagemConteiner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component{
  render() {
      return(
        <MensagemConteiner>
         <Post
          nomeUsuario = {'Paulinha'}
          fotoUsuario = {'https://picsum.photos/50/50'}
          fotoPost =  {'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario = {'Vagner'}
          fotoUsuario = {'https://picsum.photos/50/51'}
          fotoPost =  {'https://picsum.photos/200/151'}
        />
        <Post
          nomeUsuario = {'Silvina'}
          fotoUsuario = {'https://picsum.photos/50/52'}
          fotoPost =  {'https://picsum.photos/200/152'}
        />
        <Post
          nomeUsuario = {'Eduardo'}
          fotoUsuario = {'https://picsum.photos/50/53'}
          fotoPost =  {'https://picsum.photos/200/153'}
        />

        </MensagemConteiner>
        
      )

  }
}




export default App;

