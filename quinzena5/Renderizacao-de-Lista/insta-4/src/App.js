import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`

width: 300px;
diplay: flex;
  
`
const ButtonConteiner = styled.div`
width: 300px;
margin-bottom: 20px;
diplay: flex;
padding-left: 10px;
justify-content: space-between;
`


r

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


    nomeUsusario:"",
    fotoUsusario:"",
    fotoPost:""
  }

  adicionarPost = () =>{
    const novosPost = {
      nomeUsuario : this.state.nomeUsusario,
      fotoUsuario : this.state.nomeUsusario,
      fotoPost : this.state.fotoPost
    }
    const novosPosts = [...this.state.post, novosPost]
    this.setState({ post: novosPosts})
  }

  onChangeInputNome = (e) =>{
    this.setState({nomeUsusario: e.target.value}
      )
  }
  onChangeInputFoto = (e) =>{
    this.setState({fotoUsusario: e.target.value}
      )
  }
  onChangeInputPost = (e) =>{
    this.setState({fotoPost: e.target.value}

      )
  }

  render() {

    const listaDePostagem = this.state.post.map((postagem)=>{
      return(
        <Post
        nomeUsuario = {postagem.nomeUsuario}
        fotoUsuario = {postagem.fotoUsuario}
        fotoPost = {postagem.fotoPost}
        />

      )
    })
    return (
      <MainContainer> 
          <ButtonConteiner>
          <input 
            value ={this.state.nomeUsusario}
            onChange={this.onChangeInputNome}
            placeholder={"Nome do Usuario"}
         />
            <fotoConteiner>
            <input 
            value ={this.state.fotoUsusario}
            onChange={this.onChangeInputFoto}
            placeholder={"Foto Usuario"}
          />
            </fotoConteiner>
          
           
          <input 
            value ={this.state.fotoPost}
            onChange={this.onChangeInputPost}
            placeholder={"Foto Post"}
          />
           <button onClick = {this.adicionarPost}>Adicionar</button>
           </ButtonConteiner>


            
            {listaDePostagem}
      </MainContainer>
    );
    
  }
}

export default App;

