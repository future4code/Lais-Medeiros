import React from "react";
import axios from "axios";
import styled from "styled-components";

const Visualizar = styled.div`
    display: grid;
    place-items: center;
    margin: 20px;
    font-size:20px ;
    align-items: center;

`

const VisualizarLetra = styled.div`
    font-size:25px ;
    text-decoration: underline


`
const ButtonConteiner = styled.div`
    display:flex;
    justify-content: space-between;
    margin: 20px ;
    border-radius: 1px solid black;
    padding: 10px;
    width:350px;
    border-style: groove;
    text-shadow: 2px 2px 5px black;

`



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
            return( <ButtonConteiner
            kei={list.id}>{list.name}
            <button  onClick={() => this.deletarPlayList(list.id)}>Delete</button>
            </ButtonConteiner>
            )
        })
        return(
            <Visualizar>
                <VisualizarLetra>
                <h2>Músicas Adicionadas</h2>
                </VisualizarLetra>
                {listaDeMusica}
                
            </Visualizar>
        )
    }
}