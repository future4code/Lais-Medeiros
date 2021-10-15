import React from "react";
import axios from "axios";


export default class CriarPlayList extends React.Component{
    state = {
        nome:"",
    }



    adicionarMusica =() =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body ={
            name: this.state.nome
        }
        axios.post(url,body,{
            headers:{
                Authorization:"lais-medeiros-banu"
            }
        })
        .then((res)=>{
            alert("Música Cadastrada com sucesso!")
            this.setState({nome:""})
            console.log(res)
        })
        .catch((err)=>{
            alert(err.response.data.message)
        })
    }

    nomeMusica = (e)=>{
        this.setState({nome: e.target.value})
    }


    render(){
        return(
            <div>
                <h1>Criar Lista de Música</h1>
                <input 
                placeholder= {"Nome da Música"}
                value = {this.state.nome}
                onChange = {this.nomeMusica}
                />
                
                
                <button onClick={this.adicionarMusica}>Criar</button>
            </div>
        )
    }
}