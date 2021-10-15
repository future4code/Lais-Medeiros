import React from "react";
import axios from "axios";

export default class VisualizarPlayList extends React.Component{
    state ={
        lista: []
    }

    componentDidMount(){
        this.pegarMusica()
    }

    pegarMusica = ()=>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url,{
            Authorization:"lais-medeiros-banu"
        })
        .then((res)=>{
            console.log(res)
            this.setState({lista: res.data})
        })
        .catch((err)=>{
            console.log("Não foi possivel realizar o cadastro")
        })
    }

    render(){
        return(
            <div>
                <h2>Música Adicionadas</h2>
            </div>
        )
    }
}