import React from "react";
import axios from "axios";
import "./styles.css"






export default class CriarPlayList extends React.Component{
    state = {
        nomePlayList:"",
    }



    adicionarMusica =() =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body ={
            name: this.state.nomePlayList
        }
        axios.post(url,body,{
            headers:{
                Authorization:"lais-medeiros-banu"
            }
        })
        .then((res)=>{
            alert("Música Cadastrada com sucesso!")
            this.setState({nomePlayList:""})
            console.log(res)
        })
        .catch((err)=>{
            alert(err.response.data.message)
        })
    }

    nomeMusica = (e)=>{
        this.setState({nomePlayList: e.target.value})
    }


    render(){
        return(
            <div className={"listaConteiner"}>
                
                <h1> Playlist</h1>
                <input className={"Criar1"}
                placeholder= {"Nome da Música"}
                value = {this.state.nomePlayList}
                onChange = {this.nomeMusica}
                />
                
                <button className={"Criar2"} onClick={this.adicionarMusica}>Criar</button>
                
            </div>
        )
    }
}