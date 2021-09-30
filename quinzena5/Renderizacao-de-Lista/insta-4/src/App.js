import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state={
    post:[
      {
          nomeUsuario:'Paulinha',
          fotoUsuario:'https://picsum.photos/50/50',
          fotoPost:'https://picsum.photos/200/150'

      },
      {
         nomeUsuario:'Val',
         fotoUsuario:'https://picsum.photos/50/51',
         fotoPost:'https://picsum.photos/200/150'

      },
      {
         nomeUsuario :'Eduardo',
         fotoUsuario :'https://picsum.photos/50/52',
         fotoPost: 'https://picsum.photos/200/150'

  }
    ],

    valorNomeUsusario:"",
    valorFotoUsusario:"",
    valorFotoPost:""
  }

  adicionarPessoas = () =>{
    const novosPost = {
      nomeUsuario : this.state.valorNomeUsusario,
      fotoUsuario : this.state.valorNomeUsusario,
      fotoPost : this.state.valorFotoPost
    }
    const novosPosts = [...this.state.post, novosPost]
    this.setState({ pessoas: novosPosts})
  }

  onChangeInputNome = (e) =>{
    this.setState({valorNomeUsusario: e.target.valeu}
      )
  }
  onChangeInputFoto = (e) =>{
    this.setState({valorFotoUsusario: e.target.valeu}
      )
  }
  onChangeInputPost = (e) =>{
    this.setState({valorFotoPost: e.target.valeu}
      )
  }

  render() {
    const listaDePostagem = this.state.post.map((pessoa)=>{
      return(
        <p>
          {pessoa.nomeUsuario}
          {pessoa.fotoUsuario}
          {pessoa.fotoPost}
        </p>
      )
    })
    return (
      <MainContainer>
        <Post
        
        />
        
          <input 
            valeu ={this.state.valorNomeUsusario}
            onChange={this.onChangeInputNome}
            placeholder={"Nome do Usuario"}
         />
          <input 
            valeu ={this.state.valorFotoUsusario}
            onChange={this.onChangeInputFoto}
            placeholder={"Foto Usuario"}
          />
          <input 
            valeu ={this.state.valorFotoPost}
            onChange={this.onChangeInputPost}
            placeholder={"Foto Post"}
          />
    
           <button onClick = {this.adicionarPessoas}>Adicionar</button>

            {listaDePostagem}
      </MainContainer>
    );
    
  }
}

export default App;

