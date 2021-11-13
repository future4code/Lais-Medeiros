import React from "react";
import axios from "axios";
import styled from "styled-components";


const ManConteiner = styled.div`
    background: rgba(88, 88, 92, 0.411);
    min-height: 200px;
    display: flex;
    align-items: center;
    padding: 0 500px;
    justify-content: space-between;
`


const CriarConteiner = styled.div`
    
    font-size:50px;
    display: flex;

`

const ButtonConteiner1 = styled.div`
    display: flex;
    margin:10%;
    height: 30px ;
    border-style: outset;
    border-color:solid black;
    
`


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
            <ManConteiner>
                <CriarConteiner>
                <h1> Music Play</h1>
                </CriarConteiner>
                <ButtonConteiner1>
                <input
                    placeholder= {"Nome da Música"}
                    value = {this.state.nomePlayList}
                    onChange = {this.nomeMusica}
                />
                <button  onClick={this.adicionarMusica}>Adicionar</button>
                </ButtonConteiner1>
                
            </ManConteiner>
        )
    }
}