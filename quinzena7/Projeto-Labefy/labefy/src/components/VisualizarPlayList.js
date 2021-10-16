import React from "react";
import axios from "axios";
import "./styles.css"

 



export default class VisualizarPlayList extends React.Component{
    state ={
        playList: []
    }

    componentDidMount(){
        this.pegarMusica()
    }

    pegarMusica = ()=>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url,{
            headers:{
                Authorization:"lais-medeiros-banu"
            }
        })
        .then((res)=>{
            console.log(res)
            this.setState({playList: res.data.result.list})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    deletarPlayList = (playlistId) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`
        axios.delete(url,{
            headers:{
                Authorization: "lais-medeiros-banu"
            }
        })
        .then((res)=>{
            alert("Música deletada com sucesso!")
            this.pegarMusica()
            console.log(res.data.result.list) 
        })
        .catch((err)=>{
            console.log("Ocorreu um erro tente novamente")
        })
    }

    render(){
        const listaDeMusica = this.state.playList.map((list)=>{
            return( <div className={"Delete"}
            kei={list.id}>{list.name}
            <button  onClick={() => this.deletarPlayList(list.id)}>Delete</button>
            </div>
            )
        })
        return(
            <div className={"vizualizar"}>
                <h2>Música Adicionadas</h2>
                {listaDeMusica}
            </div>
        )
    }
}