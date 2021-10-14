import React from "react";
import axios from "axios"

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
const headers = {
  headers : {
    Authorization: 'Lais-Medeiros-Banu'
  }
  
}
export default class Pagina1 extends React.Component{
  state={
    dados:[],
    nome:"",
    mail:""
  }

  componentDidMount(){
    this.pegarDados()
  }
  
  pegarDados = () =>{
    axios.get(url.headers)
    .then((res)=>{
      this.setState({dados: res.data.result.list})
    })
    .catch((err)=> console.log(err))
  }

  criarDados = () =>{
    const body = {
      name: this.state.nome
    }
    axios
    .post(url,body,headers)
    .then((res)=>{
      console.log(res)
      this.setState({nome:""})
      this.pegarDados()
    })
    .catch((err)=>console.log(err))
  }
   
    
  


  onChangeNome = (e)=>{
    this.setState({nome: e.target.value})
  }
  onChangeEmail = (e)=>{
    this.setState({email: e.target.value})
  }
    render(){
      console.log(this.state.dados)
      const listaDeDados = this.state.dados.map((dadosNovos)=>{
        return <p key = {dadosNovos.id}>{dadosNovos.name}</p>
      })

        return (
          <div>
            <h1>Labenusers</h1>
            
            <h2>Criar Usuário</h2>
            <input
            value={this.state.nome}
            onChange = {this.onChangeNome}
            placeholder ={"Nome"}
            />
            <input
            value={this.state.email}
            onChange = {this.onChangeEmail}
            placeholder ={"Email"}
            />
            <button onClick={this.criarDados}>Criar</button>
            <div>{listaDeDados}</div>
        
          </div>
        );
      }
     

}