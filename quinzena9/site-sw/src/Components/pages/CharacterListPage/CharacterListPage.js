import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "../../constants/baseUrl";

const Listas = styled.div`
 cursor: pointer;
 border: 1px solid black;
 width: 300px;
 height: 20px;
 margin: 5px;
 
`
const CharacterListPage = (props) =>{
    const [charecterList, setCharecterList] = useState("")

    const getCharacterList =()=>{
        const URL = `${BASE_URL}people`

        axios.get(URL)
        .then((res)=>{
            setCharecterList(res.data.results)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    
    useEffect(()=>{
        getCharacterList()

    },[])

   
  return (   
    <div>
        
        <h1>Lista de Personagens</h1>
       
        <div>
            {charecterList && charecterList.map((list)=>{
                return(<Listas onClick={()=>props.goToDetailsPage()}>{list.name}</Listas>)
            })}
        </div> 
     
    </div>
  );
}

export default CharacterListPage;